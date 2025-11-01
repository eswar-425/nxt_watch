import {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiDislike, BiLike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import {
  SideContainer,
  LinkContainer,
  LinkItem,
  Icon,
  Name,
  MainContainer,
  RightContainer,
  LoaderContainer,
  VideoContainer,
  Title,
  Dot,
  Container,
  Views,
  Like,
  LikeButton,
  Dislike,
  DislikeButton,
  Save,
  SaveButton,
  BottomContainer,
  HrLine,
  ChannelContainer,
  ChannelLogo,
  ChannelDesc,
  Subscriber,
  ChannelName,
  Description,
  FailureContainer,
  FailureImg,
  FailureName,
  FailureDesc,
  RetryButton,
  ContactContainer,
  ContactHeading,
  ContactMedia,
  Ending,
  Logos,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSelected = (
    isDarkTheme,
    changeState,
    clickedList,
    changeDis,
    addItem,
    savedList,
  ) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccess(
          isDarkTheme,
          changeState,
          clickedList,
          changeDis,
          addItem,
          savedList,
        )
      case apiStatusConstants.failure:
        return this.renderFailure(isDarkTheme)
      default:
        return null
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid='loader'>
      <Loader
        type='ThreeDots'
        color='#3b82f6'
        height='50'
        width='50'
        className='youtube'
      />
    </LoaderContainer>
  )

  renderSuccess = (
    isDarkTheme,
    changeState,
    clickedList,
    changeDis,
    addItem,
    savedList,
  ) => {
    const {videoDetails} = this.state
    const {
      id,
      channel,
      description,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const changelike = () => changeState(id)
    const changeDislike = () => changeDis(id)
    const onClickSave = () => addItem(videoDetails, id)
    const isHave = clickedList.find(each => each.id === id)
    const isThere = savedList.find(each => each.id === id)
    const formatted = formatDistanceToNow(new Date(publishedAt))
    return (
      <VideoContainer>
        <ReactPlayer
          url={videoUrl}
          controls
          width='100%'
          light={thumbnailUrl}
        />
        <Title isDark={isDarkTheme}>{title}</Title>
        <BottomContainer>
          <Container>
            <Views>{viewCount} views </Views>
            <Dot>
              <BsDot />
            </Dot>
            <Views>
              {formatted[0] === 'o'
                ? formatted.slice(5, formatted.length)
                : formatted.slice(6, formatted.length)}{' '}
              ago
            </Views>
          </Container>
          <Container>
            <Container>
              <LikeButton
                onClick={changelike}
                isLike={isHave !== undefined ? isHave.isLiked : false}
              >
                <BiLike />
              </LikeButton>
              <Like
                onClick={changelike}
                isLike={isHave !== undefined ? isHave.isLiked : false}
              >
                Like
              </Like>
            </Container>
            <Container>
              <DislikeButton
                onClick={changeDislike}
                isDislike={isHave !== undefined ? isHave.isDisliked : false}
              >
                <BiDislike />
              </DislikeButton>
              <Dislike
                onClick={changeDislike}
                isDislike={isHave !== undefined ? isHave.isDisliked : false}
              >
                Dislike
              </Dislike>
            </Container>
            <Container>
              <SaveButton
                onClick={onClickSave}
                isSave={isThere !== undefined ? isThere.isSave : false}
              >
                <RiPlayListAddLine />
              </SaveButton>
              <Save
                onClick={onClickSave}
                isSave={isThere !== undefined ? isThere.isSave : false}
              >
                {isThere !== undefined ? 'Saved' : 'Save'}
              </Save>
            </Container>
          </Container>
        </BottomContainer>
        <HrLine isDark={isDarkTheme} />
        <ChannelContainer>
          <ChannelLogo src={profileImageUrl} alt='channel logo' />
          <ChannelDesc>
            <ChannelName isDark={isDarkTheme}>{name}</ChannelName>
            <Subscriber>{subscriberCount} subscribers</Subscriber>
          </ChannelDesc>
        </ChannelContainer>
        <Description isDark={isDarkTheme}>{description}</Description>
      </VideoContainer>
    )
  }

  onClickRetry = () => this.getDetails()

  renderFailure = isDarkTheme => (
    <FailureContainer isDark={isDarkTheme}>
      <FailureImg
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt='failure view'
      />
      <FailureName isDark={isDarkTheme}>Oops! Something Went Wrong</FailureName>
      <FailureDesc isDark={isDarkTheme}>
        We are having some trouble to complete your request. Please try again.
      </FailureDesc>
      <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
    </FailureContainer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            activeId,
            changeTab,
            routesList,
            changeState,
            clickedList,
            changeDis,
            addItem,
            savedList,
          } = value

          return (
            <>
              <Header />
              <MainContainer>
                <SideContainer isDark={isDarkTheme}>
                  <LinkContainer>
                    {routesList.map(each => {
                      const click = () => changeTab(each.id)
                      return (
                        <Link
                          to={each.link}
                          className='link'
                          key={each.id}
                          onClick={click}
                        >
                          <LinkItem
                            isActive={activeId === each.id}
                            isDark={isDarkTheme}
                          >
                            <Icon
                              type='button'
                              isActive={activeId === each.id}
                              isDark={isDarkTheme}
                            >
                              {each.icon}
                            </Icon>
                            <Name
                              isActive={activeId === each.id}
                              isDark={isDarkTheme}
                            >
                              {each.text}
                            </Name>
                          </LinkItem>
                        </Link>
                      )
                    })}
                  </LinkContainer>
                  <ContactContainer>
                    <ContactHeading isDark={isDarkTheme}>
                      CONTACT US
                    </ContactHeading>
                    <ContactMedia>
                      <Logos
                        src='https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
                        alt='facebook logo'
                      />
                      <Logos
                        src='https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'
                        alt='twitter logo'
                      />
                      <Logos
                        src='https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'
                        alt='linkedin logo'
                      />
                    </ContactMedia>
                    <Ending isDark={isDarkTheme}>
                      Enjoy! Now to see your channels and recommendations!
                    </Ending>
                  </ContactContainer>
                </SideContainer>
                <RightContainer
                  isDark={isDarkTheme}
                  data-testid='videoItemDetails'
                >
                  {this.renderSelected(
                    isDarkTheme,
                    changeState,
                    clickedList,
                    changeDis,
                    addItem,
                    savedList,
                  )}
                </RightContainer>
              </MainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails

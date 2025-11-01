import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoClose} from 'react-icons/io5'
import {IoIosSearch} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import VideoItem from '../VideoItem'
import {
  SideContainer,
  LinkContainer,
  LinkItem,
  Icon,
  Name,
  PremiumContainer,
  NxtLogo,
  MainContainer,
  Description,
  GetBtn,
  CloseBtn,
  RightContainer,
  SearchContainer,
  Input,
  SearchBtn,
  LoaderContainer,
  VideoListContainer,
  EmptyContainer,
  EmptyImage,
  EmptyHeading,
  EmptyPara,
  RetryBtn,
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
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isPremium: true,
    userInput: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchVideo: '',
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchVideo} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchVideo}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          profileImageUrl: each.channel.profile_image_url,
          name: each.channel.name,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  closePremium = () => this.setState({isPremium: false})

  onChangeInput = event => this.setState({userInput: event.target.value})

  searchItem = () => {
    const {userInput} = this.state
    console.log(userInput)
    this.setState({searchVideo: userInput}, this.getDetails)
  }

  renderSelected = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccess(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFailure(isDarkTheme)
      default:
        return null
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  retry = () => this.setState({searchVideo: '', userInput: ''}, this.getDetails)

  renderSuccess = isDarkTheme => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return (
        <EmptyContainer>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <EmptyHeading isDark={isDarkTheme}>
            No Search results found
          </EmptyHeading>
          <EmptyPara>Try different key words or remove search filter</EmptyPara>
          <RetryBtn onClick={this.retry}>Retry</RetryBtn>
        </EmptyContainer>
      )
    }
    return (
      <VideoListContainer>
        {videosList.map(each => (
          <VideoItem key={each.id} itemDetails={each} />
        ))}
      </VideoListContainer>
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
        alt="failure view"
      />
      <FailureName isDark={isDarkTheme}>Oops! Something Went Wrong</FailureName>
      <FailureDesc isDark={isDarkTheme}>
        We are having some trouble to complete your request. Please try again.
      </FailureDesc>
      <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
    </FailureContainer>
  )

  render() {
    const {isPremium, userInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, activeId, changeTab, routesList} = value

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
                          className="link"
                          key={each.id}
                          onClick={click}
                        >
                          <LinkItem
                            isActive={activeId === each.id}
                            isDark={isDarkTheme}
                          >
                            <Icon
                              type="button"
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
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                      <Logos
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                      <Logos
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </ContactMedia>
                    <Ending isDark={isDarkTheme}>
                      Enjoy! Now to see your channels and recommendations!
                    </Ending>
                  </ContactContainer>
                </SideContainer>
                <RightContainer isDark={isDarkTheme} data-testid="home">
                  {isPremium && (
                    <PremiumContainer data-testid="banner">
                      <CloseBtn onClick={this.closePremium} data-testid="close">
                        <IoClose />
                      </CloseBtn>
                      <NxtLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <Description>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </Description>
                      <GetBtn>GET IT NOW</GetBtn>
                    </PremiumContainer>
                  )}
                  <SearchContainer>
                    <Input
                      placeholder="Search"
                      type="search"
                      value={userInput}
                      onChange={this.onChangeInput}
                      isDark={isDarkTheme}
                    />
                    <SearchBtn
                      isDark={isDarkTheme}
                      onClick={this.searchItem}
                      data-testid="searchButton"
                      type="button"
                    >
                      <IoIosSearch />
                    </SearchBtn>
                  </SearchContainer>
                  {this.renderSelected(isDarkTheme)}
                </RightContainer>
              </MainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home

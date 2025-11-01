import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import GamingItem from '../GamingItem'
import {
  SideContainer,
  LinkContainer,
  LinkItem,
  Icon,
  Name,
  ContactContainer,
  ContactHeading,
  ContactMedia,
  Ending,
  Logos,
  MainContainer,
  RightContainer,
  LoaderContainer,
  HeadingContainer,
  MainHeading,
  IconButton,
  GamingContainer,
  FailureContainer,
  FailureImg,
  FailureName,
  FailureDesc,
  RetryButton,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, videosList: []}

  componentDidMount() {
    this.getGameDetails()
  }

  getGameDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedList = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedList,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
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

  renderSuccess = isDarkTheme => {
    const {videosList} = this.state
    return (
      <>
        <HeadingContainer isDark={isDarkTheme} data-testid="banner">
          <IconButton isDark={isDarkTheme}>
            <SiYoutubegaming />
          </IconButton>
          <MainHeading isDark={isDarkTheme}>Gaming</MainHeading>
        </HeadingContainer>
        <GamingContainer>
          {videosList.map(each => (
            <GamingItem key={each.id} itemDetails={each} isDark={isDarkTheme} />
          ))}
        </GamingContainer>
      </>
    )
  }

  onClickRetry = () => this.getGameDetails()

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
                        alt="linkedin logo"
                      />
                    </ContactMedia>
                    <Ending isDark={isDarkTheme}>
                      Enjoy! Now to see your channels and recommendations!
                    </Ending>
                  </ContactContainer>
                </SideContainer>
                <RightContainer isDark={isDarkTheme} data-testid="gaming">
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

export default Gaming

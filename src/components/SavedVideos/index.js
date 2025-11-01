import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import TrendingItem from '../TrendingItem'
import {
  SideContainer,
  LinkContainer,
  LinkItem,
  Icon,
  Name,
  MainContainer,
  RightContainer,
  EmptyContainer,
  EmptyImg,
  EmptyHeading,
  EmptyDesc,
  HeadingContainer,
  IconButton,
  MainHeading,
  TrendingContainer,
  ContactContainer,
  ContactHeading,
  ContactMedia,
  Ending,
  Logos,
} from './styledComponent'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeId, changeTab, routesList, savedList} = value

      const renderEmpty = () => (
        <EmptyContainer>
          <EmptyImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <EmptyHeading isDark={isDarkTheme}>
            No Saved Videos Found
          </EmptyHeading>
          <EmptyDesc isDark={isDarkTheme}>
            You can save your videos while watching them
          </EmptyDesc>
        </EmptyContainer>
      )

      const renderSaved = () => (
        <>
          <HeadingContainer isDark={isDarkTheme} data-testid="banner">
            <IconButton isDark={isDarkTheme}>
              <HiFire />
            </IconButton>
            <MainHeading isDark={isDarkTheme}>Saved Videos</MainHeading>
          </HeadingContainer>
          <TrendingContainer>
            {savedList.map(each => (
              <TrendingItem key={each.id} itemDetails={each} />
            ))}
          </TrendingContainer>
        </>
      )

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
                <ContactHeading isDark={isDarkTheme}>CONTACT US</ContactHeading>
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
            <RightContainer isDark={isDarkTheme} data-testid="savedVideos">
              {savedList.length === 0 ? renderEmpty() : renderSaved()}
            </RightContainer>
          </MainContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos

import {Link} from 'react-router-dom'
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
  NotFoundImg,
  Heading,
  Description,
  ContactContainer,
  ContactHeading,
  ContactMedia,
  Ending,
  Logos,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, changeTab, routesList} = value

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
                      <LinkItem isDark={isDarkTheme}>
                        <Icon type="button" isDark={isDarkTheme}>
                          {each.icon}
                        </Icon>
                        <Name isDark={isDarkTheme}>{each.text}</Name>
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
            <RightContainer isDark={isDarkTheme}>
              <NotFoundImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <Heading isDark={isDarkTheme}>Page Not Found</Heading>
              <Description isDark={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </Description>
            </RightContainer>
          </MainContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

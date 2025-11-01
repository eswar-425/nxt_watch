import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookie from 'js-cookie'
import 'reactjs-popup/dist/index.css'
import {IoMoon} from 'react-icons/io5'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import ThemeContext from '../../context/ThemeContext'
import {
  Navbar,
  Image,
  ThemeButton,
  LinkContainer,
  CloseBtn,
  PopupContainer,
  LinkItem,
  Icon,
  Name,
  Container,
  LogoutContainer,
  StyledPopup,
  Msg,
  CancelBtn,
  LogoutBtn,
  DesktopContainer,
  Logout,
  DesktopPopup,
  Img,
} from './styledComponent'
import './index.css'

const Header = props => {
  const {history} = props
  const onLogout = () => {
    Cookie.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme, activeId, changeTab, routesList} =
          value

        return (
          <Navbar isDark={isDarkTheme}>
            <Link to="/">
              <Image
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <Container>
              <ThemeButton
                onClick={toggleTheme}
                type="button"
                isDark={isDarkTheme}
                data-testid="theme"
              >
                {isDarkTheme ? <FiSun /> : <IoMoon />}
              </ThemeButton>
              <Popup
                modal
                trigger={
                  <ThemeButton isDark={isDarkTheme} type="button">
                    <GiHamburgerMenu />
                  </ThemeButton>
                }
                className="popup-content"
              >
                {close => (
                  <PopupContainer isDark={isDarkTheme}>
                    <CloseBtn>
                      <ThemeButton
                        type="button"
                        onClick={() => close()}
                        isDark={isDarkTheme}
                      >
                        <IoMdClose />
                      </ThemeButton>
                    </CloseBtn>
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
                  </PopupContainer>
                )}
              </Popup>
              <StyledPopup
                modal
                trigger={
                  <ThemeButton type="button" isDark={isDarkTheme}>
                    <FiLogOut />
                  </ThemeButton>
                }
                isDark={isDarkTheme}
              >
                {close => (
                  <>
                    <Msg isDark={isDarkTheme}>
                      Are you sure you want to logout
                    </Msg>
                    <LogoutContainer>
                      <CancelBtn type="button" onClick={() => close()}>
                        Cancel
                      </CancelBtn>
                      <LogoutBtn type="button" onClick={onLogout}>
                        Confirm
                      </LogoutBtn>
                    </LogoutContainer>
                  </>
                )}
              </StyledPopup>
            </Container>
            <DesktopContainer>
              <ThemeButton
                onClick={toggleTheme}
                type="button"
                isDark={isDarkTheme}
              >
                {isDarkTheme ? <FiSun /> : <IoMoon />}
              </ThemeButton>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <DesktopPopup
                modal
                trigger={
                  <Logout type="button" isDark={isDarkTheme}>
                    Logout
                  </Logout>
                }
                isDark={isDarkTheme}
              >
                {close => (
                  <>
                    <Msg isDark={isDarkTheme}>
                      Are you sure, you want to logout
                    </Msg>
                    <LogoutContainer>
                      <CancelBtn type="button" onClick={() => close()}>
                        Cancel
                      </CancelBtn>
                      <LogoutBtn type="button" onClick={onLogout}>
                        Confirm
                      </LogoutBtn>
                    </LogoutContainer>
                  </>
                )}
              </DesktopPopup>
            </DesktopContainer>
          </Navbar>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(Header)

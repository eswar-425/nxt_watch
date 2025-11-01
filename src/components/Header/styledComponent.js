import Popup from 'reactjs-popup'
import styled from 'styled-components'

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
`
export const Image = styled.img`
  height: 30px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.isDark ? '#f9f9f9' : '')};
  font-size: 24px;
  margin-right: 30px;
  padding: 0;
`
export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0;
`
export const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
  padding: 10px;
`
export const PopupContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const LinkItem = styled.li`
  list-style-type: none;
  background-color: ${props => {
    if (props.isDark) {
      return props.isActive ? '#212121' : '#0f0f0f'
    }
    return props.isActive ? '#f1f5f9' : '#f9f9f9'
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Icon = styled.button`
  background-color: transparent;
  border: none;
  font-size: 22px;
  font-family: 'Roboto';
  padding: 0;
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }
    return props.isDark ? '#7e858e' : '#0f0f0f'
  }};
  margin-right: 14px;
`
export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  width: 120px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const StyledPopup = styled(Popup)`
  &-content {
    width: 80%;
    border-radius: 10px;
    padding: 28px;
    background-color: ${props => (props.isDark ? '#231f20' : '#f9f9f9')};
  }
`
export const Msg = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#00306e')};
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
`
export const CancelBtn = styled.button`
  background-color: transparent;
  border: 1px solid #7e858e;
  font-family: 'Roboto';
  color: #94a3b8;
  font-weight: bold;
  padding: 10px;
  border-radius: 2px;
  margin-right: 18px;
  cursor: pointer;
`

export const LogoutBtn = styled.button`
  background-color: #3b82f6;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
  padding: 10px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
`
export const DesktopContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  display: flex;
  align-items: center;
`
export const Logout = styled.button`
  border: ${props =>
    props.isDark ? '1px solid #f1f1f1' : '1px solid #3b82f6'};
  color: ${props => (props.isDark ? '#f1f1f1' : '#3b82f6')};
  font-family: 'Roboto';
  padding: 8px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  width: 90px;
`
export const DesktopPopup = styled(Popup)`
  &-content {
    width: 40%;
    border-radius: 10px;
    padding: 28px;
    background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
  }
`
export const Img = styled.img`
  height: 35px;
  margin-right: 30px; 
`

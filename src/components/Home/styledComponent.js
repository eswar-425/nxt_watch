import styled from 'styled-components'

export const SideContainer = styled.div`
    width: 349px;
    min-height: 100vh;
    background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        display: none;
    }
`
export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-top: 0;
`
export const LinkItem = styled.li`
  list-style-type: none;
  background-color: ${props => {
    if (props.isDark) {
      return props.isActive ? '#313131' : '#212121'
    }
    return props.isActive ? '#f1f5f9' : '#ffffff'
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 347px;
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
export const PremiumContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 915px;
    height: 220px;
  }
`
export const NxtLogo = styled.img`
  height: 20px;
  align-self: start;
  @media screen and (min-width: 768px) {
    height: 30px; 
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #231f20;
  font-size: 10px;
  align-self: start;
  width: 350px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const GetBtn = styled.button`
  font-family: 'Roboto';
  color: #231f20;
  padding: 8px;
  align-self: start;
  border: 1.5px solid #231f20;
  background-color: transparent;
  font-size: 10px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const CloseBtn = styled.button`
  align-self: end;
  font-size: 18px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const RightContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 916px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #606060;
  font-family: 'Roboto';
  width: 100%;
  outline: none;
  background-color: transparent;
  color: ${props => (props.isDark ? '#f1f1f1' : '')};
`
export const SearchBtn = styled.button`
  font-size: 24px;
  width: 90px;
  cursor: pointer;
  padding: 5px;
  background-color: ${props => (props.isDark ? '#383838' : '')};
  border: 1px solid #606060;
  border-left: none;
`
export const LoaderContainer = styled.div`
  margin-top: 260px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-top: 150px;
  }
`
export const VideoListContainer = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 905px;
    flex-wrap: wrap;
  }
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`
export const EmptyImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const EmptyHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDark ? '#f1f1f1' : '#181818')};
  font-size: 24px;
  text-align: center;
`
export const EmptyPara = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 18px;
  text-align: center;
`
export const RetryBtn = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  width: 90px;
  background-color: #4f46e5;
  cursor: pointer;
  border: none;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  height: 80%;
`
export const FailureImg = styled.img`
  width: 50%;
`
export const FailureName = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => (props.isDark ? '#ffffff' : '#231f20')};
`
export const FailureDesc = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  border: none;
  background-color: #4f46e5;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  padding: 15px;
  width: 100px;
  border-radius: 8px;
  font-size: 15px;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: normal;
  color: ${props => (props.isDark ? '#ebebeb' : '#181818')};
`
export const ContactMedia = styled.div`
  display: flex;
  align-items: center;
`
export const Logos = styled.img`
  height: 35px;
  margin-right: 10px;
`
export const Ending = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#ebebeb' : '#181818')};
`

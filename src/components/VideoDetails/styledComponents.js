import styled from 'styled-components'

export const SideContainer = styled.div`
    width: 349px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
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
      return props.isActive ? '#212121' : '#0f0f0f'
    }
    return props.isActive ? '#f1f5f9' : '#f9f9f9'
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
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const RightContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 916px;
  }
`
export const LoaderContainer = styled.div`
  margin-top: 260px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-top: 150px;
  }
`
export const VideoContainer = styled.div`
  padding: 20px;
  height: 100%;
`
export const Title = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  font-size: 16px;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`
export const Dot = styled.button`
  font-size: 25px;
  margin-right: 3px;
  padding: 0;
  text-align: center;
  background-color: transparent;
  border: none;
  margin-bottom: 5px;
  color: #94a3b8;
`
export const Views = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  font-size: 15px;
  margin-top: 2px;
  margin-right: 3px;
`
export const Like = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
  cursor: pointer;
`
export const LikeButton = styled.button`
  font-family: 'Roboto';
  margin-right: 5px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
  margin-bottom: 6px;
  cursor: pointer;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const Dislike = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
  cursor: pointer;
`
export const Save = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isSave ? '#2563eb' : '#64748b')};
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
  cursor: pointer;
`
export const DislikeButton = styled.button`
  font-family: 'Roboto';
  margin-right: 5px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};
  margin-bottom: 6px;
  cursor: pointer;
`
export const SaveButton = styled.button`
  font-family: 'Roboto';
  margin-right: 5px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: ${props => (props.isSave ? '#2563eb' : '#64748b')};
  margin-bottom: 6px;
  cursor: pointer;
`
export const HrLine = styled.hr`
  border: ${props =>
    props.isDark ? '1px solid #64748b' : '1px solid #cbd5e1'};
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelLogo = styled.img`
  height: 70px;
  margin-right: 15px;
`
export const ChannelDesc = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  font-size: 15px;
`
export const Subscriber = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
  font-size: 14px;
  margin-top: 2px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#ebebeb' : '#1e293b')};
  @media screen and (min-width: 768px) {
    margin-left: 89px;
  }
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
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

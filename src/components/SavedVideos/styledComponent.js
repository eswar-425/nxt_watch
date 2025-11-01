import styled from 'styled-components'

export const SideContainer = styled.div`
    width: 350px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
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
export const EmptyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const EmptyImg = styled.img`
  width: 100%;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const EmptyHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 24px;
  margin-bottom: 4px; 
`
export const EmptyDesc = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#cbd5e1' : '#475569')};
`
export const HeadingContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f4f4f4')};
  display: flex;
  padding: 25px; 
  display: flex;
  align-items: center;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: ${props => (props.isDark ? '#ebebeb' : '#181818')};
`
export const IconButton = styled.button`
  border-radius: 40px;
  border: none;
  color: #ff0000;
  font-size: 40px;
  margin-right: 20px;
  padding: 20px 60px 60px 20px;
  width: 40px;
  height: 40px;
  text-align: center;
  background-color: ${props => (props.isDark ? '#000000' : '#cbd5e1')};
`
export const TrendingContainer = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
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

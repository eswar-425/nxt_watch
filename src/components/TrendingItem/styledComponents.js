import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 850px;
  }
`
export const Thumbnail = styled.img`
  height: 200px;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-right: 10px; 
    width: 640px;
    height: 200px;
  }
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    margin-top: 0; 
  }
`
export const Profile = styled.img`
  height: 30px;
  margin-right: 10px;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: normal;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
`
export const DetailsContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 0px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Dot = styled.button`
  font-size: 25px;
  margin-right: 3px;
  padding: 0;
  text-align: center;
  background-color: transparent;
  border: none;
  margin-bottom: 5px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
`
export const Views = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 15px;
  margin-top: 2px;
  margin-right: 3px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
`
export const DotBtn = styled(Dot)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

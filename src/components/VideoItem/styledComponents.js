import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 20px;
  margin-right: 20px;
`
export const Image = styled.img`
  width: 100%;
`
export const DetailsContainer = styled.div`
  display: flex;
  padding: 10px;
`
export const ProfileImg = styled.img`
  height: 40px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f1f1' : '#181818')};
  font-weight: normal;
  margin-top: 0;
  font-size: 15px;
`
export const SubContainer = styled.div`
  margin-left: 15px;
`
export const Name = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 15px;
  margin-top: 2px;
  margin-right: 3px;
`
export const Span = styled.span`
    margin-top: 10px;
`
export const Container = styled.div`
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
  color: #475569;
`

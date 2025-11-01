import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`
export const Title = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 4px;
`
export const Count = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#616e7c')};
  font-size: 16px;
`
export const Thumbnail = styled.img`
  width: 100%;
`

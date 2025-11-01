import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  ListItem,
  Image,
  DetailsContainer,
  ProfileImg,
  Title,
  SubContainer,
  Name,
  Container,
  Dot,
} from './styledComponents'
import './index.css'

const VideoItem = props => {
  const {itemDetails} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = itemDetails
  const {profileImageUrl, name} = channel
  const formatted = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeTab} = value
        const click = () => changeTab(id)

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem onClick={click}>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <DetailsContainer>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <SubContainer>
                  <Title isDark={isDarkTheme}>{title}</Title>
                  <Name>{name}</Name>
                  <Container>
                    <Name>{viewCount} views </Name>
                    <Dot>
                      <BsDot />
                    </Dot>
                    <Name>
                      {formatted[0] === 'o'
                        ? formatted.slice(5, formatted.length)
                        : formatted.slice(6, formatted.length)}{' '}
                      ago
                    </Name>
                  </Container>
                </SubContainer>
              </DetailsContainer>
            </ListItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem

import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  ListItem,
  Thumbnail,
  Container,
  Profile,
  ChannelContainer,
  Heading,
  DetailsContainer,
  ChannelName,
  ViewsContainer,
  Dot,
  Views,
  DotBtn,
} from './styledComponents'
import './index.css'

const TrendingComponent = props => {
  const {itemDetails} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = itemDetails
  const {profileImageUrl, name} = channel
  const formatted = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeTab} = value

        return (
          <Link to={`/videos/${id}`} className="trending-link">
            <ListItem onChange={changeTab}>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <Container>
                <Profile src={profileImageUrl} alt="channel logo" />
                <ChannelContainer>
                  <Heading isDark={isDarkTheme}>{title}</Heading>
                  <DetailsContainer>
                    <ChannelName isDark={isDarkTheme}>{name}</ChannelName>
                    <ViewsContainer>
                      <DotBtn isDark={isDarkTheme}>
                        <BsDot />
                      </DotBtn>
                      <Views isDark={isDarkTheme}>{viewCount}</Views>
                      <Dot isDark={isDarkTheme}>
                        <BsDot />
                      </Dot>
                      <Views isDark={isDarkTheme}>
                        {formatted[0] === 'o'
                          ? formatted.slice(5, formatted.length)
                          : formatted.slice(6, formatted.length)}{' '}
                        ago
                      </Views>
                    </ViewsContainer>
                  </DetailsContainer>
                </ChannelContainer>
              </Container>
            </ListItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingComponent

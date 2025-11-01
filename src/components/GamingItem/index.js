import {Link} from 'react-router-dom'
import {ListItem, Thumbnail, Title, Count} from './styledComponents'
import './index.css'

const GamingItem = props => {
  const {itemDetails, isDark} = props
  const {id, title, thumbnailUrl, viewCount} = itemDetails

  return (
    <Link to={`/videos/${id}`} className="link-container">
      <ListItem>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <Title isDark={isDark}>{title}</Title>
        <Count isDark={isDark}>{viewCount} Watching Worldwide</Count>
      </ListItem>
    </Link>
  )
}

export default GamingItem

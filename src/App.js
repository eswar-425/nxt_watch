import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'
import './App.css'

const routesList = [
  {
    id: 'HOME',
    icon: <AiFillHome />,
    text: 'Home',
    link: '/',
  },
  {
    id: 'TRENDING',
    icon: <HiFire />,
    text: 'Trending',
    link: '/trending',
  },
  {
    id: 'GAMING',
    icon: <SiYoutubegaming />,
    text: 'Gaming',
    link: '/gaming',
  },
  {
    id: 'SAVED',
    icon: <MdPlaylistAdd />,
    text: 'Saved videos',
    link: '/saved-videos',
  },
]

class App extends Component {
  state = {
    isDarkTheme: false,
    activeId: 'HOME',
    isLiked: false,
    isDisliked: false,
    clickedList: [],
    videoId: '',
    savedList: [],
    saveData: {},
    savedId: '',
  }

  toggleTheme = () =>
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))

  changeTab = id => this.setState({activeId: id})

  changeState = id =>
    this.setState(
      prevState => ({
        isLiked: !prevState.isLiked,
        isDisliked: false,
        videoId: id,
      }),
      this.setList,
    )

  changeDis = id =>
    this.setState(
      prevState => ({
        isDisliked: !prevState.isDisliked,
        isLiked: false,
        videoId: id,
      }),
      this.setList,
    )

  setList = () => {
    const {videoId, isLiked, isDisliked, clickedList} = this.state
    const isHave = clickedList.find(each => each.id === videoId)
    const newData = {
      id: videoId,
      isLiked,
      isDisliked,
    }
    if (isHave === undefined) {
      this.setState(prevState => ({
        clickedList: [...prevState.clickedList, newData],
      }))
    } else {
      const updatedList = clickedList.map(each => {
        if (each.id === isHave.id) {
          return newData
        }
        return each
      })
      this.setState({clickedList: updatedList})
    }
  }

  addItem = (data, id) =>
    this.setState(
      {
        saveData: data,
        savedId: id,
      },
      this.setItem,
    )

  setItem = () => {
    const {savedId, savedList, saveData} = this.state
    const isHave = savedList.find(each => each.id === savedId)
    if (isHave === undefined) {
      const updatedData = {...saveData, isSave: true}
      this.setState(prevState => ({
        savedList: [...prevState.savedList, updatedData],
      }))
    } else {
      const filterList = savedList.filter(each => each.id !== savedId)
      this.setState({savedList: filterList})
    }
  }

  render() {
    const {isDarkTheme, activeId, clickedList, savedList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          activeId,
          changeTab: this.changeTab,
          routesList,
          changeState: this.changeState,
          clickedList,
          changeDis: this.changeDis,
          addItem: this.addItem,
          savedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

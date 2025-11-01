import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  activeId: 'HOME',
  changeTab: () => {},
  routesList: [],
  clickedList: [],
  changeState: () => {},
  changeDis: () => {},
  savedList: [],
  addItem: () => {},
})

export default ThemeContext

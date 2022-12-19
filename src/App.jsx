import { useState, useEffect } from "react"

import { ThemeProvider } from "styled-components"
import {Header} from "./components/header"
import { NavBar } from "./components/navbar"
import Publications from "./components/publications"
import Stories from "./components/stories"
import { getPhotos } from "./services/photos"


import { Flex, Screen, Typography } from "./style"
import { darkTheme, lightTheme } from "./style/theme"

function App() {
  const PHOTOS_PER_PAGE = 8


  const [theme, setTheme] = useState('dark')
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [photosPerPage, setPhotosPerPage] = useState()


  const themeToggler = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  async function fetchPhotos(){
    const data = await getPhotos()

    console.log(data)
  }

  useEffect(()=>{
    fetchPhotos()
  },[])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme}/>
        <Flex gap='2px'>
          <Header/>
          <Stories/>
          <Publications/>
        </Flex>
      </Screen>
    </ThemeProvider>
  )
}

export default App

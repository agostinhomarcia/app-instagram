import { useState, useEffect } from "react"
import { Fa500Px } from "react-icons/fa"

import { ThemeProvider } from "styled-components"
import {Header} from "./components/header"
import { NavBar } from "./components/navbar"
import Publications from "./components/publications"
import Stories from "./components/stories"
import { getPhotos } from "./services/photos"


import { Flex, Screen, Typography } from "./style"
import { darkTheme, lightTheme } from "./style/theme"

function App() {
  const PHOTOS_PER_PAGE = 20

  const [theme, setTheme] = useState('dark')
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [photosPerPage, setPhotosPerPage] = useState(PHOTOS_PER_PAGE)

  const releaseLoading = () => setIsLoading(false)


  const themeToggler = () =>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  async function fetchPhotos(){
    const data = await getPhotos(photosPerPage, releaseLoading)

    setPhotos(data)
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
          <Stories photos={photos}/>
          <Publications photos={photos}/>
        </Flex>
      </Screen>
    </ThemeProvider>
  )
}

export default App

import React, { useState } from "react"
import Layout from "../components/layout"

// components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"
import HomeAbout from "../components/homePage/homeAbout"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const IndexPage = props => {
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <Layout toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}>
      <HomeBanner onCursor={onCursor} />
      <HomeContent onCursor={onCursor} />
      <HomeFeatured
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// components
import Header from "./header"
import Cursor from "../components/customCursor"
import Navigation from "../components/navigation"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    /* height: 100%; */
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    font-size: 16px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
  }

  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

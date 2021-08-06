import React from "react"
import { Link } from "gatsby"

// styled comonents
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">IC</Link>
            <span></span>
            <Link to="/">PEAK</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header

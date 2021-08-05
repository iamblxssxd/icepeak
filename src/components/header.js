import React from "react"

// styled comonents
import { HeaderNav } from "../styles/headerStyles"

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Flex>
          <Logo>logo</Logo>
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

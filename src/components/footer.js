import React from "react"

// styled components
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

// icons
import { Instagram, Facebook, Twitter } from "../assets/svg/social-icons"

const Footer = ({ onCursor }) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>hey</p>
            <p>inqueries</p>
          </FooterContent>
          <FooterContent wider>
            <p>hey</p>
            <p>inqueries</p>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="#"
            >
              <Instagram />
            </a>
            <a
              href="#"
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Twitter />
            </a>
            <a
              href="#"
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Facebook />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer

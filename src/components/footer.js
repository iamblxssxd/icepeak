import React from "react"

// styled components
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

// icons
import { Instagram, Facebook, Twitter } from "../assets/svg/social-icons"

const Footer = () => {
  return (
    <FooterNav>
      <Container>
        <Flex>
          <FooterContent>
            <p>hey</p>
            <p>inqueries</p>
          </FooterContent>
          <FooterContent>
            <p>hey</p>
            <p>inqueries</p>
          </FooterContent>
          <FooterSocial>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Facebook />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer

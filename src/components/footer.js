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
        <Flex spaceBetweenFooter>
          <FooterContent>
            <p>nastya</p>
            <p>nick</p>
          </FooterContent>
          <FooterContent wider>
            <p>email</p>
            <p>ic3peakworld@gmail.com</p>
          </FooterContent>
          <FooterSocial>
            <a
              href="https://www.instagram.com/ic3peak"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/ic3peakso"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Twitter />
            </a>
            <a
              href="https://www.facebook.com/ic3peak"
              target="_blank"
              rel="noopener noreferrer"
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

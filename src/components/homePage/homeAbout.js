import React from "react"

// styled components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  About,
  Links,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles"

const HomeAbout = () => {
  return (
    <HomeAboutSection>
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              IC3PEAK’s music focuses largely on social commentary on modern
              life in Russia.
            </h2>
            <p>
              Their music criticizes the police state and certain values the
              country holds. Given their counterculture stance, this is how
              IC3PEAK finds themselves on the Blacklist. The ramifications of
              this designation are real. Playing their music on the radio is
              illegal in Russia.
            </p>
          </About>
          <Links>
            <h3>Links</h3>
            <Accordion />
          </Links>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = () => {
  return (
    <>
      <AccordionHeader>
        <AccordionIcon>
          <span></span>
          <span></span>
        </AccordionIcon>
        Hello Youtube
      </AccordionHeader>
      <AccordionContent>
        <span>Twitter</span>
        <span>Instagram</span>
        <span>Facebook</span>
      </AccordionContent>
    </>
  )
}

export default HomeAbout

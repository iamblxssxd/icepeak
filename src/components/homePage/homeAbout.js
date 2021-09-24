import React, { useState, useEffect } from "react"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

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

// context
import { useGlobalStateContext } from "../../context/globalContext"

// accordion Data
const accordionIds = [
  {
    id: 0,
    title: "Music",
    results: ["Youtube", "Spotify", "Apple", "Soundcloud", "Genius"],
  },
  {
    id: 1,
    title: "Press",
    results: [
      "Let It All Burn.",
      "The Guardian interview with IC3PEAK",
      "Russia: Fighting the Kremlin with music",
      "IC3PEAK – music and modern art",
      "Young Russian Musicians Struggle Under Government Scrutiny",
    ],
  },
]

const HomeAbout = ({ onCursor }) => {
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  const [expanded, setExpanded] = useState(0)
  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Container>
        // TODO create a hook for getting media queries
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
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Links>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()
  return (
    <>
      <AccordionHeader
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        whileHover={{
          color: currentTheme === "dark" ? "#ffffff" : "#000000",
        }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.5, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.5, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.5, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout

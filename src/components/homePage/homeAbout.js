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
    results: [
      {
        id: 0,
        title: "Youtube",
        url: "https://www.youtube.com/user/ic3peakso",
      },
      {
        id: 1,
        title: "Spotify",
        url:
          "https://open.spotify.com/artist/3luonLzvSOxdU8ytCaEIK8?si=fa0OBOuRR8G5ZZyXNrrgTA",
      },
      {
        id: 2,
        title: "Apple",
        url: "https://music.apple.com/us/artist/ic3peak/829814422",
      },
      {
        id: 3,
        title: "Soundcloud",
        url: "https://soundcloud.com/ic3peak",
      },
      {
        id: 4,
        title: "Genius",
        url: "https://genius.com/artists/Ic3peak",
      },
    ],
  },
  {
    id: 1,
    title: "Press",
    results: [
      {
        id: 0,
        title: "Let It All Burn.",
        url: "https://www.youtube.com/watch?v=arL4iw3td2s",
      },
      {
        id: 1,
        title: "The Guardian interview with IC3PEAK",
        url: "https://www.youtube.com/watch?v=RvJRdI_xFYU",
      },
      {
        id: 2,
        title: "Russia: Fighting the Kremlin with music",
        url: "https://www.youtube.com/watch?v=SjJs0ioeg0k",
      },
      {
        id: 3,
        title: "IC3PEAK – music and modern art",
        url: "https://www.youtube.com/watch?v=95ReakCrKX0",
      },
      {
        id: 4,
        title: "Young Russian Musicians Struggle Under Government Scrutiny",
        url:
          "https://www.npr.org/2019/01/17/685973630/young-russian-musicians-struggle-under-government-scrutiny",
      },
    ],
  },
]

const HomeAbout = ({ onCursor }) => {
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    // rootMargin: "-300px",
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
        onMouseEnter={() => onCursor("pointer")}
        onMouseLeave={onCursor}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        whileHover={{
          color: currentTheme === "dark" ? "#ffffff" : "#000000",
        }}
      >
        {details.results.map((result, index) => (
          <a key={index} href={result.url}>
            <span>{result.title}</span>
          </a>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout

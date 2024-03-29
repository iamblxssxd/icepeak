import React, { useEffect } from "react"
import { Link } from "gatsby"

// Scroll Behavior
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

import { Container } from "../../styles/globalStyles"
import { HomeContentSection, Content } from "../../styles/homeStyles"

const HomeContent = ({ onCursor }) => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    // rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeContentSection
      ref={contentRef}
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
        <Content>
          IC3PEAK is a Russian experimental electronic duo formed by
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ndless/"
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <span> Anastasia Kreslina </span>
          </a>
          and
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ic3nick/"
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <span> Nikolay Kostilev </span>
          </a>
          which largely focuses on social commentary on modern life in Russia.
          Their music criticizes the police state and certain values the country
          holds. Playing their music on the radio is illegal in Russia.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent

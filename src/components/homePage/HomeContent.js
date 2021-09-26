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
          IC3PEAK is a Russian electronic music band created by{" "}
          <Link
            to="/"
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            Anastasia Kreslina
          </Link>{" "}
          and{" "}
          <Link
            to="/"
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            Nikolay Kostilev
          </Link>
          . They achieved worldwide notoriety because of the political
          undertones in their music criticizing the Russian government, which
          lead to attempts of censorship of their music in 2019. Their effects
          in mainstream media led to outpouring support throughout the West, and
          in Russia.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent

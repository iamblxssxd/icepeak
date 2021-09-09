import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

// Scroll Behavior
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// styled components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProjects,
} from "../../styles/homeStyles"

const HomeFeatured = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeFeaturedSection
      ref={featuredRef}
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
        <Link to="/">
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <h3>Featured</h3>
              <motion.div
                className="meta"
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
              >
                <h4>Death No More</h4>
                <h4>2018</h4>
              </motion.div>
            </Flex>
            <h2 className="featured-title">
              DEATH <br /> NO MORE
              <div className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </div>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              muted
              src={require("../../assets/video/death-no-more.mp4")}
            ></video>
          </FeaturedVideo>
        </Link>
      </Container>
      <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <button>
              <span>More Videos</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeFeatured

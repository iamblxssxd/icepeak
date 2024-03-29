import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

// styled components
import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavVideos,
} from "../styles/navigationStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

// icons
import { Instagram, Facebook, Twitter } from "../assets/svg/social-icons"

import { IcepeakHeartLogo } from "../assets/svg/social-icons"

const navRoutes = [
  {
    id: 0,
    title: "death no more",
    path: "https://youtu.be/MBG3Gdt5OGs",
    video: "death-no-more.mp4",
  },
  {
    id: 1,
    title: "marching",
    path: "https://youtu.be/xqohApD6Ng8",
    video: "marching.mp4",
  },
  {
    id: 2,
    title: "boo-hoo",
    path: "https://youtu.be/Y6tDdjOmsCY",
    video: "boo-hoo.mp4",
  },
  {
    id: 3,
    title: "sad bitch",
    path: "https://youtu.be/zf99kdFw9b8",
    video: "sad-bitch.mp4",
  },
  {
    id: 4,
    title: "this world is sick",
    path: "https://youtu.be/kTTwGqeNdlE",
    video: "this-world-is-sick.mp4",
  },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "death-no-more.mp4",
    key: "0",
  })
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <IcepeakHeartLogo />
                  </CloseNav>

                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => (
                    <motion.li
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      key={route.id}
                      onHoverStart={() =>
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        })
                      }
                    >
                      <a
                        href={route.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          initial={{ x: -108 }}
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.06, -0.01, 0.9],
                            },
                          }}
                          className="link"
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>nastya</p>
                    <p>nick</p>
                  </FooterContent>
                  <FooterContent wider></FooterContent>
                  <FooterSocial>
                    <a
                      href="https://www.instagram.com/ic3peak"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Instagram />
                    </a>
                    <a
                      href="https://twitter.com/ic3peakso"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Twitter />
                    </a>
                    <a
                      href="https://www.facebook.com/ic3peak"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Facebook />
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  className="reveal"
                ></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      src={require(`../assets/video/${revealVideo.video}`)}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                      loop
                      autoPlay
                      muted
                    ></motion.video>
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

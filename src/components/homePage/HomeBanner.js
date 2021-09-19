import React from "react"

import { Banner, Video, BannerTitle, Headline } from "../../styles/homeStyles"

const HomeBanner = () => {
  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, -0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          muted
          src={require("../../assets/video/death-no-more-720.mp4")}
        />
      </Video>
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>Ice</Headline>
        <Headline variants={child}>Peak</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner

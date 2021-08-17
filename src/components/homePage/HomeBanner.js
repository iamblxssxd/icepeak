import React from "react"
import { useEffect, useRef } from "react"

import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles"

// context
import { useGlobalStateContext } from "../../context/globalContext"

// windowSize hook
import useWindowSize from "../../hooks/useWindowSize"

const HomeBanner = () => {
  let canvas = useRef(null)
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let dwaringCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
    renderingCtx.fillRect(0, 0, size.width, size.heigth)
  }, [currentTheme])

  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          src={require("../../assets/video/icepeak_homepage.mp4")}
        />
      </Video>
      <Canvas height={size.heigth} width={size.width} ref={canvas} />
      <BannerTitle>
        <Headline>Ice</Headline>
        <Headline>Peak</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner

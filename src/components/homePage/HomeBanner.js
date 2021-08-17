import React from "react"
import { useEffect, useRef } from "react"

import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles"

// windowSize hook
import useWindowSize from "../../hooks/useWindowSize"

const HomeBanner = () => {
  let canvas = useRef(null)
  const size = useWindowSize()

  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let dwaringCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = "#000000"
    renderingCtx.fillRect(0, 0, size.width, size.heigth)
  }, [])

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

import React from "react"
import { useEffect, useRef } from "react"

import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles"

const HomeBanner = () => {
  let canvas = useRef(null)

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
    renderingCtx.fillRect(0, 0, 100, 100)
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
      <Canvas ref={canvas} />
      <BannerTitle>
        <Headline>Ice</Headline>
        <Headline>Peak</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner

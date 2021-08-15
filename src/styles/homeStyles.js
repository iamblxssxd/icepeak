import styled from "styled-components"
import { motion } from "framer-motion"

// Banner
export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`

export const Video = styled.div`
  height: 100%;
  width: 100%;

  video {
    object-fit: cover;
  }
`

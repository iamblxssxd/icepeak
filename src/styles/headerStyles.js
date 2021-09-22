import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 50px;
  right: 0;
  left: 0;
  z-index: 99;

  @media screen and (max-width: 767px) {
    top: 32px;
  }
`
export const Logo = styled.div`
  span {
    background: ${props => props.theme.red};
    position: relative;
    display: block;
    width: 250px;
    height: 100px;
    padding: 0 32px;

    @media screen and (max-width: 767px) {
      max-width: 124px;
    }

    svg {
      width: 100%;
      height: 100%;

      path {
        fill: #fff;
      }
    }
  }
`

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;

    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;

      @media screen and (max-width: 767px) {
        width: 26px;
        height: 5px;
      }
    }
  }
`

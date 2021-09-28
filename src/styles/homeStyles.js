import styled from "styled-components"
import { motion } from "framer-motion"

// Banner
export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;

  @media screen and (max-width: 767px) {
    margin-bottom: 90px;
  }
`

export const Video = styled.div`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 767px) {
  }

  video {
    object-fit: cover;
  }
`

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${props => props.theme.text};
  pointer-events: none;

  @media screen and (max-width: 1023px) {
    left: -14px;
    bottom: -63px;
    line-height: 0.68;
  }

  @media screen and (max-width: 767px) {
    left: -8px;
    bottom: -36px;
  }
`
export const Headline = styled(motion.span)`
  display: block;
  font-size: 23rem;
  font-weight: 900;
  line-height: 0.76;

  @media screen and (max-width: 1023px) {
    font-size: 17.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 10rem;
  }
`

// Content section

export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;

  @media screen and (max-width: 767px) {
    margin-bottom: 107px;
  }
`

export const Content = styled.h2`
  margin: 0 auto;
  width: 58%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${props => props.theme.text};

  a {
    color: ${props => props.theme.text};
  }

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 1;
    width: 85%;
    margin-left: 16px;
    margin-right: 16px;
  }

  @media screen and (max-width: 1023px) {
    margin-left: 0px;
    width: 85%;
  }
`

export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;

  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 0;
    margin-bottom: 32px;
    a {
      margin-bottom: 0;
    }
  }
`
export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${props => props.theme.text};

  @media screen and (max-width: 767px) {
    padding: 16px;
    height: 350px;
  }

  h3 {
    font-size: 1.4rem;
  }

  .meta {
    display: flex;

    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }

  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;

    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;

      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
    @media screen and (max-width: 767px) {
      font-size: 3.75rem;
      line-height: 0.71;
      top: 166px;
      margin-left: 0;
      margin-bottom: 0;
    }
  }
`
export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    height: 200px;
  }
`
export const FeaturedProjects = styled.div`
  margin-top: 200px;

  @media screen and (max-width: 767px) {
    margin-top: 0;
  }

  button {
    background: ${props => props.theme.red};
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    border: none;

    span {
      margin-left: 108px;
      margin-right: 12px;
      display: block;
    }

    svg {
      margin: 0 auto;
      width: 64px;
      height: 64px;

      path {
        fill: #fff;
      }
    }

    @media screen and (max-width: 767px) {
      padding: 10px;

      span {
        margin-left: 60px;
      }

      svg {
        width: 45px;
        height: 45px;
      }
    }
  }
`
// about
export const HomeAboutSection = styled(motion.div)`
  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 1023px) {
  }
`

export const About = styled.div`
  width: 100%;

  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }

  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: 1.5rem;
      line-height: 1;
    }
  }

  @media screen and (max-width: 1023px) {
    h2 {
      margin-left: 0;
      width: 79%;
    }

    p {
      margin-left: 0;
    }
  }
`

export const Links = styled.div`
  color: ${props => props.theme.text};
`

// accordion
export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${props => props.theme.red};
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: ${props => props.theme.red};
    transition: 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;

  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: ${props => props.theme.red};
    display: block;
    font-weight: 300;

    transition: 0.2s ease-in-out;
    &:hover {
      color: ${props => props.theme.text};
    }
  }
`

import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterNav = styled.div`
  height: 300px;
  margin-top: 296px;

  @media screen and (max-width: 767px) {
    margin-top: 86px;
  }
`

export const FooterContent = styled.div`
  color: ${props => props.theme.red};
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 0.5rem;
  flex: 1;

  ${props =>
    props.wider &&
    css`
      flex: 2;
    `}

  @media screen and (max-width: 767px) {
    p {
      font-size: 1.125rem;
      line-height: 1;
      margin-bottom: 8px;
      margin-top: 8px;
    }

    p:last-child {
      margin-bottom: 18px;
    }
  }
`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;

  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;

    svg {
      width: 100%;
      height: 100%;

      path {
        transition: 0.2s ease-in-out;
      }
    }

    &:hover {
      svg path {
        fill: ${props => props.theme.text};
      }
    }
  }

  @media screen and (max-width: 767px) {
    a:first-child {
      padding-left: 0;
    }
  }
`

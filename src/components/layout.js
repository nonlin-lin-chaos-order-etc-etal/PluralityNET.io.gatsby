import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Navigation from "./navigation"

import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets"

const Container = styled(`div`)`
  position: relative;

  ${mq.tablet} {
  }

  ${mq.desktop} {
  }

  ${mq.xxl} {
  }
`

const Image = styled(Img)`
  bottom: 33vh;
  left: ${gutter.default};
  right: ${gutter.default};

  ${mq.tablet} {
    bottom: 0;
    left: 0;
    right: auto;
    top: 0;
    width: ${offset};
  }

  ${mq.xxl} {
    width: ${offsetXxl};
  }
`

const Main = styled(`main`)`
  {/*background: #fff;*/}
  padding-top: ${gutter.default};
  position: relative;
  z-index: ${elevation.overlay};
`

const Layout = ({ children, image, imageTitle, imageBackgroundColor }) => (
  <Container>
    {/*
    {image && (
      <Image
        fluid={image}
        style={{ position: `fixed` }}
        backgroundColor={imageBackgroundColor ? imageBackgroundColor : false}
        title={imageTitle}
      />
    )}
    <Navigation />
    */}
    <Main>
      {children}
      {/*
      <h2>Documentation & related links</h2>
      <ul>
        <li>
          See the
          {` `}
          <a href="https://www.gatsbyjs.com/plugins/gatsby-image/">
            <code>gatsby-image</code> project README
          </a>
          {` `} for documentation on using the plugin
        </li>
        <li>
          Read the docs:
          <br />
          <a href="https://www.gatsbyjs.com/docs/using-gatsby-image/">
            Using gatsby-image to prevent image bloat
          </a>
          <br />
          <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/">
            Using fragments in gatsby-plugin-sharp
          </a>
        </li>
        <li>
          View the <code>gatsby-transformer-sharp</code> example at
          {` `}
          <a href="https://image-processing.gatsbyjs.org/">
            <code>image-processing.gatsbyjs.org</code>
          </a>
        </li>
      </ul>
      */}
    </Main>
  </Container>
)

export default Layout

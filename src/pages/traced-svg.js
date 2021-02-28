import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import FloatingImage from "../components/floating-image"
import PageTitle from "../components/page-title"
import ImageGallery from "../components/image-gallery"

import Layout from "../components/layout"

const TracedSVG = ({ data, location }) => (
  <Layout
    location={location}
    image={data.coverImage.localFile.childImageSharp.fluid}
    imageTitle={`“${data.coverImage.title}” by ${data.coverImage.credit} (via namecheap.com)`}
  >
    <PageTitle>Traced SVG Placeholders</PageTitle>
    <FloatingImage
      imageMobile={data.floatingImageMobile.localFile.childImageSharp.fixed}
      imageDesktop={data.floatingImage.localFile.childImageSharp.fixed}
      title={`“${data.floatingImage.title}” by ${data.floatingImage.credit} (via namecheap.com)`}
    />
    <p>
      Generates a{` `}
      <a href="https://github.com/gatsbyjs/gatsby/issues/2435">traced SVG</a> of
      the image and returns the SVG source as an ”optimized URL-encoded” data:
      URI. This provides an alternative to the default inline base64 placeholder
      image.
    </p>
    <p>
      To make use of this technique, you can apply processing to an image with a
      GraphQL query by applying a <code>traceSVG</code> argument and the
      appropriate{` `}
      <a href="https://www.gatsbyjs.com/plugins/gatsby-image/#gatsby-transformer-sharp">
        fragment applied
      </a>
      .
    </p>
    <h2>SVG Image Gallery</h2>
    <ImageGallery images={data.galleryImagesCropped.edges} />
    <Img
      fluid={data.fullWidthImage.localFile.childImageSharp.fluid}
      title={`“${data.fullWidthImage.title}” by ${data.fullWidthImage.credit} (via namecheap.com)`}
    />
  </Layout>
)

export default TracedSVG

export const query = graphql`
  query {
    coverImage: imagesStepOneYaml(title: { eq: "icon" }) {
      credit
      title
      localFile {
        childImageSharp {
          fluid(
            maxWidth: 720
            traceSVG: { background: "#11CE3E", color: "#0F5D25" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    floatingImageMobile: imagesStepOneYaml(
      title: { eq: "icon" }
    ) {
      localFile {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
    floatingImage: imagesStepOneYaml(title: { eq: "icon" }) {
      credit
      title
      localFile {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
    fullWidthImage: imagesStepOneYaml(title: { eq: "icon" }) {
      credit
      title
      localFile {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    galleryImages: allimagesStepOneYaml(
      filter: { gallery: { eq: true } }
      limit: 10
    ) {
      edges {
        node {
          credit
          title
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 380
                quality: 70
                traceSVG: { background: "#fbfafc", color: "#dbd4e2" }
              ) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
    galleryImagesCropped: allimagesStepOneYaml(
      filter: { gallery: { eq: true } }
      skip: 10
    ) {
      edges {
        node {
          credit
          title
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 380
                maxHeight: 380
                quality: 70
                traceSVG: { background: "#fbfafc", color: "#dbd4e2" }
              ) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

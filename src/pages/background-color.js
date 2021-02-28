import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import FloatingImage from "../components/floating-image"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"

const BackgroundColor = ({ data, location }) => (
  <Layout
    location={location}
    imageBackgroundColor="#11CE3E"
  >
  {/*
    <PageTitle>Background Color</PageTitle>
    <FloatingImage
      title={`“${data.floatingImage.title}” by ${data.floatingImage.credit} (via namecheap.com)`}
      backgroundColor="#11CE3E"
    />
    <p>
      With the Background Color technique, you can specify a CSS background
      color to fill the space as your images download. For graphic images with a
      predominant color in the foreground or background, a matching color in the
      loading space can create a visually pleasing image load experience.
    </p>
    <p>
      To use the Background Color technique, provide a{` `}
      <code>backgroundColor</code> prop in your floating or fixed image
      component instance. You can use hex color values, RGB values, or any other
      valid CSS background color format.
    </p>

    <Img
      backgroundColor="#11CE3E"
      title={`“${data.fullWidthImage.title}” by ${data.fullWidthImage.credit}`}
    />
  */}
  </Layout>
)

export default BackgroundColor

export const query = graphql`
  query {
    coverImage: imagesStepOneYaml(title: { eq: "icon" }) {
      credit
      title
      localFile {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    floatingImageMobile: imagesStepOneYaml(title: { eq: "icon" }) {
      localFile {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed_noBase64
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
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
    fullWidthImage: imagesStepOneYaml(title: { eq: "icon" }) {
      credit
      title
      localFile {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`

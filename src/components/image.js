import React from "react"
import propTypes from 'prop-types'
import Img from 'gatsby-image'

// Render inline SVG with fallback non-svg images
export default function Image({ svg, fluid, file, alt }) {
  if (file.contentType === 'image/svg+xml') {
    if (svg && svg.content) {
      // Inlined SVGs
      return <div dangerouslySetInnerHTML={{ __html: svg.content }} />
    }

    // SVGs that can/should not be inlined
    return <img src={file.url} alt={alt} />
  }

  // Non SVG images
  return <Img fluid={fluid} alt={alt} />
}

Image.propTypes = {
  svgContent: propTypes.string,
  fluid: propTypes.object,
  file: propTypes.object.isRequired,
  alt: propTypes.string.isRequired,
}


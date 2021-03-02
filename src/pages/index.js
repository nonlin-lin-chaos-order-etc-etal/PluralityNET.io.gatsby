//import React, { useEffect, useState } from 'react'; 
import React from 'react'; 
import Helmet from 'react-helmet'

import favicon from '../images/favicon.ico'

import '../styles/index.css';

import { graphql } from "gatsby"
import styled from "@emotion/styled"

////import { css } from "@emotion/react"
//import { css } from "@emotion/css"
//import { FaGithub } from "react-icons/fa"

import Layout from "../components/layout"
//import { colors } from "../utils/presets"

//import Image from "../components/image"
import Img from "gatsby-image"

import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets"

//Gadsby Logo
import logo from "../images/monogram.svg"

import { rhythm } from "../utils/typography"

/*
const FeatureList = styled(`ul`)`
  margin-left: 0;
  list-style: none;
`

const FeatureListItem = styled.li({
  backgroundImage: `url(
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='${colors.gatsby}' d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z' /%3E%3C/svg%3E")`,
  backgroundPosition: `0 .25em`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `1em`,
  paddingLeft: `1.5em`,
})
*/

var description = "The PluralityNET project — a community of intercommunicating GPLv3+ artificial brains or artificial organisms integrating and talking with various world consensuses systems, plus AGI, AI, and non-AI systems in the world, including deep learning, machine learning and Big Data systems, and more.";

//Gadsby Logo
const LogoLink = styled(`a`)`
  line-height: 1;
  height: ${rhythm(0.875)};
  width: ${rhythm(0.875)};
  display: inline-block;

  && {
    background: transparent;
  }

  ${mq.tablet} {
  }
`

//Gadsby Logo
const Logo = styled(`img`)`
  padding: 0px 0px 6px 3px;
  margin: 0;
  vertical-align: middle;
`

const Back = styled.img`
  ${mq.tablet} {
    width: 100%;
  }
  ${mq.xxl} {
    width: ${offsetXxl};
  }
`

const Index = ({ data, location }) => {
  /*
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  */
  
  const imageURL = "https://PluralityNET.io" + data.file.publicURL;

  return (
   <main>
    <Layout
     location={location}
     imageBackgroundColor={"#11CE3E"}
    >
        <Helmet>
            <title>PluralityNET</title>
            <link rel="icon" href={favicon} />
            <meta property="og:url" content="https://PluralityNET.io/" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="PluralityNET" />
            <meta property="og:image" content={imageURL} />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />
            <meta property="og:description" content={description} />
        </Helmet>
        
        {/*<Image 
            svg = {data.svg}
            fluid = {data.fluid}
            file = {data.file}
            alt = {`PluralityNET logo`}
        />*/}
        
        <Back src = {data.file.publicURL} alt = {`PluralityNET logo`} />

        <p>{description}</p>

        {/*<p>
          See the
          {` `}
          <a href="https://www.gatsbyjs.com/plugins/gatsby-image/">
            component’s documentation
          </a>
          {` `}
          as well as
          {` `}
          <a href="https://github.com/gatsbyjs/gatsby/blob/master/examples/using-gatsby-image/">
            <FaGithub
              css={css`
                position: relative;
                bottom: -0.125em;
                background-image: none;
              `}
            />
            {` `}
            view this site’s source
          </a>
          {` `}
          to learn how to start using gatsby-image on your Gatsby sites.
        </p>
        */}

        <p class={`copyright`}>Copyright © 2021{/*, {date ? date : 'Loading date...'}*/} PluralityNET.io. All Rights Reserved.</p>
        <p class={`poweredby`}><span class={`text`}>Powered by</span><LogoLink href="https://www.gatsbyjs.com/"><Logo src={logo} alt="Gatsby"/></LogoLink></p>
    </Layout>
   </main>
  )
};

export default Index

export const query = graphql`{
  file(
    relativePath: {
      eq: "images/logo/raster/default.png"
    }, 
    name: {glob: "*"}, 
    sourceInstanceName: {eq: "content"}
  ) {
    publicURL
  }
}`

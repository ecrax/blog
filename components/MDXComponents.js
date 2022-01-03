/* eslint-disable react/display-name */
import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import CustomLink from "./Link"
import TOCInline from "./TOCInline"
import Pre from "./Pre"
import { BlogNewsletterForm } from "./NewsletterForm"
import NextImage from "next/image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const Image = ({ ...rest }) => (
  <Zoom overlayBgColorEnd="rgba(20, 20, 20, 0.95)">
    <NextImage {...rest} />
  </Zoom>
)

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}

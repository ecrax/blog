import NextImage from "next/image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <Zoom overlayBgColorEnd="rgba(20, 20, 20, 0.95)">
    <NextImage {...rest} />
  </Zoom>
)

export default Image

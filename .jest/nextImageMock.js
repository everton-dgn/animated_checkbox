/* eslint-disable no-import-assign, jsx-a11y/alt-text */
import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => {
    const { objectFit, priority, layout, placeholder, blurDataURL, ...rest } =
      props
    return <img {...rest} style={{ height: '100%' }} />
  }
})

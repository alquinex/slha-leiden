import { extendTheme } from '@chakra-ui/react'

import styles from './global'

const theme = extendTheme({
  styles,
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
        _hover: {
          bg: 'transparent',
        },
      },
    },
  },
  shadows: {
    outline: 'none',
  },
  colors: {
    primary: '#0080FF',
    primaryDark: '#004d99',
    secondary: '#1BB631',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
})

export default theme

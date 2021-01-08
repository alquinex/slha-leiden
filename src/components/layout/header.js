import React from 'react'
import {
  Box,
  Flex,
  Image,
  useBreakpointValue,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { Link } from 'gatsby'

import Container from '@/components/shared/container'

import logoFull from '@/images/logo-full.png'
import logo from '@/images/logo.png'

const NavLink = ({ children, ...props }) => (
  <ChakraLink as={Link} px={2} color='primary' {...props}>
    {children}
  </ChakraLink>
)

const Header = () => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  const logoSrc = useBreakpointValue([logo, logoFull])
  return (
    <Box boxShadow='md'>
      <Container fluid>
        <Flex py={4} align='center' justify='space-between'>
          <Image src={logoSrc} h='64px' />
          <Box
            display={{ sm: show ? 'block' : 'none', md: 'flex' }}
            padding='1.5rem'
            fontWeight='bold'
            onClick={handleToggle}
          >
            <NavLink>Home</NavLink>
            <NavLink>About Us </NavLink>
            <NavLink>What We Do</NavLink>
            <NavLink>Contact Us</NavLink>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

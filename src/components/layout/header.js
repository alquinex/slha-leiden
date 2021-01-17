import React from 'react'
import {
  Box,
  Flex,
  Image,
  useBreakpointValue,
  Link as ChakraLink,
  IconButton,
} from '@chakra-ui/react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'

import Container from '@/components/shared/container'

import logoFull from '@/images/logo-full.png'
import logo from '@/images/logo.png'

const NavLink = ({ children, ...props }) => (
  <ChakraLink
    _hover={{ textDecor: 'none', color: 'teal' }}
    as={Link}
    px={2}
    color='primary'
    {...props}
  >
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
        <Flex py={4} align='center' justify='space-between' flexWrap='wrap'>
          <Image src={logoSrc} h='64px' />
          <IconButton
            variant='ghost'
            _hover={{ bg: 'transparent', color: 'primaryDark' }}
            icon={<FaBars />}
            display={{ sm: 'flex', md: 'none' }}
            onClick={handleToggle}
            fontSize='1.6em'
            color='primary'
          />
          <Box
            display={{ sm: show ? 'block' : 'none', md: 'flex' }}
            padding='1.5rem'
            fontWeight='bold'
            onClick={handleToggle}
            w={['100%', null, 'auto']}
            textAlign='center'
            _hover={{ color: 'primaryDark' }}
          >
            <NavLink d='block' to='/' _hover={{ color: 'primaryDark' }}>
              Home
            </NavLink>
            <NavLink d='block' to='/about-us' _hover={{ color: 'primaryDark' }}>
              About Us{' '}
            </NavLink>
            <NavLink
              d='block'
              to='/what-we-do'
              _hover={{ color: 'primaryDark' }}
            >
              What We Do
            </NavLink>
            <NavLink
              d='block'
              to='/contact-us'
              _hover={{ color: 'primaryDark' }}
            >
              Contact Us
            </NavLink>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header

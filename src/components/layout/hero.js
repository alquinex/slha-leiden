import React from 'react'
import { Box, Image, Button, Text, Center } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Box w='100%' h='100%' position='relative'>
      <Image
        src='//images.ctfassets.net/t0wqsqezai12/4faMChGF0CaeV8NQOu5FEw/df90b00e5014d012b3501716f766bac8/slha-backgroungimage.jpg?w=800&q=50'
        h='100vh'
        w='100%'
        m='auto'
        objectFit='contain'
        objectPositio={['top', 'center']}
      />
      <Text
        textAlign='center'
        w='100%'
        fontWeight='bold'
        fontSize='2rem'
        position='absolute'
        bottom='50%'
        color='white'
      >
        Sierra Leoneans Humanitarian Leiden
      </Text>
      <Text
        textAlign='center'
        w='100%'
        fontWeight='bold'
        fontSize='1.5rem'
        position='absolute'
        bottom='42%'
        color='white'
      >
        United We Stand Divided We Fall
      </Text>
      <Center>
        <Button
          w='10rem'
          backgroundColor='primary'
          color='white'
          _hover={{ opacity: '70%' }}
          position='absolute'
          bottom='30%'
        >
          Read More
        </Button>
      </Center>
    </Box>
  )
}

export default Hero

import React from 'react'
import { Box, FormLabel, Input, Button, Heading, Textarea } from '@chakra-ui/react'
import { useForm } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm(Contact)
  return (
    <Box as='form' onSubmit={handleSubmit} method='POST'>
      <Heading as='h4' fontWeight='bold' textAlign='center'>
        {' '}
        Contact Us
      </Heading>
      <Box>
        <FormLabel htmlFor='first-name' placeholder='Your name'>
          Name
        </FormLabel>
        <Input
          id='name'
          type='text'
          name='name'
          focusBorderColor='primary'
          mb='1rem'
          placeholder='Your name here'
        />

        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          id='email'
          type='email'
          name='email'
          focusBorderColor='primary'
          mb='1rem'
          placeholder='Your email address here'
        />
        <FormLabel htmlFor='message'>Message</FormLabel>
        <Textarea placeholder='Your message here' focusBorderColor='primary' />

        <Button bg='primary' color='white' w='100%' border='none' disabled={state.submitting}>
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default Contact

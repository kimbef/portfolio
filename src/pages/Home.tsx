import { Box, Button, Heading, Text, VStack, HStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const MotionBox = motion(Box)

const Home = () => {
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box py={20}>
      <VStack spacing={8} alignItems="flex-start">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            Hi, I'm <Text as="span" color="brand.500">Your Name</Text>
          </Heading>
          <Text fontSize="xl" color={textColor} maxW="2xl" mb={8}>
            A passionate Front-end Developer specializing in React and TypeScript.
            I create responsive, user-friendly web applications with modern technologies
            and best practices.
          </Text>
        </MotionBox>

        <HStack spacing={4}>
          <Button
            as={RouterLink}
            to="/projects"
            size="lg"
            colorScheme="brand"
            _hover={{ transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            View My Work
          </Button>
          <Button
            as={RouterLink}
            to="/contact"
            size="lg"
            variant="outline"
            _hover={{ transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            Contact Me
          </Button>
        </HStack>

        <HStack spacing={4} pt={8}>
          <Button
            as="a"
            href="https://github.com/kimbef"
            target="_blank"
            leftIcon={<FaGithub />}
            variant="ghost"
          >
            GitHub
          </Button>
          <Button
            as="a"
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            leftIcon={<FaLinkedin />}
            variant="ghost"
          >
            LinkedIn
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Home 
import { Box, Container, Flex, Link as ChakraLink, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const navBg = useColorModeValue('white', 'gray.800')
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <Box minH="100vh">
      <Box position="fixed" w="full" bg={navBg} boxShadow="sm" zIndex={1}>
        <Container maxW="container.xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold" as={RouterLink} to="/">
              Portfolio
            </Text>
            <Stack direction="row" spacing={8}>
              {navItems.map((item) => (
                <ChakraLink
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  fontSize="md"
                  fontWeight="medium"
                  _hover={{ color: 'brand.500' }}
                >
                  {item.name}
                </ChakraLink>
              ))}
            </Stack>
          </Flex>
        </Container>
      </Box>
      <Box pt={20}>
        <Container maxW="container.xl">
          {children}
        </Container>
      </Box>
    </Box>
  )
}

export default Layout 
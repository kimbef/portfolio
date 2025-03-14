import { Box, Heading, SimpleGrid, Text, Image, VStack, Tag, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A description of your first project showcasing your React and TypeScript skills.',
    image: 'https://via.placeholder.com/400x250',
    tags: ['React', 'TypeScript', 'Chakra UI'],
    link: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Project 2',
    description: 'Another impressive project demonstrating your frontend expertise.',
    image: 'https://via.placeholder.com/400x250',
    tags: ['React', 'TypeScript', 'Redux'],
    link: 'https://github.com/yourusername/project2'
  },
  // Add more projects as needed
]

const ProjectCard = ({ project }: { project: Project }) => {
  const cardBg = useColorModeValue('white', 'gray.800')
  
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <LinkBox
        as="article"
        bg={cardBg}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
      >
        <Image
          src={project.image}
          alt={project.title}
          w="full"
          h="200px"
          objectFit="cover"
        />
        <VStack align="start" p={6} spacing={3}>
          <LinkOverlay href={project.link} isExternal>
            <Heading size="md">{project.title}</Heading>
          </LinkOverlay>
          <Text color={useColorModeValue('gray.600', 'gray.300')}>
            {project.description}
          </Text>
          <Box>
            {project.tags.map((tag) => (
              <Tag key={tag} mr={2} mb={2} colorScheme="brand" variant="subtle">
                {tag}
              </Tag>
            ))}
          </Box>
        </VStack>
      </LinkBox>
    </MotionBox>
  )
}

const Projects = () => {
  return (
    <Box py={12}>
      <Heading mb={8}>My Projects</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Projects 
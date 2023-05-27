import { Box, Heading, SimpleGrid, Text, transition } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

const testimonials = [
    {
        name: "Micheal Caldwell",
        content: "This is the best Mediterranean food that I've ever had!"
    },
    {
        name: "Alan Chen 1",
        content: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
    },
    {
        name: "Alan Chen 2",
        content: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
    },
    {
        name: "Alan Chen 3",
        content: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
    }
]

export default function Testimonials () {
    return (
        <Box as="section" maxW="1240px" mx="auto" px={4} pb={16}>
            <Heading as="h2" fontSize="4xl" lineHeight={1} mb={8} textAlign="center">Testimonials</Heading>
            <SimpleGrid columns={4} gap={5} minChildWidth="200px">
                {testimonials.map(item => (
                    <Box 
                        as="blockquote" 
                        key={item.name} 
                        p={5} 
                        bg="gray.100" 
                        borderRadius="md" 
                        _hover={{ bg: "brand.primary", color: "white", transition: "0.3s" }}
                    >
                        <Text fontWeight="semibold"><ChatIcon boxSize={6} mr={3} />{item.name}</Text>
                        <Text fontStyle="italic" mt={5}>"{item.content}"</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
}
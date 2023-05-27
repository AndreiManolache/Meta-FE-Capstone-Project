import { Box, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react';

export default function AboutSection () {
    return (
        <Box bg="brand.secondary">
            <Flex as="div" flexWrap="wrap" alignItems="center" maxW="1240px" mx="auto" px={4} py={16}>
                <Box width={{ base: '100%', sm: '50%' }}>
                    <Heading as="h1" fontSize="5xl" color="brand.primary" lineHeight={1}>Little Lemon</Heading>
                    <Heading as="p" fontSize="xl" color="brand.primary" lineHeight={1} letterSpacing={5}>Chicago</Heading>
                    <Text as="p" fontSize="md" color="brand.primary" py={5} maxW="lg">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                    Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                    and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                    continue to oversee the Little Lemon restaurant, nearly thirty years later.</Text>
                </Box>
                <Spacer />
                <Box width={{ base: '100%', sm: '50%' }} pl={10} position="relative">
                    <Image 
                        src='/assets/food/food3.jpeg' 
                        alt="Little Lemon restaurant cuisine 1"
                        borderRadius="xl"
                        zIndex={2}
                        position="relative"
                    />
                    <Image 
                        src='/assets/food/food2.jpeg' 
                        alt="Little Lemon restaurant cuisine 2"
                        borderRadius="xl"
                        zIndex={1}
                        position="absolute"
                        top="20%"
                        right="-30%"
                    />
                </Box>
            </Flex>            
        </Box>
    );
}
import {Box, Flex, Spacer, Heading, Text, Image} from "@chakra-ui/react";
export default function ReservationsHero () {
  return (
    <Box bg="brand.primary">
      <Flex maxW="1240px" mx="auto" px={4} py={10} alignItems="center">
      <Box width={{ base: '100%', sm: '60%' }}>
        <Heading as="h1" fontSize="5xl" color="brand.secondary" lineHeight={1}>Reserve A Table</Heading>
        <Heading as="p" fontSize="xl" color="white" lineHeight={1} letterSpacing={5}>Little Lemon Restaurant</Heading>
        <Text as="p" fontSize="md" color="white" py={5} maxW="lg">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
        Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago.</Text>
      </Box>
      <Spacer />
      <Box width={{ base: '100%', sm: '40%' }} pl={10} position="relative">
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
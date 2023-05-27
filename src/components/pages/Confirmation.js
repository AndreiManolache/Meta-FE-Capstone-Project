import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <Box bg="white">
      <Flex maxW="1240px" mx="auto" px={4} py={10} alignItems="center">
      <Box width={{ base: '100%', sm: '60%' }}>
        <Heading as="h1" fontSize="5xl" color="brand.secondary" lineHeight={1}>Reservation confirmed</Heading>
        <Heading as="p" fontSize="xl" color="brand.primary" lineHeight={1} letterSpacing={5}>Little Lemon Restaurant</Heading>
        <Text as="p" fontSize="md" color="brand.primary" py={5} maxW="lg">In few minutes you will be notified about the status of booking! Thank you! </Text>
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

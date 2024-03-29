import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";

export default function Order() {
  return (
    <Box bg="white">
      <Flex maxW="1240px" mx="auto" px={4} py={10} alignItems="center">
      <Box width={{ base: '100%', sm: '60%' }}>
        <Heading as="h1" fontSize="5xl" color="brand.secondary" lineHeight={1}>Login</Heading>
        <Text as="p" fontSize="md" color="brand.primary" py={5} maxW="lg">Use your account to access the order history. <br/> If you need assistance please contact us!</Text>
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

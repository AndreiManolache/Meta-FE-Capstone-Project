import {Link} from 'react-router-dom';
import {Box, Button, Flex, Spacer, Text} from "@chakra-ui/react";
export default function Heading() {
    return (
      <Box bg="brand.primary">
        <Flex maxW="1240px" mx="auto" px={4} alignItems="center">
          <Box py={6}>
            <Heading as="h1" fontSize="5xl" color="white" lineHeight={1}>Little Lemon</Heading>
            <Heading as="p" fontSize="lg" color="white" letterSpacing={5}>Chicago</Heading>
            <Text as="p" fontSize="md" color="white" py={5} maxW="lg">
              We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus
              on traditional recipes served with a modern twist.
            </Text>
            <Button borderRadius="md" bg="brand.secondary">
              <Link to="/reservations">Reserve a table</Link>
            </Button>
          </Box>
          <Spacer />
          <Box maxW="40%">
            <img src="/assets/food/mediterranean-food-1.jpg" alt="Little Lemon restaurant cuisine"></img>
          </Box>
        </Flex>
      </Box>
    );
}
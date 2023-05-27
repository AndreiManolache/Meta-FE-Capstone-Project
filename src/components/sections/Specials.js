import { Box, Button, Card, CardBody, CardFooter, Flex, Grid, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const specials = [
    {
        name: "Greek Salad",
        descriptions: "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.",
        price: "$12.99",
        image: "/assets/food/greek-salad.webp",
        url: "#"
    },
    {
        name: "Bruschetta",
        descriptions: "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
        price: "$16.99",
        image: "/assets/food/bruschetta.jpeg",
        url: "#"
    },
    {
        name: "Lemon Dessert",
        descriptions: "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
        price: "$8.50",
        image: "/assets/food/lemon-dessert.webp",
        url: "#"
    }
]

export default function Specials() {
    return (
        <Box as="section" maxW="1240px" mx="auto" px={4} py={16}>
            <Flex justifyContent="space-between" alignItems="center">
                <Heading as="h2" fontSize="4xl" lineHeight={1}>This weeks specials</Heading>
                <a href="/assets/menu.webp" target="_blank" rel="noreferrer">
                    <Button bg="brand.secondary" color="brand.dark" _hover={{ color: "black" }}>
                        Online Menu
                    </Button>
                </a>
            </Flex>
            <SimpleGrid columns={3} spacing={8} mt={8} minChildWidth="250px">
                {specials.map(item => (
                    <Card key={item.name} as="article" bg="gray.100">
                        <Image
                            src={item.image}
                            height="2xs"
                            objectFit="cover"
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            borderBottom="4px solid #fff"
                            borderColor="brand.secondary"
                        />
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Flex justifyContent="space-between" alignItems="center">
                                    <Heading as="h3" size='lg'>Greek Salad</Heading>
                                    <Text fontSize='lg'>$12.99</Text>
                                </Flex>
                            <Text>
                                Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <Link to="/order">
                                <Button 
                                    borderRadius="md" 
                                    bg="brand.primary" 
                                    fontSize="sm"
                                    fontWeight="normal"
                                    color="white" 
                                    _hover={{ color: "brand.secondary" }}
                                >
                                    Order a delivery 
                                    <ArrowForwardIcon boxSize={4} ml={2} />
                                </Button>                                
                            </Link>

                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>                
        </Box>
    );
}
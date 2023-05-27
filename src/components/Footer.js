import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Box bg="brand.primary">
      <Flex as="footer" flexWrap="wrap" justifyContent="space-between" maxW="1240px" mx="auto" px={4} py={32} pb={16}>
      <Box width={{ base: '100%', sm: '50%', md: '25%' }}>
          <Image
            src="/assets/footer-logo.png"
            alt="Little Lemon logo"
            maxWidth="80px"
            mt={2}
          />
        </Box>
        <Box width={{ base: '100%', sm: '50%', md: '25%' }}>
          <Heading fontSize="3xl" fontWeight="medium" mb={2}>Navigation</Heading>
          <VStack as="ul" spacing={2} alignItems="flex-start">
            <Link to="/">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                Home
              </Text>
            </Link>
            <Link to="/about">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                About
              </Text>
            </Link>
            <a
              href="/assets/menu.webp"
              target="_blank"
              rel="noreferrer"
            >
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                Menu
              </Text>
            </a>
            <Link to="/reservations">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                Reservations
              </Text>
            </Link>
            <Link to="/order">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                Order
              </Text>
            </Link>
            <Link to="/login">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                Login
              </Text>
            </Link>
          </VStack>
        </Box>
        <Box width={{ base: '100%', sm: '50%', md: '25%' }}>
          <Heading fontSize="3xl" fontWeight="medium" mb={2}>Contact</Heading>
          <VStack as="ul" spacing={3} alignItems="flex-start">
            <a href="#">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                2395 Maldove Way, <br/> Chicago Illinois
              </Text>
            </a>
            <a href="#">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                (629)-243-6827
              </Text>
            </a>
            <a href="#">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                info@littlelemon.com
              </Text>
            </a>
          </VStack>
        </Box>
        <Box width={{ base: '100%', sm: '50%', md: '25%' }}>
          <Heading fontSize="3xl" fontWeight="medium" mb={2}>Social</Heading>
          <VStack as="ul" spacing={3} alignItems="flex-start">
            <a href="#">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                Like us on Facebook
              </Text>
            </a>
            <a href="#">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                Follow us on instagram
              </Text>
            </a>
            <a href="#">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                Tweet about our food
              </Text>
            </a>
            <a href="#">
              <Text as="span" color="white" fontSize="md" _hover={{ color: "brand.secondary" }}>
                TripAdvisor reviews
              </Text>
            </a>
          </VStack>
        </Box >
      </Flex>
      {/* <footer>
      <menu>
        <li>
          <img
            src="/assets/footer-logo.png"
            alt="Little Lemon logo"
          />
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href={require("../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(629)-243-6827</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://www.facebook.com/thelittlelemonshop/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/littlelemonmoon/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/watch?v=3Li-FfypZYE"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
          </ul>
        </li>
      </menu>
    </footer> */}
    </Box>
  );
}

import { useState } from "react";
import NavigationItems from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";
import { HStack, Show, Spacer, Box, VStack, Collapse } from "@chakra-ui/react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <>
      <HStack as="header" maxW="1240px" mx="auto" px={4}>
        <img
          src="/assets/nav-logo.png"
          alt="Little Lemon logo"
          className="nav-image"
        />
        <Spacer />
        <Show as="div" className="burger" breakpoint='(max-width: 768px)'>
          <Box as="button" className="burger-icon" onClick={handleToggle} height={7} width={7}>
            <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
          </Box>
        </Show>
        <Show as="nav" breakpoint='(min-width: 768px)'>
          <HStack spacing={10}>
            <NavigationItems />
          </HStack>
        </Show>
      </HStack>
      <Collapse in={navbarOpen} animateOpacity>
        <Show as="nav" breakpoint='(max-width: 768px)'>
          <VStack as="nav">
            <NavigationItems mobileOpen={navbarOpen} />
          </VStack>
        </Show>
      </Collapse>
    </>
  );
}

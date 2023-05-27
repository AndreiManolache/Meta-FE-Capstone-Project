import { Box } from "@chakra-ui/react";
import OrderHero from "../sections/OrderHero";
import Specials from "../sections/Specials";

export default function Order() {
  return (
    <>
      <OrderHero />
      <Box my={10}>
        <Specials />
      </Box>
    </>
  );
}

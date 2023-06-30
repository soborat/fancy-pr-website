import { Box, Container } from "@mui/material";
import data from "../data/featuredOnHero";
import Image from "next/image";

function FeaturedOn() {
  return (
    <Container>
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        {data.map((item, i) => (
          <Image
            key={i}
            src={item.src}
            alt={item.alt}
            className="featured-on"
            loading="eager"
            width={100}
            height={40}
          />
        ))}
      </Box>
    </Container>
  );
}

export default FeaturedOn;

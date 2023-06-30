import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function CTA() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container mt={4} maxWidth="md">
      <Typography variant="h2" align="center">
        Ready to Boost Your Brand?
      </Typography>
      <Typography align="center" mt={2}>
        Your brand merits recognition! Start acquiring genuine exposure for your
        brand and <br />
        high-quality buyers for your site.
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="main" href="/#prices" component={Link}>
          {isMobile ? "SEE OUR PACKAGES" : "CLICK HERE TO SEE OUR PACKAGES"}
        </Button>
      </Box>
    </Container>
  );
}

export default CTA;

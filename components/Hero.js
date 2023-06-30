import { Box, Button, Container, Grid, Typography, Link } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import stars from "../public/images/Enterprwise-TrustPilot-Rating.svg";
import trustpilotLogo from "../public/images/TrustPilot-Logo.svg";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function Hero() {
  return (
    <Container sx={{ marginTop: "0px!important" }}>
      <div
        style={{
          backgroundImage: `url('/images/bg-1.svg')`,
          position: "absolute",
          left: 0,
          top: 0,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
          overflow: "hidden",
          width: "100%",
          height: "750px",
        }}
      ></div>
      <Grid container spacing={4} mt={0}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ "@media (max-width: 600px)": { paddingTop: "0!important" } }}
        >
          <Typography variant="h4" color="main">
            Get Featured On
          </Typography>
          <Typography
            variant="h1"
            color="dark"
            sx={{ "@media (max-width: 600px)": { fontSize: "36px" } }}
          >
            200+ Media Outlets
          </Typography>
          <Typography variant="h4" mb={1} color="dark">
            Go Big with Broad Exposure
          </Typography>
          <Typography variant="body1">
            Be featured on our web of more than 200 prominent news pages that
            attract <b>100 million viewers</b> each month for a significant
            increase in visibility and search positions.
          </Typography>
          <Box mt={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="main"
                  component={Link}
                  href="/#prices"
                  sx={{ width: "100%", textAlign: "center" }}
                >
                  GET STARTED
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="white"
                  component={Link}
                  href="/#news-sites"
                  sx={{ width: "100%", textAlign: "center" }}
                >
                  SEE NEWS SITES
                </Button>
              </Grid>
            </Grid>
            <Link
              href="https://www.trustpilot.com/review/enterprwise.com"
              component={NextLink}
              variant="header"
              sx={{
                whiteSpace: "nowrap",
                width: "100%",
                color: "#a7a9b8",
              }}
            >
              <Box sx={{ fontSize: 18 }}>4.5 Rating on Trustpilot</Box>
              <Box>
                <Image
                  src={stars}
                  alt="Enterprwise Trustpilot Rating"
                  loading="eager"
                  width={145}
                  height={27}
                  style={{ marginTop: 8, marginRight: 8 }}
                />
                <Image
                  src={trustpilotLogo}
                  alt="Trustpilot Logo"
                  loading="eager"
                  width={110}
                  height={31}
                  style={{ marginTop: 4 }}
                />
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {ReactPlayer && (
            <ReactPlayer
              url="https://enterprwise.wistia.com/medias/rhhri4u76k"
              controls
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;

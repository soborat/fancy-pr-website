import { Box, Container, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMagnifyingGlass,
  faCheck,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import image1 from "../public/images/Publish-On-USA-Today.jpg";
import image2 from "../public/images/Publish-On-Fox.jpg";
import image3 from "../public/images/Publish-On-Market-Watch.jpg";
import image4 from "../public/images/Promote-Website.jpg";

function SalesPoints() {
  return (
    <>
      <Container maxWidth="md">
        <Grid container justifyContent="center">
          <Grid item md={5} xs={12} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="h3" position="relative" pl={6}>
              <Box
                className="circle-image"
                component="span"
                sx={{ bgcolor: "#fae2cc", color: "#d29b6e" }}
              >
                <FontAwesomeIcon icon={faHeart} height="1em" />
              </Box>
              Get Qualified Buyers
            </Typography>
            <Typography
              variant="div"
              mt={4}
              sx={{ fontSize: "calc(var(--font-size-body1) - 20%)" }}
            >
              Drive qualified buyers to your website by publishing on
              high-traffic news sites. Each publication serves as a warm-up
              station for buyers to get familiar with your brand and proposition
              before navigating to your page.
            </Typography>
          </Grid>
          <Grid item md={2} xs={0} sx={{ order: { md: 2 } }}></Grid>
          <Grid
            item
            md={5}
            xs={9}
            sx={{
              position: "relative",
              order: { xs: 1, md: 3 },
              "@media (max-width: 600px)": { marginBottom: 5 },
            }}
          >
            <Image
              src={image1}
              alt=""
              layout="responsive"
              style={{ borderRadius: 10 }}
              loading="eager"
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Grid container justifyContent="center">
          <Grid
            item
            md={5}
            xs={9}
            sx={{
              position: "relative",
              order: { xs: 1, md: 1 },
              "@media (max-width: 600px)": { marginBottom: 5 },
            }}
          >
            <Image
              src={image4}
              alt=""
              layout="responsive"
              style={{ borderRadius: 10 }}
            />
          </Grid>
          <Grid item md={2} xs={0} sx={{ order: { md: 2 } }}></Grid>
          <Grid item md={5} xs={12} sx={{ order: { xs: 2, md: 3 } }}>
            <Typography variant="h3" position="relative" pl={6}>
              <Box
                className="circle-image"
                component="span"
                sx={{ bgcolor: "#b3e2c5", color: "#70a986" }}
              >
                <FontAwesomeIcon icon={faDollar} height="1em" />
              </Box>
              Increase Sales
            </Typography>
            <Typography
              variant="div"
              mt={4}
              sx={{ fontSize: "calc(var(--font-size-body1) - 20%)" }}
            >
              Drive more sales by adding our customizable &quot;As Seen On&quot;
              trust seal on your website. This emblem improves conversion rates
              by up to 48%, by building trust and authenticity with your
              visitors.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Grid container justifyContent="center">
          <Grid item md={5} xs={12} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="h3" position="relative" pl={6}>
              <Box
                className="circle-image"
                component="span"
                sx={{ bgcolor: "#f6ccdf", color: "#d482a7" }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} height="1em" />
              </Box>
              Rank Higher on Google
            </Typography>
            <Typography
              variant="div"
              mt={4}
              sx={{ fontSize: "calc(var(--font-size-body1) - 20%)" }}
            >
              Our news articles often land on Google&apos;s front page for your
              keywords, funneling more traffic your way. Search engines view
              links from these news sites as solid recommendations, helping in
              pushing your search position higher.
            </Typography>
          </Grid>
          <Grid item md={2} xs={0} sx={{ order: { md: 2 } }}></Grid>

          <Grid
            item
            md={5}
            xs={9}
            sx={{
              position: "relative",
              order: { xs: 1, md: 2 },
              "@media (max-width: 600px)": { marginBottom: 5 },
            }}
          >
            <Image
              src={image2}
              alt=""
              layout="responsive"
              style={{ borderRadius: 10 }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Grid container justifyContent="center">
          <Grid
            item
            md={5}
            xs={9}
            sx={{
              position: "relative",
              order: { xs: 1, md: 1 },
              "@media (max-width: 600px)": { marginBottom: 5 },
            }}
          >
            <Image
              src={image3}
              alt=""
              layout="responsive"
              style={{ borderRadius: 10 }}
            />
          </Grid>
          <Grid item md={2} xs={0} sx={{ order: { md: 2 } }}></Grid>

          <Grid item md={5} sx={{ order: { xs: 1, md: 3 } }}>
            <Typography variant="h3" position="relative" pl={6}>
              <Box
                className="circle-image"
                component="span"
                sx={{ bgcolor: "#c0daf7", color: "#87aed3" }}
              >
                <FontAwesomeIcon icon={faCheck} height="1em" />
              </Box>
              Get Verified on Social
            </Typography>
            <Typography
              variant="div"
              mt={4}
              sx={{ fontSize: "calc(var(--font-size-body1) - 20%)" }}
            >
              Our stories demonstrate that you and your brand are noteworthy
              public figures deserving verification. Numerous clients utilize
              our articles to secure verification on Twitter, Instagram,
              Facebook, and various social media platforms.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SalesPoints;

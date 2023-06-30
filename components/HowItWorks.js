import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import image1 from "../public/images/Writing.jpg";
import image2 from "../public/images/Publishing.jpg";
import image3 from "../public/images/Get-Results.jpg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function HowItWorks() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2" align="center">
          Here&apos;s the Process
        </Typography>
        <Typography variant="body1" align="center">
          We boost your brand&apos;s visibility by composing and posting a news
          story on 200+ media outlets. Our capable team can tackle any subject!
        </Typography>
      </Container>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          mb={4}
          spacing={2}
          sx={{
            "& > .MuiGrid-item": {
              padding: matches ? theme.spacing(2) : theme.spacing(1),
            },
            "& > .MuiGrid-item:last-child": {
              marginLeft: "auto",
              marginRight: "auto",
            },
            width: "100%",
            margin: 0,
          }}
        >
          {[
            {
              image: image1,
              title: "Writing",
              text: "Our seasoned team of writers design the ideal news tale to promote your brand.",
            },
            {
              image: image2,
              title: "Publishing",
              text: "Our team then broadcasts your piece across our web of 200+ news platforms.",
            },
            {
              image: image3,
              title: "Get Results",
              text: "We provide you a comprehensive report with live links, and you enjoy the boost in exposure and sales.",
            },
          ].map((item, index) => (
            <Grid item xs={12} md={6} lg={4} key={index} mb={2}>
              <Box textAlign="center">
                <Typography variant="h5" mb={1}>
                  <span className="circle">{index + 1}</span> {item.title}
                </Typography>
                {matches ? (
                  <Image
                    src={item.image}
                    alt={`Enterprwise - ${item.title}`}
                    width={295}
                    height={197}
                    style={{ borderRadius: 10 }}
                  />
                ) : (
                  <Box
                    sx={{ width: "100%", position: "relative", pt: "66.3%" }}
                  >
                    <Image
                      src={item.image}
                      alt={`Enterprwise - ${item.title}`}
                      layout="fill"
                      style={{
                        borderRadius: 10,
                      }}
                    />
                  </Box>
                )}
                <Typography variant="body1" mt={1}>
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center" alignItems="center" mt={8}>
          <Button variant="main" component={Link} href="/#prices">
            SEE OUR PACKAGES
          </Button>
        </Grid>
      </Container>
    </>
  );
}

export default HowItWorks;

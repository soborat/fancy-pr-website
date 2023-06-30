import React from "react";
import { Grid, Paper, Box, Link, Typography, Container } from "@mui/material";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaypal,
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcJcb,
  faCcDinersClub,
  faCcDiscover,
  faStripe,
  faGooglePay,
  faApplePay,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Box className="footer">
      <Container sx={{ mt: 0 }}>
        <Paper elevation={0} className="footer" style={{ padding: "1em" }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Typography variant="h6" mb={2}>
                <Link
                  href="/"
                  component={NextLink}
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      color: "black",
                      fontSize: "1.5rem",
                      fontFamily: "'Merriweather Sans', sans-serif;",
                      "@media (max-width: 600px)": {
                        fontSize: "1rem",
                      },
                    }}
                    id="enterprwise-logo-footer"
                  >
                    ENTER<span style={{ color: "red" }}>PR</span>WISE
                  </Typography>
                </Link>
              </Typography>
              <Typography variant="div">
                <Link
                  component={NextLink}
                  href="mailto:hello@enterprwise.com"
                  variant="footer"
                >
                  hello@enterprwise.com
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Actions
              </Typography>
              <Box>
                <Link component={NextLink} href="/#" variant="footer">
                  Order Now
                </Link>
              </Box>
              <Box>
                <Link
                  component={NextLink}
                  href="mailto:hello@enterprwise.com"
                  variant="footer"
                >
                  Contact Us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Information
              </Typography>
              <Box>
                <Link component={NextLink} href="/#prices" variant="footer">
                  Pricing
                </Link>
              </Box>
              <Box>
                <Link component={NextLink} href="/#news-sites" variant="footer">
                  News Sites
                </Link>
              </Box>
              <Box>
                <Link
                  component={NextLink}
                  href="https://www.trustpilot.com/review/enterprwise.com"
                  target="_blank"
                  variant="footer"
                >
                  Reviews
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Policies
              </Typography>
              <Box>
                <Link
                  component={NextLink}
                  href="/terms-of-service"
                  variant="footer"
                >
                  Terms of Service
                </Link>
              </Box>
              <Box>
                <Link
                  component={NextLink}
                  href="/privacy-policy"
                  variant="footer"
                >
                  Privacy Policy
                </Link>
              </Box>
              <Box>
                <Link
                  component={NextLink}
                  href="/refund-policy"
                  variant="footer"
                >
                  Refund Policy
                </Link>
              </Box>
              <Box>
                <Link
                  component={NextLink}
                  href="/cookie-policy"
                  variant="footer"
                >
                  Cookie Policy
                </Link>
              </Box>
              <Box>
                <Link
                  component={NextLink}
                  href="/terms-of-service/#disclaimer"
                  variant="footer"
                >
                  Disclaimer
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            mt={2}
            justifyContent="space-between"
            sx={{ flexWrap: "wrap" }}
          >
            <Grid item xs={12} md={3}>
              <Typography variant="body2">
                &copy; {new Date().getFullYear()} @.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                fontSize: 15,
                flexWrap: "wrap",
                gap: "12px",
                "& > *:not(:first-child)": {
                  marginLeft: "12px",
                },
              }}
            >
              <FontAwesomeIcon icon={faStripe} size="2x" color="#737373" />
              <FontAwesomeIcon icon={faGooglePay} size="2x" color="#737373" />
              <FontAwesomeIcon icon={faApplePay} size="2x" color="#737373" />
              <FontAwesomeIcon icon={faPaypal} size="2x" color="#737373" />
              <FontAwesomeIcon icon={faCcVisa} size="2x" color="#737373" />
              <FontAwesomeIcon
                icon={faCcMastercard}
                size="2x"
                color="#737373"
              />
              <FontAwesomeIcon icon={faCcAmex} size="2x" color="#737373" />
              <FontAwesomeIcon icon={faCcJcb} size="2x" color="#737373" />
              <FontAwesomeIcon
                icon={faCcDinersClub}
                size="2x"
                color="#737373"
              />
              <FontAwesomeIcon icon={faCcDiscover} size="2x" color="#737373" />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Footer;

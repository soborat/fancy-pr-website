import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  Divider,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import pricingPlans from "../data/pricingPlans";
import parse from "html-react-parser";
import Link from "next/link";

function PricingTable() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const justify = matches ? "flex-start" : "center";

  return (
    <Container mt={8} id="prices">
      <Typography variant="h2" textAlign="center" gutterBottom>
        Grow Your Brand Today
      </Typography>
      <Typography variant="body1" textAlign="center" gutterBottom>
        Get showcased on major news sites to drive visitors and customers to
        your website, all for a one-time payment.
      </Typography>
      <Grid container spacing={3} justifyContent={justify}>
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "10px",
                transition: "transform 0.2s",
                cursor: "pointer",
                boxShadow: "14px 14px 70px rgba(0,0,0,.07)",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box sx={{ backgroundColor: plan.color }} p={3}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography
                    variant="h5"
                    component="span"
                    textAlign="center"
                    sx={{
                      lineHeight: "42px",
                    }}
                  >
                    {plan.name}
                  </Typography>
                  <Typography variant="h5" ml={4}>
                    {plan.price}
                  </Typography>
                </Box>
                <Typography variant="body2" textAlign="center">
                  {plan.target}
                </Typography>
              </Box>
              <CardContent>
                <Box>
                  {plan.features.map((feature, index) => (
                    <Typography
                      key={index}
                      align="center"
                      variant="div"
                      component="div"
                      color="#808291"
                      className="feature"
                    >
                      {parse(feature)}
                      {index !== plan.features.length - 1 && (
                        <Divider sx={{ m: 1 }} />
                      )}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="main"
                  color="primary"
                  sx={{
                    borderRadius: 0,
                    textTransform: "none",
                    padding: "8px 24px",
                    width: "95%",
                    margin: "auto",
                    mb: 3,
                  }}
                  component={Link}
                  href={plan.formUrl}
                >
                  Order Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PricingTable;

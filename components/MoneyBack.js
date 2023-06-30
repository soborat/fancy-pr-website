import React from "react";

import { Grid, Typography, Link, Container } from "@mui/material";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import image from "../public/images/Money-Back-Guarantee.webp";

function MoneyBack() {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid
          item
          xs={9}
          md={4}
          sx={{ position: "relative", maxWidth: "480px!important" }}
        >
          <Image
            src={image}
            alt="Enterprwise - Money back guarantee"
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} md={6} gap={20}>
          <Typography variant="h2">Money Back Guarantee</Typography>
          <Typography variant="body1" paragraph>
            Your article will be published on <b>200 news sites</b>, or you will
            get your money back. On our popular news network, we also guarantee
            to publish on Digital Journal and AZ Central, an affiliate of USA
            Today.
          </Typography>
          <Link component={NextLink} href="/refund-policy" variant="main">
            <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: 8 }} />
            Read our full refund policy
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MoneyBack;

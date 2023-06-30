import React from "react";
import Hero from "../components/Hero";
import PricingTable from "../components/PricingTable";
import FeaturedOn from "../components/FeaturedOn";
import FAQ from "../components/FAQ";
import BulkDiscount from "../components/BulkDiscount";
import MoneyBack from "../components/MoneyBack";
import Readers from "../components/Readers";
import SalesPoints from "../components/SalesPoints";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Head from "next/head";

function HomePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Head>
        <title>
          Enterprwise: Get Featured on Top News Outlets FOX, USA Today,
          MarketWatch, Benzinga, DigitalJournal, and More
        </title>
        <meta
          name="description"
          content="Experience game-changing growth for your brand. Our powerful service guarantees feature placements on 200+ influential news sites and exposure to over 100 million readers, driving explosive growth and maximum impact for your brand."
        ></meta>
      </Head>
      <Hero />
      <FeaturedOn
        id="featuredOn"
        sx={{ display: matches ? "block" : "none" }}
      />
      <SalesPoints />
      <HowItWorks />
      <Readers />
      <PricingTable />
      <BulkDiscount />
      <MoneyBack />
      <FAQ />
      <CTA />
    </>
  );
}

export default HomePage;

/** @format */

import Navigation from "@/components/Navigation";
import Head from "next/head";
import variable from "../styles/variables.module.scss";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Card from "@/components/Card";
import OurClinic from "@/components/OurClinic";
import Appointment from "@/components/Appointment";
import ProductOffers from "@/components/ProductOffers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eye Care Le Optic</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={variable.main}>
        <Navigation />
        <Hero />
        <Welcome />
        <Services />
        <Card />
        <ProductOffers />
        <OurClinic />
        <Appointment />
        <Footer />
      </main>
    </>
  );
}

import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simposio de Sistemas</title>
        <meta name="description" content="Página para el simposio de sistemas del ITESCHAM" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Hero/>
      <Layout />
    </>
  );
}

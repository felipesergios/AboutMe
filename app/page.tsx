import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductFeatures from "@/components/ProductFeatures";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <ProductFeatures />
      <Certifications/>
      <About username={"felipesergios"}/>
      <Footer />
    </>
  );
}

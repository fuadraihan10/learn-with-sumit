import CompaniesLogos from "./Companies_logos/Companies_logos";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/hero";
import Pricing from "./Pricing/Pricing";
import Service1 from "./Service1/Service1";
import Service2 from "./Service2/service2";
import Testimonial from "./Testimonial/Testimonial";
import Trial from "./Trial/Trial";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Hero />
      <CompaniesLogos />
      <Service1 />
      <Service2 />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;

import CompaniesLogos from "./Companies_logos/Companies_logos";
import Header from "./Header/Header";
import Hero from "./Hero/hero";
import Service1 from "./Service1/Service1";

function App() {
  return ( 
  <div className="bg-gray-100 min-h-screen flex flex-col">
    <Header />
    <Hero />
    <CompaniesLogos />
    <Service1 />
  </div> );
}

export default App;
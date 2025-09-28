import CompaniesLogos from "./Companies_logos/Companies_logos";
import Header from "./Header/Header";
import Hero from "./Hero/hero";

function App() {
  return ( 
  <div className="bg-gray-100 min-h-screen flex flex-col">
    <Header />
    <Hero />
    <CompaniesLogos />
  </div> );
}

export default App;
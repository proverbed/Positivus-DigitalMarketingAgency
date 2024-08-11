import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanySection from "./components/CompanySection";
import Heading from "./components/Heading";
import CardSection from "./components/CardSection";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-2xl mx-auto ">
        <Hero />
        <CompanySection />
        <Heading
          title="Services"
          line1="At our digital marketing agency, we offer a range of services to "
          line2="help businesses grow and succeed online. These services include:"
        />
        <CardSection />
      </div>
    </div>
  );
};

export default App;

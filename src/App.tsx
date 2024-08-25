import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanySection from "./components/CompanySection";
import Heading from "./components/Heading";
import CardSection from "./components/CardSection";
import ProposalCard from "./components/ProposalCard";
import TeamCardSection from "./components/TeamCardSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import AccordionSection from "./components/AccordionSection";
import ContactUsSection from "./components/ContactUsSection";

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
        <ProposalCard />
        <Heading
          title="Case Studies"
          line1="Explore Real-Life Examples of Our Proven Digital Marketing"
          line2="Success through Our Case Studies"
        />
        <CaseStudiesSection />
        <Heading
          title="Our Working Process"
          line1="Step-by-Step Guide to Achieving"
          line2="Your Business Goals"
        />
        <AccordionSection />
        <Heading
          title="Team"
          line1="Meet the skilled and experienced team behind our"
          line2="successful digital marketing strategies"
        />
        <TeamCardSection />
        <Heading
          title="Testimonials"
          line1="Hear from Our Satisfied Clients: Read Our Testimonials"
          line2="to Learn More about Our Digital Marketing Services"
        />
        <Heading
          title="Contact Us"
          line1="Connect with Us: Let's Discuss Your"
          line2="Digital Marketing Needs"
        />
        <ContactUsSection />
      </div>
    </div>
  );
};

export default App;

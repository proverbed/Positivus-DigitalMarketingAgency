import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import CompanySection from "./components/CompanySection.tsx";
import Heading from "./components/Heading.tsx";
import CardSection from "./components/CardSection.tsx";
import ProposalCard from "./components/ProposalCard.tsx";
import TeamCardSection from "./components/TeamCardSection.tsx";
import CaseStudiesSection from "./components/CaseStudiesSection.tsx";
import AccordionSection from "./components/AccordionSection.tsx";
import ContactUsSection from "./components/ContactUsSection.tsx";
import Footer from "./components/Footer.tsx";
import TestimonialSection from "./components/TestimonialSection.tsx";

function App() {
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
        <TestimonialSection />
        <Heading
          title="Contact Us"
          line1="Connect with Us: Let's Discuss Your"
          line2="Digital Marketing Needs"
        />
        <ContactUsSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;

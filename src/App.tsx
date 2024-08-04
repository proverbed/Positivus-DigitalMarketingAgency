import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-2xl mx-auto ">
        <Hero />
      </div>
    </div>
  );
};

export default App;

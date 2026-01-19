import Hero from "./components/hero/hero";
import DestinationList from "./components/destinations/destinationlist";
import ContactForm from "./components/contact/contactform";
import { useRef } from "react";
import TestimonialCarousel from "./components/testimonials/testimonialcarousel";


export default function App() {
  
  const destinationRef = useRef(null);

   const scrollToDestinations = () => {
    destinationRef.current?.scrollIntoView({ behavior: "smooth" });
  };


return (
      <>
      <Hero onGetStarted={scrollToDestinations}  />
      <DestinationList  ref={destinationRef} />
      <TestimonialCarousel />
      <ContactForm />
      </>
    );
}
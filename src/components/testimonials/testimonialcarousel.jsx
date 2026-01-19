import { useState } from "react";
import testimonials from "./testimonials";
import "./testimonial.css";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return <p>No testimonials available</p>;
  }

  const current = testimonials[index];

  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-section">
      <h2>What Our Travelers Say</h2>

      <div className="testimonial-card">
        <img src={current.image} alt={current.name} />
        <p className="review">“{current.review}”</p>
        <h3>{current.name}</h3>
        <span>{current.role}</span>

        <div className="controls">
          <button onClick={prevSlide}>‹</button>
          <button onClick={nextSlide}>›</button>
        </div>
      </div>
    </div>
  );
}

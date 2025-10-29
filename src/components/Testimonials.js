import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';

const placeholderReviews = [
  {
    id: 1,
    quote: "The best Jiu Jitsu school in Katy! The instructors are world-class and the community is incredibly supportive. My kids have learned so much more than just self-defense.",
    author: "— Maria S., Parent",
  },
  {
    id: 2,
    quote: "I was a complete beginner and felt welcomed from day one. The Fundamentals program is perfect for building a solid foundation. Highly recommend Reign BJJ.",
    author: "— John D., Student",
  },
  {
    id: 3,
    quote: "Top-tier training for competitors. The attention to detail and the level of the competition team is unmatched in the Houston area. This is where you come to get better.",
    author: "— Alex P., Competitor",
  },
  {
    id: 4,
    quote: "A fantastic place for the whole family. We all train here and it's been an amazing bonding experience. Clean facility and great people.",
    author: "— The Williams Family",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section id="testimonials-section" className="testimonials-section">
      <h2 className="section-title">What Our Members Say</h2>
      <div className="testimonials-container">
        <Slider {...settings}>
          {placeholderReviews.map(review => (
            <div key={review.id}>
              <div className="testimonial-card">
                <p className="testimonial-quote">“{review.quote}”</p>
                <p className="testimonial-author">{review.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
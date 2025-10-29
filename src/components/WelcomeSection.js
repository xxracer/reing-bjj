import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section id="welcome-section" className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-text-content">
          <p className="welcome-seo-text">
            Reign Jiu-Jitsu is home to multiple youth champions and one of the nation’s most respected teams. Whether you’re a beginner, competitor, or parent looking for a family-friendly program, our world-class facility combines elite training, a full gym, and a positive culture built to help you grow.
          </p>
          <p className="welcome-seo-text">
            From kids to adults, beginners to competitors, our students develop strength, discipline, and confidence through Brazilian Jiu-Jitsu. We’re home to multiple youth champions and one of the nation’s most respected competition teams, offering:
          </p>
          <ul className="welcome-list">
            <li>✅ Competition Training for serious athletes</li>
            <li>✅ Homeschool Jiu-Jitsu Program for growing minds and bodies</li>
            <li>✅ Fundamentals for Beginners to build a solid foundation</li>
            <li>✅ Adult Gi & No-Gi Classes in a motivating, inclusive environment</li>
          </ul>
          <p className="welcome-seo-text">
            Scroll down to explore why Reign Jiu-Jitsu is recognized among the best in the World.
          </p>
          <button className="welcome-info-button">Get more info</button>
        </div>
        <div className="welcome-image-wrapper">
          <img src="https://static.wixstatic.com/media/c5947c_bf5a3cd828194df2944c8bb4eaf4cae0~mv2.jpg" alt="Group of mixed-age students on the mats" />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
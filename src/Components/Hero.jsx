import '../Hero.css'

const Hero = () => {
  return (
    <header className="hero" id="home">
      <img 
        src="https://res.cloudinary.com/dcbo6elv9/image/upload/v1774679015/assets/imgs/hero_pn74zp.avif" 
        className="hero-img" 
        alt="Modern Luxury Interior Architecture" 
      />
      <div className="hero-content">
        <h1>Designing Spaces <br /> <span>that Inspire Legacy.</span></h1>

        <p>
          Where technical precision meets royal aesthetics. We craft bespoke 
          architectural solutions for the visionary.
        </p>

        <div className="hero-buttons">
          <a href="#portfolio" className="cta-button-home cta-solid">View Portfolio</a>
          <a href="#contact" className="cta-button-home cta-outline">Get a Quote</a>
        </div>
      </div>
      <a href="https://wa.me/919700856370?text=Hello%20Prunith%20Architects%2C%20I%20just%20viewed%20your%20portfolio%20and%20I'm%20interested%20in%20a%20project.%20I'm%20looking%20for%20an%20architect%20for%20my%20space.%20Could%20we%20discuss%20the%20next%20steps%3F" 
        class="whatsapp-button" 
        target="_blank" 
        rel="noopener noreferrer">
        
        <div class="whatsapp-pulse"></div>
        <div class="whatsapp-pulse-2"></div>
        
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.2 27 122.4 0 222-99.6 222-222 0-59.3-23.1-115.1-65-157.1zM223.9 446.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.5 0 101.7-82.8 184.5-184.5 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.6 9.2 31.7 11.7 13.3 4.2 25.5 3.6 35.2 2.2 10.8-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
        </svg>
      </a>
    </header>
  );
};

export default Hero;
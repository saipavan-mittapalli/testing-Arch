import React, { useState } from 'react';
import '../Portfolio.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('3D Models');

  const categories = ['3D Models', 'Commercial Space', 'Residential', '2D Sketches'];

  const portfolioData = {
    '3D Models': [
      { id: '3d-1', title: 'Basic Bedroom render', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679049/assets/3D%20models/video1_v2otb6.mp4' },
      { id: '3d-2', title: 'Hall with TV unit', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679035/assets/3D%20models/video2_hh4ext.mp4' },
    ],
    'Commercial Space': [
      { id: 'comm-1', title: 'Adicto Cafe, Warangal', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679019/assets/Commercial%20Space/video3_afnvxs.mp4' },
      { id: 'comm-2', title: 'Tirumala Home Foods, Khammam', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679027/assets/Commercial%20Space/video4_fvs3yo.mp4' },
    ],
    'Residential': [
      { id: 'res-1', title: 'Modern Residence', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774682991/assets/Residential/Residence_aqmdrn.mp4' },
      { id: 'res-2', title: 'Luxury House', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774682963/assets/Residential/Design_vrdd8i.mp4' },
      { id: 'res-3', title: 'Kitchen', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774683746/assets/Residential/kitchen_zgmevy.mp4' },
      { id: 'res-4', title: 'Modern Residence', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679017/assets/Residential/video5_jitoro.mp4' },
      { id: 'res-5', title: 'Living Room', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679059/assets/Residential/video6_a8ngbs.mp4' },
      { id: 'res-6', title: 'Modern Bedroom', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679032/assets/Residential/video7_atk3ps.mp4' },
      { id: 'res-7', title: 'Bedroom', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679019/assets/Residential/video8_b5jgru.mp4' },
      { id: 'res-8', title: 'Modern Residence', video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679055/assets/Residential/video9_d1uu69.mp4' },
    ],
    '2D Sketches': [
      { id: 'sk-1', title: 'Muti-purpose Hall', 
        video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679016/assets/2D%20sketches/Multi-purpose_Hall_ejf7e6.mp4' },
      { id: 'sk-2', title: 'Hotel Blueprint', 
        video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679016/assets/2D%20sketches/Hotel1_ys86kb.mp4' },
      { id: 'sk-3', title: 'Resort 2D Plan', 
        video: 'https://res.cloudinary.com/dcbo6elv9/video/upload/v1774679017/assets/2D%20sketches/Resort1_xv0pzh.mp4' },
    ]
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-header">
        <span className="label">Our Portfolio</span>
        <h2 className="section-title">Visual <span>Legacies</span></h2>
      </div>

      <div className="portfolio-tabs">
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-display" key={activeTab}>
        <div className="video-grid">
          {portfolioData[activeTab].map((item) => (
            <div key={item.id} className="video-card reveal-active">
              <div className="video-wrapper">
                <video 
                  src={item.video} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                />
                <div className="video-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
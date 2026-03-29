import '../Services.css';

const Services = () => {
  const services = [
    { 
    id: '01', title: 'Site Consultation', 
    desc: 'Expert on-site checking to ensure your building is being constructed exactly as planned.',
    icon: <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />,
    img: './assets/imgs/1-consult.png'
  },
  { 
    id: '02', title: 'Space Planning', 
    desc: 'Beautiful and smart interior designs that make the best use of every corner of your home.',
    icon: <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h3v3H7V7zm7 0h3v3h-3V7z" /> ,
    img: './src/assets/imgs/2-space planning.png'
  },
  { 
    id: '03', title: '2D Technical Sketching', 
    desc: 'Detailed floor plans and blueprints to help you start your construction with confidence. Master maps showing every wall and window.',
    icon: <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16H5V5h11v5h5v9h-9z" />,
    img: './src/assets/imgs/3-.png'
  },
  { 
    id: '04', title: '3D Interior Modeling', 
    desc: 'High-end photorealistic renders that bring your vision to life before construction. See your dream home before it is built.',
    icon: <path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.65c-.31.18-.69.18-1 0l-7.97-4.65c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.65c.31-.18.69-.18 1 0l7.97 4.65c.32.17.53.5.53.88v9z" /> ,
    img: './src/assets/imgs/4-3DModeling.png'
  },
  { 
    id: '05', title: 'Interior Space Design', 
    desc: 'Beautiful and practical room flow. We focus on smart furniture placement to make your living space feel spacious and high-end.',
    icon: <path d="M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h3v3h-3v-3zM2 10h3v3H2v-3zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z" /> ,
    img: './src/assets/imgs/5-interior.png'
  },
  { 
    id: '06', title: 'Construction Supervision', 
    desc: 'Regular site visits to monitor progress and ensure contractors follow approved plans and maintain high quality.',
    icon: <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /> ,
    img: './src/assets/imgs/6-supervision.png'
  }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Expertise</span>
          <h2>Our <span>Services</span></h2>
          <div className="gold-line"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-number">{service.id}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              
              <div className="service-visual">
                <img src={service.img} alt={service.title}/>
              </div>
              
              <div className="card-border-bottom"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

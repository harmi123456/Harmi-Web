import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Projects() {

  const [isNavVisible, setNavVisible] = useState(false);


  const toggleNavbar = () => {
    setNavVisible(!isNavVisible);
  };


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSection_2, setSelectedSection_2] = useState(null);

  //first

  const sections = {
    "Ground Floor - Dining Table": {
      description: "This is the Dining Table area on the ground floor.",
      image: "/img/Scene 4_1.jpg",
    },
    "Ground Floor - Living Room": {
      description: "This is the Living Room area on the ground floor.",
      image: "/img/14-1-1.jpg",
    },
    "Living Room - Television": {
      description: "This is the Television area in the living room.",
      image: "/img/87.jpg",
    },


    "First Floor - Bedroom": {
      description: "This is the bedroom on the first floor.",
      image: "/residential/Scene 21.jpg",
    },
    "First Floor - Washroom": {
      description: "This is the washroom on the first floor.",
      image: "/residential/Scene 15(1).jpg",
    },
    "First Floor - Theater": {
      description: "This is the theater area on the first floor.",
      image: "/img/theater_1.jpg",
    },
    "First Floor - Chill Time": {
      description: "This is the extra space with chairs for seating.",
      image: "/img/15.jpg",
    },


    "Second Floor - Terrace": {
      description: "This is the terrace area on the second floor.",
      image: "/residential/b3.jpg",
    },
    "Master Bedroom": {
      "description": "This is the master bedroom with a cozy design and elegant furniture.",
      "image": "/img/18-1.jpg"
    },
    "Dressing Area": {
      "description": "This is the dressing area with ample space and modern amenities.",
      "image": "/img/27-1.jpg"
    }

  };


  const handleHotspotClick = (sectionName) => {
    console.log(`Hotspot clicked: ${sectionName}`);
    setSelectedSection(sectionName);
  };

  const closePopup = () => {
    setSelectedSection(null);
    document.body.classList.remove("no-scroll");
  };



  useEffect(() => {
    if (selectedSection) {
      document.body.classList.add("no-scroll");

      // Add scroll lock and alert detection
      const handleScroll = (e) => {
        e.preventDefault();
        alert("Please close the popup before scrolling!");
      };

      window.addEventListener("scroll", handleScroll, { passive: false });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [selectedSection]);

  //second

  const sections_2 = {
    "Terrace": {
      description: "This is the terrace area with a relaxing vibe and a great view.",
      image: "/img/terrace.jpg",
    },
    "Kitchen": {
      description: "This is the kitchen with modern amenities and a spacious layout.",
      image: "/residential/Scene 8(1).jpg",
    },
    "Dining Table": {
      description: "This is the dining table area, perfect for family meals and gatherings.",
      image: "/residential/Scene 4_1.jpg",
    },
    "Leaving Room": {
      description: "This is the hall, designed for leisure and entertainment.",
      image: "/residential/Scene 2.jpg",
    },
    "Bed Room": {
      description: "This is the bedroom, offering a cozy and tranquil ambiance.",
      image: "/residential/Scene 22.jpg",
    },
    "Dressing Room": {
      description: "This is the dressing room, equipped with stylish storage and mirrors.",
      image: "/residential/Scene 30(1).jpg",
    },
    "Bathroom": {
      description: "This is the bathroom, featuring a sleek and functional design.",
      image: "/img/46.jpg",
    },
    "Exterior": {
      description: "This is the exterior area, showcasing the architectural beauty of the home.",
      image: "/img/Scene 9_3.jpg",
    },
    "Master Bedroom": {
      description: "This is the master bedroom with a cozy design and elegant furniture.",
      image: "/img/18-1.jpg",
    },
    "Swimming Pool": {
      description: "This is the swimming pool area, perfect for relaxation and recreation.",
      image: "/img/Scene 8.jpg",
    }
  };



  const handleHotspotClick_2 = (sectionName) => {
    console.log(`Hotspot clicked: ${sectionName}`);
    setSelectedSection_2(sectionName);
  };

  const closePopup_2 = () => {
    setSelectedSection_2(null);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    if (selectedSection_2) {
      document.body.classList.add("no-scroll");

      // Add scroll lock and alert detection
      const handleScroll = (e) => {
        e.preventDefault();
        alert("Please close the popup before scrolling!");
      };

      window.addEventListener("scroll", handleScroll, { passive: false });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [selectedSection_2]);

  

  //project explore

  const designCategories = [
    { type: 'Exterior_Design', image: '/img/Scene 2.jpg' },
    { type: 'Corporate', image: '/img/6-1.jpg' },
    { type: 'Residential', image: '/img/6-1-1.jpg' },
  ];


  const [showDiv, setShowDiv] = useState(false);
  const [currentData, setCurrentData] = useState([]);


  const handleExploreClick = (type) => {
    let selectedData = [];
    switch (type) {
      case 'Exterior_Design':
        selectedData = Exterior_Design;
        break;
      case 'Corporate':
        selectedData = Corporate;
        break;
      case 'Residential':
        selectedData = Residential;
        break;
      default:
        setCurrentData([]);
    }

    setTimeout(() => {
      setCurrentData(selectedData);
      setShowDiv(selectedData.length > 0);
    }, 0);
  };

  const handleCloseClick = () => {
    setShowDiv(false);
  };




  const Exterior_Design = [
    {
      id: 1,
      image: '/img/Scene 1_2.jpg',
    },
    {
      id: 2,
      image: '/img/Scene 2_2.jpg',
    },
    {
      id: 3,
      image: '/img/Scene 3_3(1).jpg',
    },
    {
      id: 4,
      image: '/img/Scene 4_3(1).jpg',
    },
    {
      id: 5,
      image: '/img/Scene 5_2.jpg',
    },
    {
      id: 6,
      image: '/img/Scene 6_3.jpg',
    },
    {
      id: 7,
      image: '/img/ex_2.jpg',
    },
    {
      id: 8,
      image: '/img/Scene 8_3.jpg',
    },
    {
      id: 9,
      image: '/img/Scene 9_3.jpg',
    },
    {
      id: 10,
      image: '/img/Scene 10_4.jpg',
    },
    {
      id: 11,
      image: '/img/Scene 11_1.jpg',
    },
    {
      id: 12,
      image: '/img/Scene 12_1.jpg',
    },
    {
      id: 13,
      image: '/img/Scene 1_2.jpg',
    },
    {
      id: 14,
      image: '/img/Scene 7_3.jpg',
    },
    {
      id: 15,
      image: '/img/Scene 12_1.jpg',
    },
    {
      id: 16,
      image: '/img/Scene 1_1.jpg',
    },
    {
      id: 17,
      image: '/img/Scene 7.jpg',
    },
    {
      id: 18,
      image: '/img/Scene 2.jpg',
    },
    {
      id: 19,
      image: '/img/Scene 8.jpg',
    },
    {
      id: 20,
      image: '/img/Scene 3.jpg',
    },
    {
      id: 21,
      image: '/img/Scene 9.jpg',
    },
    {
      id: 22,
      image: '/img/Scene 10.jpg',
    },
    {
      id: 23,
      image: '/img/Scene 4.jpg',
    },
    {
      id: 24,
      image: '/img/Scene 2_2.jpg',
    },
    {
      id: 25,
      image: '/img/Scene 4_3(1).jpg',
    },

  ];


  const Residential = [
    {
      id: 1,
      image: '/residential/2.jpg',
    },
    {
      id: 2,
      image: '/img/1-1.jpg',
    },
    {
      id: 3,
      image: '/img/2.1.jpg',
    },
    {
      id: 4,
      image: '/img/2.jpg',
    },
    {
      id: 5,
      image: '/residential/3.jpg',
    },
    {
      id: 6,
      image: '/residential/Scene 8(1).jpg',
    },
    {
      id: 7,
      image: '/img/3.jpg',
    },
    {
      id: 8,
      image: '/img/3-1.jpg',
    },
    {
      id: 9,
      image: '/img/4.jpg',
    },
    {
      id: 10,
      image: '/img/4-1.jpg',
    },
    {
      id: 11,
      image: '/residential/Image_3.jpg',
    },
    {
      id: 12,
      image: '/residential/Scene 2.jpg',
    },
    {
      id: 13,
      image: '/residential/Scene 3_2.jpg',
    },
    {
      id: 14,
      image: '/residential/Scene 7(1).jpg',
    },
    {
      id: 15,
      image: '/img/7-1.jpg',
    },
    {
      id: 16,
      image: '/img/8-1.jpg',
    },
    {
      id: 17,
      image: '/residential/Scene 25(1).jpg',
    },
    {
      id: 18,
      image: '/img/8.jpg',
    },
    {
      id: 19,
      image: '/img/9-1.jpg',
    },
    {
      id: 20,
      image: '/img/13.jpg',
    },
    {
      id: 21,
      image: '/img/14-1.jpg',
    },
    {
      id: 22,
      image: '/img/14-1-1.jpg',
    },
    {
      id: 23,
      image: '/img/15-1-1.jpg',
    },
    {
      id: 24,
      image: '/img/22.jpg',
    },
    {
      id: 25,
      image: '/residential/GUEST2.jpg',
    },
    {
      id: 24,
      image: '/residential/4.jpg',
    },
    {
      id: 25,
      image: '/residential/Scene 4_1.jpg',
    },
  ];


  const Corporate = [
    {
      id: 1,
      image: '/residential/10.jpg',
    },
    {
      id: 2,
      image: '/residential/11.jpg',
    },
    {
      id: 3,
      image: '/corporate/1.jpg',
    },
    {
      id: 4,
      image: '/corporate/2.jpg',
    },
    {
      id: 5,
      image: '/corporate/3.jpg',
    },
    {
      id: 6,
      image: '/corporate/4.2.2.jpg',
    },
    {
      id: 7,
      image: '/corporate/5.jpg',
    },
    {
      id: 8,
      image: '/corporate/13.jpg',
    },
    {
      id: 9,
      image: '/corporate/15.jpg',
    },
    {
      id: 10,
      image: '/corporate/c1.jpg',
    },
    {
      id: 11,
      image: '/corporate/r-1.jpg',
    },
    {
      id: 12,
      image: '/corporate/r-2.jpg',
    },
    {
      id: 13,
      image: '/corporate/r-4.jpg',
    },
    {
      id: 14,
      image: '/corporate/r-8.jpg',
    },
    {
      id: 15,
      image: '/corporate/r-11.jpg',
    },
    {
      id: 16,
      image: '/corporate/r-12.jpg',
    },
    {
      id: 17,
      image: '/corporate/1-1.jpg',
    },
    {
      id: 18,
      image: '/corporate/2-1.jpg',
    },
    {
      id: 19,
      image: '/corporate/3-1.jpg',
    },
    {
      id: 20,
      image: '/corporate/4-1.jpg',
    },
    {
      id: 21,
      image: '/corporate/5-1.jpg',
    },
    {
      id: 22,
      image: '/corporate/6-1.jpg',
    },


  ];



  //WhatsApp icons
  const phoneNumber = "919328623606";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };


  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };


  return (
    <div id='sec1'>

      <header>

        <div className="bars" onClick={toggleNavbar}>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>

        <div className="logo">
          <img src="/img/logo.png" alt="" />
        </div>

        <nav className={isNavVisible ? 'show' : ''}>
          <Link to='/'>Home</Link>
          <Link to='/projects' style={{ color: 'green', fontWeight: 'bold' }}>Projects</Link>
          <Link to='/services'>Services</Link>
          <Link to='/aboutUs'>About Us</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contactUs'>Contact Us</Link>
        </nav>

        <div className="icon">
          <a href="https://www.instagram.com/rangrag_studio?igsh=MWljc3U0YnZvenlteQ==" target='_blank'>
            <div className='insta'><i class="fa-brands fa-instagram"></i></div>
          </a>
          <a href="https://www.facebook.com/people/RangRag-Interior-Design-Studio/61561135798667/" target='_blank'>
            <div className="insta"><i class="fa-brands fa-facebook-f"></i></div>
          </a>
          <a href="https://www.linkedin.com/company/rangrag-studio/" target='_blank'>
            <div className="insta"><i class="fa-brands fa-linkedin-in"></i></div>
          </a>
          <a href="https://youtube.com/@rangraginterior?si=ysiDjGfY8xrtHrgY" target='_blank'>
            <div className="insta"><i class="fa-brands fa-youtube"></i></div>
          </a>
        </div>

      </header>


      <div className="container-fluid">

        <div class="row">

          <div class="col col-12 col-xl-8 col-md-6 col-sm-12" id="img1">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img2">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-3 col-md-6 col-sm-12" id="img3">
            <video src="/img/vid-1.mp4" controls autoPlay muted loops></video>
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-7 col-md-6 col-sm-12" id="img4">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-2 col-md-6 col-sm-12" id="img5">
            <video src="/img/vid-2.mp4" autoPlay muted loops controls  ></video>
          </div>

          <div class="col col-12 col-xl-6 col-md-6 col-sm-12" id="img6">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-6 col-md-6 col-sm-12" id="img7">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img8">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img9">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img10">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-2  col-md-6 col-sm-12" id="img3">
            <video style={{ height: '120%' }} src="/img/vid-3.mp4" controls muted autoPlay loops></video>

          </div>

          <div class="col col-12 col-xl-7 col-md-6 col-sm-12" id="img4">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-3 col-md-6 col-sm-12" id="img5">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-8 col-md-6 col-sm-12" id="img11">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img12">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-6 col-md-6 col-sm-12" id="img6">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-6 col-md-6 col-sm-12" id="img7">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-4 col-md-6 col-sm-12" id="img13">
            <div class="details-window down">
            </div>
          </div>

          <div class="col col-12 col-xl-8 col-md-6 col-sm-12" id="img14">
            <div class="details-window down">
            </div>
          </div>

        </div>



      </div>


      <div className="project-sec2">

        <h2>Explore the Floor Plan</h2>
        <p>Click on a section to explore details about the design.</p>


        <section className="interactive-floor-plan">


          {/* //first */}

          <div className="interactive-floor-plan">
            <div className="floor-plan-container">
              <img
                src="/img/floor-plan.jpeg"
                alt="Floor Plan"
                className="floor-plan-image"
              />

              {/* Hotspots */}
              <div
                className="hotspot"
                style={{ top: "31%", left: "20%" }}
                onClick={() => handleHotspotClick("Ground Floor - Dining Table")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "53%", left: "22%" }}
                onClick={() => handleHotspotClick("Ground Floor - Living Room")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "65%", left: "22%" }}
                onClick={() => handleHotspotClick("Living Room - Television")}
              ></div>


              <div
                className="hotspot"
                style={{ top: "27%", left: "48%" }}
                onClick={() => handleHotspotClick("First Floor - Bedroom")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "35%", left: "60%" }}
                onClick={() => handleHotspotClick("First Floor - Washroom")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "55%", left: "50%" }}
                onClick={() => handleHotspotClick("First Floor - Theater")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "65%", left: "55%" }}
                onClick={() => handleHotspotClick("First Floor - Chill Time")}
              ></div>


              <div
                className="hotspot"
                style={{ top: "65%", left: "75%" }}
                onClick={() => handleHotspotClick("Second Floor - Terrace")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "25%", left: "73%" }}
                onClick={() => handleHotspotClick("Master Bedroom")}
              ></div>
              <div
                className="hotspot"
                style={{ top: "18%", left: "83%" }}
                onClick={() => handleHotspotClick("Dressing Area")}
              ></div>


            </div>

            {/* Popup */}
            {selectedSection && (
              <div className="popup">
                <button className="close-btn" onClick={closePopup}>
                  ✖
                </button>
                <h3>{selectedSection}</h3>
                <p>{sections[selectedSection].description}</p>
                <img
                  src={sections[selectedSection].image}
                  alt={selectedSection}
                  className="section-image"
                />
              </div>
            )}
          </div>


          {/* //second */}

          <div className="interactive-floor-plan-2">
            <div className="floor-plan-container">
              <img
                src="/img/floorplan-2.jpg"
                alt="Floor Plan"
                className="floor-plan-image"
              />

              {/* Hotspots */}
              <div
                className="hotspot-2"
                style={{ top: "38%", left: "25%" }}
                onClick={() => handleHotspotClick_2("Terrace")}
              ></div>
              <div
                className="hotspot-2"
                style={{ top: "52%", left: "25%" }}
                onClick={() => handleHotspotClick_2("Kitchen")}
              ></div>
              <div
                className="hotspot-2"
                style={{ top: "67%", left: "28%" }}
                onClick={() => handleHotspotClick_2("Dining Table")}
              ></div>
              <div
                className="hotspot-2"
                style={{ top: "72%", left: "44%" }}
                onClick={() => handleHotspotClick_2("Leaving Room")}
              ></div>


              <div
                className="hotspot-2"
                style={{ top: "45%", left: "60%" }}
                onClick={() => handleHotspotClick_2("Bed Room")}
              ></div>

              <div
                className="hotspot-2"
                style={{ top: "55%", left: "65%" }}
                onClick={() => handleHotspotClick_2("Dressing Room")}
              ></div>
              <div
                className="hotspot-2"
                style={{ top: "65%", left: "62%" }}
                onClick={() => handleHotspotClick_2("Bathroom")}
              ></div>


              <div
                className="hotspot-2"
                style={{ top: "85%", left: "75%" }}
                onClick={() => handleHotspotClick_2("Exterior")}
              ></div>
              <div
                className="hotspot-2"
                style={{ top: "15%", left: "53%" }}
                onClick={() => handleHotspotClick_2("Swimming Pool")}
              ></div>


            </div>

            {/* Popup */}
            {selectedSection_2 && (
              <div className="popup-2">
                <button className="close-btn" onClick={closePopup_2}>
                  ✖
                </button>
                <h3>{selectedSection_2}</h3>
                <p>{sections_2[selectedSection_2].description}</p>
                <img
                  src={sections_2[selectedSection_2].image}
                  alt={selectedSection_2}
                  className="section-image"
                />
              </div>
            )}


          </div>


        </section>

      </div>


      <div className="project-sec3">
        <video src="/img/clip1.mp4" controls autoPlay loop></video>
      </div>


      <div className="project-sec4">

        <section className="design-types">

          <h2 className="section-title">Explore Our Design Categories</h2>

          <div className="design-grid">
            {designCategories.map((category, index) => (
              <div key={index} className="design-card">
                <img src={category.image} alt={category.type} className="design-image" />
                <div className="design-info">
                  <h3>{category.type}</h3>
                  <p>Experience unique and modern designs for {category.type.toLowerCase()}.</p>
                  <button className="explore-btn" onClick={() => handleExploreClick(category.type)}>Explore {category.type}</button>
                </div>
              </div>
            ))}
          </div>

          <div className={`fade-in-div ${showDiv ? 'visible' : 'hidden'}`}>

            {currentData.length > 0 ? (

              <>
                <button className="close-btn" onClick={handleCloseClick}>
                  ✕
                </button>

                <div className="card-container">

                  {currentData.map((item) => (
                    <div key={item.id} className="card">
                      <img src={item.image} alt={item.name} />
                    </div>
                  ))}

                </div>

              </>

            ) : (
              <p>No items to display</p>
            )}
          </div>

        </section>
      </div>


      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h2>About Us</h2>
            <p>
              We specialize in creating unique and stunning interior designs that transform your spaces into luxurious and comfortable havens.
            </p>
          </div>

          <div className="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/services'>SERVICES</Link></li>
              <li><Link to='/aboutUs'>AboutUs</Link> </li>
              <li> <Link to='/contactUs'>ContactUs</Link></li>

            </ul>
          </div>

          <div className="footer-contact">
            <h2>Contact Us</h2>
            <p>Email: contanct@rangragstudio.in</p>
            <p>Phone: +91 9328623606</p>
            <p>Address: 203 possible Triangle, rajkot, Gujarat</p>
          </div>

          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <p>Subscribe to our newsletter for design tips and updates!</p>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Interior Design Co. All Rights Reserved.</p>
          <div className="footer-social">

            <a href="https://www.instagram.com/rangrag_studio?igsh=MWljc3U0YnZvenlteQ==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/people/RangRag-Interior-Design-Studio/61561135798667/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/rangrag-studio/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://youtube.com/@rangraginterior?si=ysiDjGfY8xrtHrgY" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://www.justdial.com/Rajkot/Rangrag-Studio-Near-Haridarshan-School-Mavdi/0281PX281-X281-240707141959-Z2N8_BZDET?catid=&checkin=&checkout=&vpfs=&stxt=%20Interior%203D%20Visualization%20Services&nid=11466419&stype=category_list&search=Interior-3D-Visualization-Services&area=Near%20Haridarshan%20School%20Mavdi&type=Architectural%20Walkthroughs&totalJdReviews=undefined&bdmsgtype=7&bdcaptiontype=6&bdpage=rsltpge&slectedDimgTag=&show_open_abd=0" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google"></i></a>

          </div>
        </div>
      </footer>

      <div className="parent-div">

        {/* Divs to show/hide */}
        {showIcons && (

          <div className="h-icons">
            <div className="hidden-icons" onClick={makeCall}>
              <i className="fa fa-phone"></i>
            </div>
            <div className="hidden-icons" onClick={openWhatsApp}>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>

        )}

        <div className="icon-div" onClick={toggleIcons}>
          <i className="fa-brands fa-whatsapp  whatsapp-icon"></i>
          <i className="fa fa-phone call-icon"></i>
        </div>

      </div>

      <div className="up">
        <a href="#sec1"><img src="/img/chervon.png" alt="" /></a>
      </div>

    </div>
  )

}

import React, { useState } from 'react'

export default function Extra() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSection_2, setSelectedSection_2] = useState(null);

  //first

  const sections = {
    "Ground Floor - Dining Table": {
      description: "This is the Dining Table area on the ground floor.",
      image: "/img/Scene 4_1.png",
    },
    "Ground Floor - Living Room": {
      description: "This is the Living Room area on the ground floor.",
      image: "/img/14-1-1.png",
    },
    "Living Room - Television": {
      description: "This is the Television area in the living room.",
      image: "/img/87.png",
    },


    "First Floor - Bedroom": {
      description: "This is the bedroom on the first floor.",
      image: "/residential/Scene 21.png",
    },
    "First Floor - Washroom": {
      description: "This is the washroom on the first floor.",
      image: "/residential/Scene 15(1).png",
    },
    "First Floor - Theater": {
      description: "This is the theater area on the first floor.",
      image: "/img/theater_1.png",
    },
    "First Floor - Chill Time": {
      description: "This is the extra space with chairs for seating.",
      image: "/img/15.png",
    },


    "Second Floor - Terrace": {
      description: "This is the terrace area on the second floor.",
      image: "/residential/b3.png",
    },
    "Master Bedroom": {
      "description": "This is the master bedroom with a cozy design and elegant furniture.",
      "image": "/img/18-1.png"
    },
    "Dressing Area": {
      "description": "This is the dressing area with ample space and modern amenities.",
      "image": "/img/27-1.png"
    }

  };


  const handleHotspotClick = (sectionName) => {
    console.log(`Hotspot clicked: ${sectionName}`);
    setSelectedSection(sectionName);
  };

  const closePopup = () => {
    setSelectedSection(null);
  };



  //second

  const sections_2 = {
    "Terrece": {
      description: "This is the Dining Table area on the ground floor.",
      image: "/img/terrace.jpg",
    },
    "Kitchen": {
      description: "This is the Living Room area on the ground floor.",
      image: "/residential/Scene 8(1).png",
    },
    "Dining Table": {
      description: "This is the Television area in the living room.",
      image: "/residential/Scene 4_1.png",
    },
    "Hall": {
      description: "This is the bedroom on the first floor.",
      image: "/residential/Scene 2.png",
    },


    "Bed Room": {
      description: "This is the washroom on the first floor.",
      image: "/residential/Scene 22.png",
    },
    "Dressing Room": {
      description: "This is the theater area on the first floor.",
      image: "/residential/Scene 30(1).png",
    },
    "Bathroom": {
      description: "This is the extra space with chairs for seating.",
      image: "/img/46.png",
    },


    "Exterior": {
      description: "This is the terrace area on the second floor.",
      image: "/img/Scene 9_3.png",
    },
    "Master Bedroom": {
      "description": "This is the master bedroom with a cozy design and elegant furniture.",
      "image": "/img/18-1.png"
    },
    "Swimming Pool": {
      "description": "This is the dressing area with ample space and modern amenities.",
      "image": "/img/Scene 8.png"
    }

  };


  const handleHotspotClick_2 = (sectionName) => {
    console.log(`Hotspot clicked: ${sectionName}`);
    setSelectedSection_2(sectionName);
  };

  const closePopup_2 = () => {
    setSelectedSection_2(null);
  };

  return (
    <div>

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
                onClick={() => handleHotspotClick_2("Terrece")}
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
                onClick={() => handleHotspotClick_2("Hall")}
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


    </div>
  )
}

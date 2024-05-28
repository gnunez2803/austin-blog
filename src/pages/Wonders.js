import './Wonders.css';
import React from 'react';
import lady from './../assets/wonders/lady_bird_lake.png'
import ut from './../assets/wonders/ut.png'
import sc from './../assets/wonders/south_congress.png'
import bs from './../assets/wonders/barton_springs.png'
import mc from './../assets/wonders/moody_center.png'
import zp from './../assets/wonders/zilker_park.png'

function Wonders() {
    const wonders = [
        {
          name: "Lady Bird Lake",
          description: "A beautiful reservoir on the Colorado River offering scenic views, hiking trails, and water activities such as kayaking and paddleboarding.",
          img_path: lady
        },
        {
          name: "Barton Springs Pool",
          description: "A natural spring-fed swimming pool located in Zilker Park, perfect for cooling off during hot Texas summers.",
          img_path: bs
        },
        {
          name: "The University of Texas at Austin",
          description: "A prestigious public research university known for its iconic tower, vibrant campus life, and top-ranked academic programs.",
          img_path: ut
        },
        {
          name: "South Congress Avenue",
          description: "A trendy neighborhood known for its eclectic shops, vibrant street art, live music venues, and delicious food trucks.",
          img_path: sc
        },
        {
          name: "Moody Center",
          description: "Multipurpose arena that hosts live entertainment and every seat has a decent view.",
          img_path: mc
        },
        {
          name: "Zilker Park",
          description: "Sparwling urban oasis offering trails, gardens, and recreational activities by the Colorado River.",
          img_path: zp
        }
      ];
    
      return (
        <div className>
          <h1 className='title'>Wonders of Austin, Texas</h1>
            <ul className='wonder-list'>
              {wonders.map(wonder => (
                <li key={wonder.name} className='wonder-item'>
                  <h2 className='wonder-name'>{wonder.name}</h2>
                  <img style={{height: 200, width: 200}} src={wonder.img_path} alt={wonder.name}/>
                  <p className='description'>{wonder.description}</p>
                </li>
              ))}
            </ul>
        </div>
      );
}

export default Wonders;
import './Home.css';

function Home() {
    const wonders = [
        {
          name: "Lady Bird Lake",
          description: "A beautiful reservoir on the Colorado River offering scenic views, hiking trails, and water activities such as kayaking and paddleboarding."
        },
        {
          name: "Barton Springs Pool",
          description: "A natural spring-fed swimming pool located in Zilker Park, perfect for cooling off during hot Texas summers."
        },
        {
          name: "The University of Texas at Austin",
          description: "A prestigious public research university known for its iconic tower, vibrant campus life, and top-ranked academic programs."
        },
        {
          name: "South Congress Avenue",
          description: "A trendy neighborhood known for its eclectic shops, vibrant street art, live music venues, and delicious food trucks."
        }
      ];
    
      const placesToEat = [
        {
          name: "Franklin Barbecue",
          description: "A BBQ restaurant celebrated for its mouthwatering smoked meats and long lines of eager patrons. Make sure to get there early before they sell out."
        },
        {
          name: "Rosita's Al Pastor",
          description: "Beloved eatery renowned for its authentic and mouthwatering Mexican cuisine."
        },
        {
          name: "Pecan Square Cafe",
          description: "Known for its warm hospitality and delicious comfort food, Pecan Square Cafe offers a menu filled with Southern-inspired dishes made from scratch using locally sourced ingredients."
        },
        {
          name: "Uchi",
          description: "A renowned Japanese restaurant offering innovative sushi and sashimi creations in an upscale setting. Chef Tyson Cole's culinary artistry and attention to detail have earned Uchi numerous accolades and a loyal following."
        }
      ];
    
      return (
        <div>
          <h1 className='title'>Wonders of Austin, Texas</h1>
          <ul className='wonder-list'>
            {wonders.map(wonder => (
              <li key={wonder.name} className='wonder-item'>
                <h2 className='wonder-name'>{wonder.name}</h2>
                <p className='description'>{wonder.description}</p>
              </li>
            ))}
          </ul>
          <h1 className='title'>Best places to eat in Austin, Texas</h1>
          <ul className='place-list'>
            {placesToEat.map(place => (
              <li key={place.name} className='place-item'>
                <h2 className='place-name'>{place.name}</h2>
                <p className='place-description'>{place.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Home;
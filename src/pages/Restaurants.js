import './Restaurants.css';

function Restaurants() {
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

export default Restaurants;
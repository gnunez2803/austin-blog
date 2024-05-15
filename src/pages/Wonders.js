import './Wonders.css';

function Wonders() {
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
        </div>
      );
}

export default Wonders;
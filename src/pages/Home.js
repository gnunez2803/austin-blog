import './Home.css';

function Home() {
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
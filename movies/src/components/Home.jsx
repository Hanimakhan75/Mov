import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  return (
    <Carousel>
      <Carousel.Item >
        <img src="https://image.tmdb.org/t/p/original//rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg" alt="" className='slides'/>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
        <Button variant="danger" className='btn-watch'>Watch Now</Button>
        <Button variant="danger" className='tralier'>Watch Tralier</Button>
          <h3>Thunderbolts</h3>
          <p>Thunderbolts" (2025) is a Marvel movie where a team of antiheroes—Yelena Belova, Bucky Barnes, Red Guardian, Taskmaster, Ghost, and U.S. Agent—are assembled by Valentina Allegra de Fontaine for a secret mission. Along the way, they confront their dark pasts and uncover secrets involving a powerful and unstable character named Bob, who may be connected to the Sentry.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img src="https://image.tmdb.org/t/p/original//bVm6udIB6iKsRqgMdQh6HywuEBj.jpg" alt="" className='slides'/>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
        <Button variant="danger" className='btn-watch'>Watch Now</Button>
        <Button variant="danger" className='tralier'>Watch Tralier</Button>
          <h3>Exterritorial</h3>
          <p>Exterritorial" (2025) is a German action thriller about Sara Wulf, a former soldier whose son goes missing at a U.S. Consulate in Frankfurt. As she uncovers a conspiracy involving corrupt officials, she must fight to rescue her son and expose the truth, while confronting a past betrayal.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://image.tmdb.org/t/p/original//cJvUJEEQ86LSjl4gFLkYpdCJC96.jpg" alt=""  className='slides'/>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
        <Button variant="danger" className='btn-watch'>Watch Now</Button>
        <Button variant="danger" className='tralier'>Watch Tralier</Button>
          <h3>Warfare</h3>
          <p>
          Warfare" (2025) is a war film about a Navy SEAL platoon trapped in a house during the 2006 Battle of Ramadi. The movie, based on real-life events, showcases their struggle for survival under heavy enemy fire, with a focus on the emotional toll of modern combat.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
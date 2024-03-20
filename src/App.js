import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ZineCard from './ZineCard.js'
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const zines = [{
    title: "My Life as a Teenage Girl Only 23 Years Old",
    description: "This Zine was created during my post grad quarter life crisis.",
    link: "https://angelageorge.com/zine",
    cover: "",
  },
  {
    title: "I Want To Be a Bitch",
    subtitle: "The Story of a Goody-Two-Shoes Who Cares Too Much",
    description: "My internal monolouge every time I get a wrong order and how I'm growing from it.",
    link: "https://angelageorge.com/bitch",
    cover: "",
  },
  {
    title: "But I Still Love Technology",
    subtitle: "A Poetry Zine",
    description: "Reflections on my relationship with technology through the lens of art, work, and every day life.",
    link: "",
    cover: ""
  }]
   
  return (
   <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Angela's ZineLand</Navbar.Brand>
      </Container>
    </Navbar>
    <Container>
      <h1>
        My Zines
      </h1>
      
    </Container>
    <Container>
      <h1>
      Zines I Like
      </h1>
      <Row>
        {
      zines.map( zine => <ZineCard title={zine.title} subtitle={zine.subtitle} description={zine.description} link={zine.link} cover={zine.cover}></ZineCard> )
        }
      </Row>
    </Container>
   </>
  );
}

export default App;

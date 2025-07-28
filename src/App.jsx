import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ZineCard from './ZineCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import firstCover from './covers/first.png';
import bitchCover from './covers/bitch.png';
import poetryCover from './covers/poetry.png';
import taylorCover from './covers/taylor.png';
import artistCover from './covers/artist.jpg';
import brushwithdeath from './covers/brush.png';
import monarch from './covers/monarch.jpg';
import garden from './covers/garden.png';
import punchcard from './covers/punchcard.png';
import floriography from './covers/floriography.png';
import nord from './covers/nord.jpg';
import ufo from './covers/ufo.png';
import rec1 from './covers/rec1.png';
import rec2 from './covers/rec2.png';
import rec3 from './covers/rec3.png';
import rec4 from './covers/rec4.png';
import profile from './covers/profile.png';
import Button from 'react-bootstrap/Button';

function App() {

  const zines = [
    {
      title: "Woman Artist",
      subtitle: "What is your state of mind?",
      description: "A collection of sketches.",
      link: "https://angelageorge.com/woman-artist-zine/",
      cover: artistCover,
      key: 10
    },
    {
    title: "My Life as a Teenage Girl Only 23 Years Old",
    description: "A post-grad-quarter-life crisis zine.",
    link: "https://angelageorge.com/published-zine/",
    cover: firstCover,
    key: 2
  },
  {
    title: "I Want To Be a Bitch",
    subtitle: "The Story of a Goody-Two-Shoes Who Cares Too Much",
    description: "My wrong order internal monolouge and growing up.",
    link: "https://angelageorge.com/bitch-zine",
    cover: bitchCover,
    key: 3
  },
  {
    title: "But I Still Love Technology",
    subtitle: "A Poetry Zine",
    description: "Reflections on my relationship with technology.",
    link: "https://angelageorge.com/but-i-still-love-technology-poetry-zine/",
    cover: poetryCover,
    key: 4
  },
  {
    title: "Eat the Rich Eatery",
    subtitle: "Brunch | Bar | Bakery",
    description: "A breakfast menu for Swifties who also would eat the rich.",
    link: "https://angelageorge.com/eat-the-rich-eatery-zine/",
    cover: taylorCover,
    key: 1
  },
  {
    title: "Save the Butterflies",
    description: "A bookmark mini zine <3",
    link: "https://angelageorge.com/monarch",
    cover: monarch,
    key: 5
  },  {
    title: "Bored in Nord",
    subtitle: "An Adventure Board Game and Zine",
    description: "Explore Northeast Minneapolis in Candyland style.",
    link: "https://angelageorge.com/nordeast/",
    cover: nord,
    key: 6
  },
  {
    title: "Unidentified Fluffy Object",
    description: "Mulder and Scully have a new meow-stery  to solve.",
    link: "https://angelageorge.com/lilies#UFO-zine/",
    cover: ufo,
    key: 7
  },
  {
    title: "A Brush with Death",
    subtitle: "A Cat Owner's Toxin Guide",
    description: "A quick guide to household toxins.",
    link: "https://angelageorge.com/lilies#brushwithdeath/",
    cover: brushwithdeath,
    key: 8
  },
    {
    title: "Punch Card Challenge",
    description: "A motivational zine to read, make art, exercise, and save money.",
    link: "https://angelageorge.com/punch-card-challenge-zine/",
    cover: punchcard,
    key: 11
  },
    {
    title: "Patio Garden Tour",
    description: "An illustrated guide to my patio garden",
    link: "https://angelageorge.com/patio-garden-tour-zine/",
    cover: garden,
    key: 12
  },
    {
    title: "Language of Flowers",
    subtitle: "Victorian Floriography Zine",
    description: "A-Z meanings of flowers for sending covert messages.",
    link: "https://angelageorge.com/language-of-flowers-victorian-floriography-zine//",
    cover: brushwithdeath,
    key: 13
  }
]

const recs = [{
  title: "It Happened to Me!",
  subtitle: "I Got a BFA at an Accredited Art College and Now I'm a Whiney Little Bitch!",
  description: "By Sarah Evenson",
  link: "https://sarah-evenson.com/bfa-zine",
  cover: rec1,
  key: 6
},
{
  title: "A Collection of Sketches Vol. 1",
  description: "Winter sketches and doodles by Eva Malley",
  link: "https://evamalley.com/collections/all-products/products/a-collection-of-sketches-zine",
  cover: rec4,
  key: 7
},
{
  title: "Dump Him",
  description: "Collage zine by RagzMagz",
  link: "https://www.etsy.com/shop/ragzmagz",
  cover: rec3,
  key: 8
},
{
  title: "You Are a Moon",
  subtitle: "",
  description: "Art and Poetry zine by Troi Holder",
  link: "https://www.toriholder.com",
  cover: rec2,
  key: 9
}
]
   
  return (
   <>
    <Navbar style={{backgroundColor:"black"}} sticky="top">
      <div className='navCont'>
        <Navbar.Brand><h1>Angela's ZineLand</h1></Navbar.Brand>
        <Button variant="primary" href='https://angelageorge.com' className="hideMeOnSmall">Home</Button>
      </div>
    </Navbar>
    <div style={{height:"50px"}} className="hideMeOnSmall">
    </div>
    <div style={{overflow:'hidden'}}>
    <Row>
    <Col lg={6}>
      <Row style={{backgroundColor:"#fff626"}} className='big-padding'>
      <h2>Hi. I'm Angela and I make zines.</h2>
        {/* content */}
        <Col>
          
          <p>
          This is my landing page for all things Zines. Poke around, laugh, cry, or get inspired to make your own zines! Check out my code for this page on <a href="https://github.com/Angela-Mari/zineland">GitHub</a>.
          </p>
          {/* links */}
          <Col>
            <Row>
              <div>
              <img width="30" height="30" style={{margin:"5px"}}src="https://img.icons8.com/ios-filled/50/link--v1.png" alt="instagram-new"/><a href="https://angelageorge.com">My Blog</a>
              </div>
            </Row>
            <Row>
              <div>
              <img width="30" height="30" style={{margin:"5px"}} src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" alt="instagram-new"/><a href="https://instagram.com/artfully_ange">@artfully_ange</a>
              </div>
            </Row>
            <Row>
            <div>
            <img width="30" height="30" style={{margin:"5px"}} src="https://img.icons8.com/glyph-neue/64/headphones.png" alt="instagram-new"/><a href="https://angelageorge.com/voz-memos">Voz-Memos: A Gen-Z Podcast </a>
            </div>
            </Row>
          </Col>
        </Col>
        {/* image */}
        <Col sm={12} md ={6}>
          <div>
        <img alt="Angela sticking her tounge out black & white" src={profile} className='profilePic'/>
        </div>
        </Col>
      </Row>
      <Container style={{marginLeft:"1rem", marginTop: "2rem"}}>
        <h2>
        Featured
        </h2>
        <Row>
        <Col style={{paddingLeft:"0px", marginLeft:"10px"}}>
        <img alt="But I still love technology with keyboards floating in background black and white" src={poetryCover} className='featuredPic'></img>
        <div style={{height:"50px"}}>
          </div>
        </Col>
        <Col sm= {12} md={6}>
          <Container>
          <h3>
            But I still Love Technology
          </h3>
          <h4>
            A Poetry Zine
          </h4>
          <p>
          In this zine, I explore my love-hate relationship with tech through poetry and art. Whether you're a digital native or a technophobe to your core, this zine offers a mirror to our modern existence that's as amusing as it is unsettling.
          </p>
          <Button variant="secondary" href="https://angelageorge.com/but-i-still-love-technology-poetry-zine/">Read Me</Button>
          <div style={{height:"50px"}}>
          </div>
          </Container>
        </Col>
        </Row>
        
      </Container>
    </Col>
    <Col lg={6}>
  <Container >
      <h2>
        My Zines
      </h2>
        <div className='zineScroll'>
        {
      zines.map( zine => <ZineCard title={zine.title} subtitle={zine.subtitle} description={zine.description} link={zine.link} cover={zine.cover} key={zine.key}></ZineCard> )
        }
        </div>
      <h2>
      Curated Zines
      </h2>
      <p>
      These are some zines I found from other artists. Hope you enjoy these curated picks. 💛
      </p>
      <div className='zineScroll'>
        {
      recs.map( zine => <ZineCard title={zine.title} subtitle={zine.subtitle} description={zine.description} link={zine.link} cover={zine.cover} id={zine.key}></ZineCard> )
        }
      </div>
      </Container>
    </Col>
    </Row>
      <footer style={{backgroundColor:"black"}}>
            <Col className="text-center" style={{padding:"15px", color:"white"}}>Ⓒ Ángela George 2025</Col>
      </footer>
    </div>
   </>
  );
}

export default App;

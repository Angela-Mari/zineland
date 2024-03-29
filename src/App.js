import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ZineCard from './ZineCard.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import firstCover from './covers/first.png';
import bitchCover from './covers/bitch.png';
import poetryCover from './covers/poetry.png';
import taylorCover from './covers/taylor.png';
import rec1 from './covers/rec1.png';
import rec2 from './covers/rec2.png';
import rec3 from './covers/rec3.png';
import rec4 from './covers/rec4.png';
import profile from './covers/profile.png';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';




function App() {

  const zines = [
    {
      title: "In her Billionaire Era",
      description: "Modern day capitalisim through the eyes of a swiftie.",
      link: "https://angelageorge.com/coming-soon",
      cover: taylorCover,
      key: 1
    },
    {
    title: "My Life as a Teenage Girl Only 23 Years Old",
    description: "This Zine was created during my post grad quarter life crisis.",
    link: "https://angelageorge.com/zine",
    cover: firstCover,
    key: 2
  },
  {
    title: "I Want To Be a Bitch",
    subtitle: "The Story of a Goody-Two-Shoes Who Cares Too Much",
    description: "My wrong order internal monolouge and growing up.",
    link: "https://angelageorge.com/bitch",
    cover: bitchCover,
    key: 3
  },
  {
    title: "But I Still Love Technology",
    subtitle: "A Poetry Zine",
    description: "Reflections on my relationship with technology through the lens of art, work, and every day life.",
    link: "https://angelageorge.com/coming-soon",
    cover: poetryCover,
    key: 4
  },
  {
    title: "But I Still Love Technology",
    subtitle: "A Poetry Zine",
    description: "Reflections on my relationship with technology through the lens of art, work, and every day life.",
    link: "https://angelageorge.com/coming-soon",
    cover: poetryCover,
    key: 5
  },
]

const recs = [{
  title: "It Happened to Me!",
  subtitle: "I Got a BFA at an Accredited Art College and Now I'm a Whiney Little Bitch!",
  description: "This Zine was created during my post grad quarter life crisis.",
  link: "https://sarah-evenson.com/bfa-zine",
  cover: rec1,
  key: 6
},
{
  title: "A Collection of Sketches Vol. 1",
  description: "",
  link: "https://evamalley.com/collections/all-products/products/a-collection-of-sketches-zine",
  cover: rec4,
  key: 7
},
{
  title: "Dump Him",
  description: "",
  link: "www.etsy.com/shop/ragzmagz",
  cover: rec3,
  key: 8
},
{
  title: "You Are a Moon",
  description: "www.toriholder.com",
  link: "",
  cover: rec2,
  key: 9
}
]
   
  return (
   <>
    <Navbar style={{backgroundColor:"black"}} sticky="top">
      <div className='navCont'>
        <Navbar.Brand href="#home"><h1>Angela's ZineLand</h1></Navbar.Brand>
        <Button variant="primary">Home</Button>
      </div>
    </Navbar>
    {/* TODO: hide this div on ipad and smaller */}
    <div style={{height:"50px"}}>
    </div>
    <div style={{overflow:'hidden'}}>
    <Row>
    <Col lg={6}>
      <Container>
      <Row style={{backgroundColor:"#fff626", paddingTop:"1rem", paddingBottom:"2rem", marginLeft:"1rem"}}>
        <Col>
          <h2>Hi. I'm Angela and I make zines.</h2>
          <p>
          This is my landing page for all things Zines. Poke around and get inspired to make your own zines! Check out my code for this page on <a href="https://github.com/Angela-Mari/zineland">GitHub</a>.
          </p>
          <Col>
          <Row>
            <a href="https://angelageorge.com"><img width="30" height="30" style={{margin:"5px"}}src="https://img.icons8.com/ios-filled/50/link--v1.png" alt="instagram-new"/>My Blog</a>
          </Row>
          <Row>
            <a href="https://instagram.com/artfully_ange"><img width="30" height="30" style={{margin:"5px"}} src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" alt="instagram-new"/>@artfully_ange</a>
            </Row>
            <Row>
            <a href="https://angelageorge.com/voz-memos"><img width="30" height="30" style={{margin:"5px"}} src="https://img.icons8.com/glyph-neue/64/headphones.png" alt="instagram-new"/>Voz-Memos: A Gen-Z Podcast </a>
            </Row>
          </Col>
        </Col>
        <Col>
        <img alt="Angela sticking her tounge out black & white" src={profile} className='profilePic'/>
        </Col>
      </Row>
      </Container>
      <Container style={{marginLeft:"1rem", marginTop: "2rem"}}>
        <h2>
        Featured
        </h2>
        <Row>
        <Col style={{paddingLeft:"0px", marginLeft:"10px"}}>
        <img alt="But I still love technology with keyboards floating in background black and white" src={poetryCover} className='featuredPic'></img>
        </Col>
        <Col style={{paddingLeft:"0px", marginLeft:"-100px"}}>
          <h3>
            But I still Love Technology
          </h3>
          <h4>
            A Poetry Zine
          </h4>
          <p>
          I created this zine after finding a common theme of a love and hate of technology in several of my poems. This was a great exercise in trying to stick to a motif. I enjoyed refreshing myself on my poetry skills as well as soliciting feedback on Reddit. Zines are about creating community and this zine helped me explore a new community (/OCPoetry). 
          </p>
          <Button variant="secondary">Read Me</Button>
        </Col>
        </Row>
        
      </Container>
    </Col>
    <Col lg={6}>
  
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
      These are some zines I’ve found from other artists. I wanted you to know about them! Hope you enjoy these curated picks. 💛
      </p>
      <div className='zineScroll'>
        {
      recs.map( zine => <ZineCard title={zine.title} subtitle={zine.subtitle} description={zine.description} link={zine.link} cover={zine.cover} id={zine.key}></ZineCard> )
        }
      </div>
    </Col>
    </Row>
    </div>
   </>
  );
}

export default App;

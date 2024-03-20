import './ZineCard.css';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useState } from 'react';

function ZineCard({title, subtitle, description, cover, link}) {
  
  
  const [random, setRandom] = useState("zine" + Math.floor(Math.random() * 3+1));

  useEffect(() => {
    setRandom("zine" + Math.floor(Math.random() * 3+1));
    return () => {};
  }, [random]);
  
  return (
    <Card style={{ height: '25rem', width: '18rem', margin: "1rem"}} className={random}>
      <Card.Body>
        <Card.Img variant="top" style={{ height: '10rem', width: '8rem', backgroundColor: 'gray', objectFit: 'cover'}} src={cover} />
      </Card.Body>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{subtitle}</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
        </Card.Body>
        <footer>
          <Card.Body>
          <Card.Link href={link}>Read More →</Card.Link>
          </Card.Body>
        </footer>
    </Card>
  );
}

export default ZineCard;
import './ZineCard.css';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useState } from 'react';

function ZineCard({title, subtitle, description, cover, link}) {
  
  return (
    <Card style={{ height: '25rem', width: '18rem', margin: "1rem"}}>
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
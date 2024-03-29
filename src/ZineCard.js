import './ZineCard.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function ZineCard({title, subtitle, description, cover, link}) {
  
  return (
    <Card style={{ height: '25rem', width: '18rem', margin: "1rem"}} className='zine'>
      <Card.Body>
       
        <Card.Img variant="top" style={{ height: '12rem', width: '9rem', objectFit: 'cover', marginBottom: '.5rem'}} src={cover} />
        
        
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
          
          </Card.Body>
        <footer style={{marginBottom: '10px', marginLeft: '15px'}}>
          <Card.Link href={link}>Read More →</Card.Link>
        </footer>
    </Card>
  );
}

export default ZineCard;
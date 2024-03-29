import './ZineCard.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function ZineCard({title, subtitle, description, cover, link}) {
  
  return (
    <div className='zine'>
      {/* <Card.Body> */}
       
        <img style={{height: '300px', width: '200px', objectFit: 'cover'}} src={cover} />
{/*         
        
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
          
          </Card.Body>
        <footer style={{marginBottom: '10px', marginLeft: '15px'}}>
          <Card.Link href={link}>Read More →</Card.Link>
        </footer> */}
    </div>
  );
}

export default ZineCard;
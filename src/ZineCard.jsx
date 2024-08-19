import './ZineCard.css';
import React, {useState} from "react";

function ZineCard({title, subtitle, description, cover, link, id}) {
  
  const [style, setStyle] = useState(id);
    
  return (
    <div className='zine' onMouseEnter={e => {
      setStyle(-1);
  }}
  onMouseLeave={e => {
   setStyle(id);
}}>
      {/* <Card.Body> */}
       <div style = {{display: style === id? 'block':'none'}} >
          <img style={{height: '300px', width: '200px', objectFit: 'cover'}} src={cover} />
       </div>

        <div style={{display: style === id? 'none':'flex', flexDirection: "column", justifyContent: "space-between", height: '300px', width: '200px', padding: ".5rem"}} >
          <div>
            <h2>
              {title}
            </h2>
            <p>
              <i>{subtitle}</i>
            </p>
            <p>
              {description}
            </p>
          </div>
          <div>
            <a href={link} className='zinelink'>Read More →</a>
          </div>
        
        </div>
    </div>
  );
}

export default ZineCard;
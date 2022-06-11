import React  from 'react'
import './Card.css'

export default function Card(props) {
  const name=props.name;
  const imageurl=props.imageurl;
  const position=props.position;
  const quote = props.quote
  const knowmorebtn = props.knowmorebtn;


    return (
      <center>
      <div className="flipCard">
        <div className="flipCard-inner">
          <div className="flipCard-front">
            <img className="memimg" src={imageurl} alt="Jane"></img>
            <div className="container">
            <center><div className="divider">
                <span></span>
              </div></center>
              <div>
              <div className="cardName"><h2>{name}</h2></div>
              <div className="cardTitle">{position}</div>
              </div>
            </div>
          </div>

          <div className="flipCard-back">
            <center><div className="divider-top">
              <span></span>
            </div></center>
            <div className="quoteText">{quote}</div>
            <center><div className="divider-bottom">
              <span></span>
            </div></center>
            <center><button className="knowMoreBtn">Know More</button></center>
          </div>
        </div>
    </div>
    </center>
    );
  }
 
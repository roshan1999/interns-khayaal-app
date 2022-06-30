import { useState } from "react";
import Card from "../Card/Card";
import DividerAndHeading from "../OurTeams/DividerAndHeading";
import './TeamsSecComponent.css'
import ReactCardCarousel from "react-card-carousel";
const TeamsSecComponent = (props) => {
    const sectionHeading = props.sectionHeading;
    const [details, setDetails] = useState(props.details)

    return (
    <div className="secc">
        <DividerAndHeading sectionHeading={sectionHeading} />

        <div  className="cards">

            {details.map((person) => {
                return <Card name={person.name} imageurl={person.imageurl} position={person.position} quote={person.quote} />
            })}
    
        </div>
        <div className="mobile-cards">
            <ReactCardCarousel 
            autoplay={false}
          autoplay_speed={2500}
          spread={"wide"}
          disable_box_shadow={true}>
            {details.map((person) => {
                return <Card name={person.name} imageurl={person.imageurl} position={person.position} quote={person.quote} />
            })}
          </ReactCardCarousel>
        </div>
    </div>
    

       





      );
}
 
export default TeamsSecComponent;
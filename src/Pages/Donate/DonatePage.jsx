import Dummy1 from "../Donate-Dummy-Page/Dummy1"
import "./DonatePage.css";
const DonatePage = () => {
  const loremLong ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti itaque assumenda culpa, possimus, officia delectus dignissimos quam iure nam quibusdam, temporibus voluptas magnam sunt repudiandae voluptatibus praesentium earum ut voluptatem beatae. Sapiente alias voluptatibus velit?";
  return (
    <div className="donate-page">
      <div className="donate-content">
        <h2 className="donate-title">How will my Donations help?</h2>
        <p className="donate-desc">{loremLong}</p>
      </div>
      <div className="donate-modal-container">
        <Dummy1></Dummy1>
      </div>
    </div>
  );
};

export default DonatePage;

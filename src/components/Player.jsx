import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <Card
      className="h-100 shadow-sm"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        alt={`${name}`}
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div>
            <strong>Team: </strong>
            {team}
          </div>
          <div>
            <strong>Nationality: </strong>
            {nationality}
          </div>
          <div>
            <strong>Jersey Number: </strong> {jerseyNumber}
          </div>
          <div>
            <strong>Age: </strong> {age}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Default Props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "unknown",
  jerseyNumber: 27,
  age: 17,
  image: "https://via.placeholder.com/150",
};

// PropTypes validation
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
};

export default Player;

import PropTypes from "prop-types";
import Card from "./Card";

const Welcome = ({ name }) => {
  console.log(name);
  return (
    <>
      <h2>Welcome, {name}</h2>
      <Card title={name} text="This is your card" /> 
    </>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Welcome;

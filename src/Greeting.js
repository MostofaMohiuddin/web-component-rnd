import PropTypes from "prop-types";

const Greeting = ({ name }) => {
  console.log(name);
  return <h2>Hello World, {name}</h2>;
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;

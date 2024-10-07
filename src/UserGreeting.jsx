import PropTypes from "prop-types";

function UserGreeting(props) {
  return (
    <>
      {props.isLoggedIn ? (
        <h2 className="welcome">Welcome {props.username}</h2>
      ) : (
        <h2 className="login-prompt">Please login to continue</h2>
      )}
    </>
  );
}
UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  name: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "User",
};

export default UserGreeting;

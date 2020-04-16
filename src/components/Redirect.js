import React from "react";

const Redirect = () => {
  return <button onClick={handleRedirectClick}>REDIRECT</button>;
};

const handleRedirectClick = (props) => {
  console.log(props);
  const { history } = props;
  if (history) {
    history.push("/");
  } else {
    console.log("History no found.");
  }
};
export default Redirect;

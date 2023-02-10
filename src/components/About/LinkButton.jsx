import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const LinkButton = ({ to, buttonText }) => {
  return (
    <>
      <Link to={to} style={{ textDecoration: "none", textAlign: "center" }}>
        <Button>{buttonText}</Button>
      </Link>
    </>
  );
};

export default LinkButton;

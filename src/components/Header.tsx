import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

enum States {
  beans = "beans",
  facts = "facts",
  recipes = "recipes",
  combinations = "combinations",
  history = "history",
}

const Header = () => {
  const [currentState, setCurrentState] = useState<States | string>();
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  const navigate = useNavigate();

  useEffect(() => {
    Object.values(States).includes(pathName as States)
      ? setCurrentState(pathName)
      : setCurrentState(States.beans);
  }, []);

  function setState(value: States) {
    setCurrentState(value);
    navigate(`/${value}`);
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        backgroundColor: "white",
        width: "100%",
        padding: "10px 80px",
        boxShadow: "0px 0px 5px 0.5px rgb(120, 120, 120)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          onClick={() => setState(States.beans)}
          sx={{
            fontWeight: "900",
            color: "black",
            fontSize: 22,
            paddingBottom: "0px",
            borderBottom:
              currentState === States.beans ? "5px solid red" : "none",
          }}
        >
          Beans
        </Button>
        <Button
          onClick={() => setState(States.facts)}
          sx={{
            fontWeight: "900",
            color: "black",
            fontSize: 22,
            paddingBottom: "0px",
            borderBottom:
              currentState === States.facts ? "5px solid red" : "none",
          }}
        >
          Facts
        </Button>
        <Button
          onClick={() => setState(States.recipes)}
          sx={{
            fontWeight: "900",
            color: "black",
            fontSize: 22,
            paddingBottom: "0px",
            borderBottom:
              currentState === States.recipes ? "5px solid red" : "none",
          }}
        >
          Recipes
        </Button>
        <Button
          onClick={() => setState(States.combinations)}
          sx={{
            fontWeight: "900",
            color: "black",
            fontSize: 22,
            paddingBottom: "0px",
            borderBottom:
              currentState === States.combinations ? "5px solid red" : "none",
          }}
        >
          Combinations
        </Button>
        <Button
          onClick={() => setState(States.history)}
          sx={{
            fontWeight: "900",
            color: "black",
            fontSize: 22,
            paddingBottom: "0px",
            borderBottom:
              currentState === States.history ? "5px solid red" : "none",
          }}
        >
          History
        </Button>
      </Box>
    </Box>
  );
};

export default Header;

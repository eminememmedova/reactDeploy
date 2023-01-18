import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import "./index.css"

const index = () => {

  return (
    <div>
      <Box className="box" sx={{ flexGrow: 1 }}>
        <AppBar className="appbar" position="static" style={{boxShadow:"none"}}>
          <Toolbar className="toolbar">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/">
               Home
              </NavLink>
            </Typography>
            <NavLink to="/add">
               Add
              </NavLink>
           
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default index;
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import SideBar from "./sidebar";
import TitleBar from "./titlebar";
import styled from "styled-components";

const CProfile = () => {
  return (
    <>
      <companytitle
        style={{
          color: "#7451f8",
          fontSize: "40px",
          fontStyle: "'Roboto', sans-serif",
          borderRadius: "5px",
          marginLeft: "300px",
          padding: "30",
          marginTop: "300px",
        }}
      >
        COMPANY DETAILS
      </companytitle>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          height: 200,
          margin: "auto",
          width: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            disabled
            id="outlined-required"
            label="Flipkart"
            sx={{ padding: "10px", minWidth: 800 }}
          />
          <TextField
            id="outlined-disabled"
            disabled
            sx={{ padding: "10px", minWidth: 800 }}
            label="U 12345 DL 2020 PLC 098765

              "
          />
          <TextField
            disabled
            id="outlined-password-input"
            label="flipkart@gmail.com"
            autoComplete="current-password"
            sx={{ padding: "10px", minWidth: 800 }}
          />

          <TextField
            disabled
            id="outlined-multiline-static"
            label="Flipkart is an Indian e-commerce company."
            multiline
            rows={4}
            sx={{ overflow: "hidden", padding: "10px", minWidth: 800 }}
          />

          <Button size="small" sx={{ marginTop: "50px" }}>
            Edit About
          </Button>
        </div>
      </Box>
      <Button
        variant="outlined"
        sx={{ marginTop: "250px", marginLeft: "50px" }}
        component="label"
      >
        Files
      </Button>
      <Button
        variant="outlined"
        sx={{ marginTop: "250px", marginLeft: "100px" }}
        component="label"
      >
        Update
      </Button>
    </>
  );
};

export default CProfile;

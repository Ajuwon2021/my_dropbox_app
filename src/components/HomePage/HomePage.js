import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import "./HomePage.css";

function HomePage() {
  return (
    <div>
    
      <React.Fragment>
        <CssBaseline />
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/back.png)`, // Adjust the path accordingly
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "65vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
      </React.Fragment>
        </div>
  );
}

export default HomePage;

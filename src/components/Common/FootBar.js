import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./Common.css";

const FootBar = () => {
  // Shortcut links
  const shortcutLinks = [
    { label: "Home", url: "/" },
    { label: "Drive", url: "/drive" },
    { label: "Profile", url: "/profile" },
    { label: "Folder", url: "/shortcut4" },
    { label: "Uploads", url: "/shortcut5" },
    { label: "Downloads", url: "/shortcut6" },
    { label: "Create folder", url: "/shortcut7" },
    { label: "Sign Up", url: "/sign_up" },
    { label: "Contact", url: "/shortcut9" },
    { label: "Sign In", url: "/sign_in" },
  ];

  // Divide shortcutLinks into two sections (left and right)
  const leftShortcutLinks = shortcutLinks.slice(0, shortcutLinks.length / 2);
  const rightShortcutLinks = shortcutLinks.slice(shortcutLinks.length / 2);

  return (
    <Box sx={{ flexGrow: 1 }} className="main_foot">
      <Grid container spacing={2}>
        {/* Left Section */}
        <Grid item xs={4}>
          <Grid container spacing={2}>
            {leftShortcutLinks.map((link, index) => (
              <Grid item xs={6} key={index}>
                <ListItem component="a" href={link.url}>
                  <ListItemText primary={link.label} />
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Middle Section with Logo */}
        <Grid item xs={4}>
          <div className="foot-img">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Logo"
              width="120"
              height="120"
              className="d-inline-block align-top"
            />
          </div>
        </Grid>

        {/* Right Section */}
        <Grid item xs={4}>
          <Grid container spacing={2}>
            {rightShortcutLinks.map((link, index) => (
              <Grid item xs={6} key={index}>
                <ListItem component="a" href={link.url}>
                  <ListItemText primary={link.label} />
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Bottom Section with Copy */}
        <Grid item xs={12}>
          <div className="foot-copy">
            <p>
              My Dropbox Project @{" "}
              <a
                href="https://www.qwasar.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Qwasar SV
              </a>{" "}
              created and submitted by{" "}
              <a
                href="https://example.com/ayodeji"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ayodeji
              </a>{" "}
              &copy; 2023.
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FootBar;

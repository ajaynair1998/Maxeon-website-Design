import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Chats(props) {
  return (
    <Grid item xs={12}>
      <Box>
        <Box
          sx={{
            bgcolor: "primary.lightBlue",
            p: "1rem",
            pl: "2rem",
            color: "primary.main",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h6">Hi There</Typography>
          <Typography variant="subtitle2">
            The team usually replies in a few minutes
          </Typography>
        </Box>
        <Box p={1}>
          <div class="chat-container">
            <ul class="chat-box chatContainerScroll">
              <li class="chat-right">
                <div class="chat-text">
                  <Typography variant="subtitle2">
                    Hi, Russell I need more information about Developer Plan.
                  </Typography>
                </div>
              </li>
              <li class="chat-left">
                <span className="avatar-icon"></span>
                <div class="chat-text">
                  <Typography variant="subtitle2">
                    Hello, I'm Russell. How can I help you today?
                  </Typography>
                </div>
              </li>
            </ul>
          </div>
          <div className="powered-by-container">
            <div className="powered-by">
              <img
                src="./icons/SparrowBird.png"
                className="powered-by-image"
              ></img>
              <Typography variant="caption">we run on surveysparrow</Typography>
            </div>
          </div>
        </Box>
      </Box>
    </Grid>
  );
}

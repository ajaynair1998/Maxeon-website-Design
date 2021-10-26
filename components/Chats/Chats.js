import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import SendIcon from "@mui/icons-material/Send";

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
        <Box>
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
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "0.5rem",
            }}
          >
            <Input
              placeholder="Write a reply"
              sx={{ color: "primary.dark" }}
              disableUnderline
            />
            <Button variant="text">
              <SendIcon sx={{ color: "#4c5aa1" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

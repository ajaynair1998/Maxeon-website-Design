import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import TypingAnimation from "../TypingAnimation/TypingAnimation";

import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function Chats(props) {
  let [isChatting, setChatting] = useState(false);

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
        {isChatting && (
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
                <TypingAnimation />
              </ul>
            </div>
            <div className="powered-by-container">
              <div className="powered-by">
                <img
                  src="./icons/SparrowBird.png"
                  className="powered-by-image"
                ></img>
                <Typography variant="caption">
                  we run on surveysparrow
                </Typography>
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
        )}
        {!isChatting && (
          <Box
            sx={{
              bgcolor: "primary.main",
              p: "1rem",
              pl: "2rem",
              color: "#000",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Typography variant="h6">
              <b>Start a Conversation</b>
            </Typography>
            <Typography variant="subtitle2">
              The team usually replies in a few minutes.
            </Typography>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                borderRadius: "20px",
                maxWidth: "200px",
                bgcolor: "#13A884",
                color: "primary.main",
              }}
              onClick={() => {
                setChatting(true);
              }}
            >
              <Typography variant="caption"> New Conversation</Typography>
            </Button>
          </Box>
        )}
      </Box>
    </Grid>
  );
}

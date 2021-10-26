import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import axios from "axios";

import { useState, useEffect, useRef } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

let simulateTyping = async () => {
  let delay = new Promise(async function (resolve, reject) {
    try {
      let randomText = await axios.get("https://api.adviceslip.com/advice");
      setTimeout(() => resolve(randomText.data.slip.advice), 3000);
    } catch (err) {
      reject();
    }
  });

  let simulatedResponse = await delay;
  return simulatedResponse;
};

function History(props) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [props.chats]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="chat-box chatContainerScroll" id="chat-box">
      {props.chats.map((item) => {
        if (item.source === "server") {
          return (
            <li className="chat-right">
              <div className="chat-text">
                <Typography variant="subtitle2">{item.message}</Typography>
              </div>
            </li>
          );
        } else {
          return (
            <li className="chat-left">
              <span className="avatar-icon"></span>
              <div className="chat-text">
                <Typography variant="subtitle2" sx={{ maxWidth: "70%" }}>
                  {item.message}
                </Typography>
              </div>
            </li>
          );
        }
      })}

      {props.isTyping && <TypingAnimation />}

      <div ref={messagesEndRef}></div>
    </ul>
  );
}

export default function Chats(props) {
  let [isChatting, setChatting] = useState(false);
  let [userMessage, setUserMessage] = useState("");
  let [history, setChatHistory] = useState([]);
  let [isTyping, setTyping] = useState(false);
  let [trigger, triggerFetch] = useState(true);

  const replyToUser = () => {
    setChatHistory([...history, { source: "user", message: userMessage }]);
    setTyping(true);
    triggerFetch(!trigger);
    setUserMessage("");
  };

  useEffect(async () => {
    try {
      let randomData = await simulateTyping();
      setChatHistory([...history, { source: "server", message: randomData }]);
      //   updateScroll();
      console.log(history);
      setTyping(false);
      //   console.log(randomData);
    } catch (err) {
      console.log(err);
    }
  }, [trigger]);
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
            <div className="chat-container">
              <History chats={history} isTyping={isTyping} />
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
                onChange={(e) => setUserMessage(e.target.value)}
                value={userMessage}
                multiline
              />
              <Button variant="text" onClick={replyToUser}>
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

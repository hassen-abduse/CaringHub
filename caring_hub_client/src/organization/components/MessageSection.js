import { Button, IconButton } from "@material-ui/core";
import React from "react";
import MessageRounded from "@material-ui/icons/MessageRounded";

export default function MessageSection() {
  return (
    <div>
      <IconButton color="inherit">
        <MessageRounded fontSize="small" />
      </IconButton>
    </div>
  );
}

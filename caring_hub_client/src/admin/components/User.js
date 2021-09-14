import React from "react";
import { IconButton } from "@material-ui/core";

import { Avatar } from "@material-ui/core";

export default function User() {
  return (
    <div 
    style={{ display: "flex", justifyContent: "center" }}
    >
      <IconButton color="inherit">
        <Avatar fontSize="small" />
      </IconButton>
    </div>
  );
}

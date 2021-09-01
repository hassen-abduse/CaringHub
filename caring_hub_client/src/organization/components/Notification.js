import React from "react";
import { Button, IconButton } from "@material-ui/core";
import NotificationImportant from "@material-ui/icons/NotificationImportant";

export default function Notification() {
  return (
    <div>
      <IconButton color="inherit">
        <NotificationImportant fontSize="small" />
      </IconButton>
    </div>
  );
}

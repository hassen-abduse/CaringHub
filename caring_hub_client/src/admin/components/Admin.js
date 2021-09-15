import React from "react";
import { IconButton } from "@material-ui/core";

import ProfileImage from ".../../../src/assets/img/profile2.jpg";
export default function Admin() {
  return (
    <div>
      <IconButton color="inherit">
        <ProfileImage />
      </IconButton>
    </div>
  );
}

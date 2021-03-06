import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { highDetailSetList } from "../../../_mocks_/highsetlist";

const DetailSetting = () => {
  return (
    <>
      <Typography variant="h6">고액분리기 세부설정</Typography>
      <List>
        {highDetailSetList.map((detailset) => (
          <ListItem>
            <ListItemText primary={detailset.name} />
            <TextField
              size="small"
              sx={{ maxWidth: 54, marginRight: 1 }}
              value={detailset.value}
            />
            %
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DetailSetting;

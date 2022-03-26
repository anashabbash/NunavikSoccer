import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@material-ui/core";
import { CardActionArea } from "@mui/material";
import pic from "../pictures/pic3.jpg";

export default function EventCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" color="#004b9e" component="div">
            {props.title}
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              color="#004b9e"
              style={{ flex: 1, textAlign: "right" }}
            >
              Date:
            </Typography>
            <Typography
              variant="h6"
              color="#ff7522"
              style={{ flex: 4, paddingLeft: "1%" }}
            >
              {props.date}
            </Typography>
          </div>

          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              color="#004b9e"
              style={{ flex: 1, textAlign: "right" }}
            >
              Description:
            </Typography>
            <Typography
              variant="h6"
              color="#ff7522"
              style={{ flex: 4, paddingLeft: "1%" }}
            >
              {props.description}
            </Typography>
          </div>
        </CardContent>
        <CardActions> </CardActions>
      </CardActionArea>
    </Card>
  );
}

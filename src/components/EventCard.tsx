import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import media from "../images/back2.jpeg";

import EventModal from "./EventModal";

type Props = {
  event: string;
};

/**
 *
 * @return {React.Component}
 */
const EventCard = (props: Props) => {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const { t } = useTranslation();

  const handleLearnMore = () => {
    setShowLearnMore(!showLearnMore);
  };

  return (
    <>
      {showLearnMore ?? <EventModal />}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={media} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.event}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleLearnMore()}>
              {t("LEARN_MORE")}
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
};

export default EventCard;

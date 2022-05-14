import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Context } from "../context/GlobalContext";
import media from "../images/back2.jpeg";
import EventModal from "./EventModal";

type Event = {
  Id: number;
  EventTypeId: number;
  SubscribedUserIds: number[];
  Name: String;
  DescriptionEN: String;
  DescriptionDE: String;
  Start: String;
  End: String;
  Location: String;
};

/**
 *
 * @return {React.Component}
 */
const EventCard = (props: any) => {
  const { state, subscribeEvent } = useContext(Context);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const { t } = useTranslation();

  const handleLearnMore = () => {
    setShowLearnMore(!showLearnMore);
  };

  const handleSubscription = (eventId: number) => {
    subscribeEvent(state.authUser.Id, eventId);
  };

  return (
    <>
      {showLearnMore ?? <EventModal />}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={media} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.event.Name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.event.DescriptionEN}
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

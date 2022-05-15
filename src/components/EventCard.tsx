import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Context } from "../context/GlobalContext";
import media from "../images/back-img.jpg";

/**
 * @param {any} props
 * @return {React.Component}
 */
const EventCard: React.FC<any> = (props: any) => {
  const { state, subscribeEvent } = useContext(Context);
  const { t } = useTranslation();

  const handleSubscription = (eventId: number) => {
    subscribeEvent(state.authUser.Id, eventId);
    props.openSnackbar(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={media} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.event.Name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {state.language === "en"
                ? props.event.DescriptionEN
                : props.event.DescriptionDE}
            </Typography>
          </CardContent>
          <CardActions>
            {props.subscribed ? (
              <Typography variant="body2" color="text.secondary">
                {t("ALREADY_SUBS")}
              </Typography>
            ) : (
              <>
                {props.subscription && (
                  <Button
                    size="small"
                    onClick={(e) => handleSubscription(props.event.Id)}
                  >
                    {t("SUBSCRIBE")}
                  </Button>
                )}
              </>
            )}
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
};

export default EventCard;

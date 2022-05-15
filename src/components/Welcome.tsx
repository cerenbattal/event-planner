import * as React from "react";
import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { NavLink } from "react-router-dom";

/**
 *
 * @return {React.FC}
 */
const Welcome: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {t("WELCOME")}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              {t("WELCOME_DESC")}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button variant="contained">{t("START")}</Button>
              </NavLink>
            </Stack>
          </Container>
        </Box>
      </main>
    </>
  );
};
export default Welcome;

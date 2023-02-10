import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Celebration from "@mui/icons-material/Celebration";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import { useState } from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      linkText: "Email!",
      link: "mailto:jdp.pasternak@gmail.com",
    },
    {
      icon: faPhone,
      linkText: "Call!",
      link: "tel:1-808-216-3534",
    },
    {
      icon: faLinkedin,
      linkText: "Connect!",
      link: "https://linkedin.com/in/jakepasternak/",
    },
    {
      icon: faGithub,
      linkText: "Follow!",
      link: "https://github.com/jdpasternak/",
    },
  ];

  const [color, setColor] = useState([]);

  const party = () => {
    setColor(
      contactInfo.map(
        (i) =>
          `rgb(${Math.round(Math.random() * 255)},${Math.round(
            Math.random() * 255
          )},${Math.round(Math.random() * 255)})`
      )
    );
  };

  return (
    <Container>
      <Typography variant="h2" component="h2">
        Contact&nbsp;
        <Tooltip title="Make it a party!">
          <IconButton onClick={party}>
            <Celebration fontSize="large" />
          </IconButton>
        </Tooltip>
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {contactInfo.map((info, index) => (
          <Grid xs={12} md={3} item key={info.linkText}>
            <Link
              href={info.link}
              underline="none"
              target="_blank"
              rel="noreferrer"
            >
              <Card sx={{ "&:hover": { opacity: [0.9, 0.8, 0.7] } }}>
                <CardContent>
                  <Typography sx={{ textAlign: "center" }}>
                    <FontAwesomeIcon
                      icon={info.icon}
                      beat
                      size="2xl"
                      color={color[index]}
                    />
                  </Typography>
                  <Typography sx={{ textAlign: "center" }}>
                    {info.linkText}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contact;

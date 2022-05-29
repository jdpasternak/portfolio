import {
  Divider,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  ListItemIcon,
  Card,
  CardContent,
  Grid,
  CardMedia,
  CardActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Link,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ExpandMore,
  FormatItalic,
  FormatQuote,
  RequestQuote,
} from "@mui/icons-material";
import { getYearsAndMonthsTimeLapse } from "../../data/resumeData";
import { useState } from "react";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Resume = ({ summary, skills, certifications, education, work }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel, isExpanded);
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="row">
      <div className="col s12 m9 l10">
        <Container>
          <Typography variant="h4" component="h2">
            Summary
          </Typography>
          <Typography variant="p" component="p">
            {summary}
          </Typography>
          <Typography variant="h4" component="h2" mt={3}>
            Skills and Technologies
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="stretch"
            justifyContent="center"
            spacing={2}
          >
            {skills.map((skill) => (
              <>
                <Grid item xs={12} md={4} key={skill.group}>
                  <Card sx={{ maxHeight: 200, height: "100%" }}>
                    <CardContent>
                      <Divider key={skill.group} textAlign="left">
                        <Chip label={skill.group} />
                      </Divider>
                      <List>
                        {skill.skillsList.map((item) => (
                          <ListItem key={item.name}>
                            <ListItemIcon>
                              <FontAwesomeIcon icon={item.icon} />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            ))}
          </Grid>
          <Typography variant="h4" component="h2" mt={3}>
            Certifications
          </Typography>
          <Grid
            container
            spacing={2}
            flexDirection="row"
            justifyContent="center"
            alignItems="stretch"
          >
            {certifications.map((certification) => (
              <Grid item key={certification.name} xs={6} sm={4} md={3}>
                <Card sx={{ maxWidth: 200, height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={
                      certification.logo
                        ? certification.logo
                        : "portfolio/assets/images/image-coming-soon.jpg"
                    }
                    height={200}
                    alt={`${certification.name} logo`}
                  />
                  <CardContent>
                    <Typography>{certification.name}</Typography>
                  </CardContent>
                  {certification.link && (
                    <CardActions>
                      <a
                        style={{ textDecoration: "none" }}
                        href={certification.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button size="small">
                          <Typography>View on Credly</Typography>
                        </Button>
                      </a>
                    </CardActions>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h4" component="h2">
            Work Experience
          </Typography>
          {work.map((w) => (
            <Accordion
              expanded={expanded === w.title}
              onChange={handleChange(w.title)}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {w.title}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {w.company} • {w.location}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {getYearsAndMonthsTimeLapse(w.start, w.end)}
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button>
                  <Typography style={{ textDecoration: "none" }}>
                    <Link
                      underline="none"
                      href={w.companySite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Company Site
                    </Link>
                  </Typography>
                </Button>
              </AccordionActions>
            </Accordion>
          ))}
          <Typography variant="h4" component="h2">
            Education
          </Typography>
          {education.map((e) => (
            <Accordion
              open={expanded === e.degree + e.study}
              onChange={handleChange(e.degree + e.study)}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography
                  sx={{ width: { xs: "100%", md: "33%" }, flexShrink: 0 }}
                >
                  <Typography component="div" sx={{ fontStyle: "italic" }}>
                    {e.degree}
                  </Typography>
                  <Typography component="span">&nbsp;in&nbsp;</Typography>
                  <Typography component="span" sx={{ fontWeight: 700 }}>
                    {e.study}
                  </Typography>
                </Typography>
                <Typography
                  sx={{ color: "text.secondary" }}
                  display={{ xs: "none", md: "block" }}
                >
                  {e.school} • {e.graduation} • {e.location}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography display={{ xs: "block", md: "none" }}>
                  Completed in {e.graduation} at {e.school}.
                </Typography>
                <Typography variant="figure" component="figure">
                  <Typography>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    &nbsp;{e.description}&nbsp;
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </Typography>
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <Link href={e.degreeLink} underline="none">
                  <Button>{e.school}</Button>
                </Link>
              </AccordionActions>
            </Accordion>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Resume;

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
import { ExpandMore } from "@mui/icons-material";

import { getYearsAndMonthsTimeLapse } from "../../data/resumeData";

const Resume = ({ summary, skills, certifications, education, work }) => {
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
                  <Card>
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
            <Accordion expanded={false}>
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
        </Container>
      </div>
    </div>
  );
};

export default Resume;

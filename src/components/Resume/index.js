import { Container, Grid } from "@mui/material";
import { useState } from "react";
import Summary from "./Summary";
import SkillsAndTechnologies from "./SkillsAndTechnologies";
import Certifications from "./Certifications";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

const Resume = ({ summary, skills, certifications, education, work }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Summary summary={summary} />
          </Grid>
          <Grid item xs={12}>
            <SkillsAndTechnologies skills={skills} />
          </Grid>
          <Grid item xs={12}>
            <Certifications certifications={certifications} />
          </Grid>
          <Grid item xs={12}>
            <WorkExperience
              work={work}
              expanded={expanded}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Education
              education={education}
              expanded={expanded}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Resume;

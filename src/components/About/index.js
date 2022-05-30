import { Box, Container, Typography, Button } from "@mui/material";
import { Masonry } from "@mui/lab";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Typography variant="h2" component="h2">
        About Jake Pasternak
      </Typography>
      <Masonry columns={{ xs: 1, md: 2 }} spacing={2}>
        <Box
          component="img"
          sx={{ width: 200, borderRadius: "5%" }}
          alt="Jake Pasternak"
          src={`${process.env.PUBLIC_URL + "/assets/images/profile.JPG"}`}
        />
        <Typography textAlign="justify" mb={3} mt={3}>
          Jake Pasternak's introduction to computers and technology started at
          an early age when he took computer hardware and software, networking,
          and basic scripting courses in high school.
        </Typography>
        <Typography textAlign="justify" mb={3}>
          After graduating high school, Jake worked at an electrical distributor
          where his natural talent for computer support enabled him to serve as
          the on-site desktop technician. This sparked greater interest for
          computer technology and lead to Jake achieving his first
          certification: the CompTIA A+.
        </Typography>
        <Link
          to="/resume"
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          <Button>See Jake's Certifications</Button>
        </Link>
        <Typography textAlign="justify" mb={3}>
          Though he did not serve in the company's IT department in an official
          capacity, he did decide to pursue further education in the field. In
          May of 2020, Jake received an Associate in Science in Computer
          Security and Networking Technologies from the University of Hawaii
          Honolulu Community College.
        </Typography>
        <Link
          to="/resume#education"
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          <Button>See Jake's Education</Button>
        </Link>
        <Typography textAlign="justify" mb={3}>
          With his new education, Jake operated as a Project Coordinator for a
          large health insurance company in Hawaii where he became familiar with
          enterprise-level IT systems.
        </Typography>
        <Link
          to="/resume#work"
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          <Button>See Jake's Work Expereience</Button>
        </Link>
        <Typography textAlign="justify" mb={3}>
          Following his many years in infrastructure-related roles, Jake made a
          shift to pursue a career in software engineering by enrolling in a
          Bootcamp for coding and web development through UC Berkeley Extension.
        </Typography>
        <Typography textAlign="justify" mb={3}>
          Jake now lives in Tampa, Florida, working for JP Morgan Chase &amp;
          Co. as a Software Engineer.
        </Typography>
      </Masonry>
    </Container>
  );
};

export default About;

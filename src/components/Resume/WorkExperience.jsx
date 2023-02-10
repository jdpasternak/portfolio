import ExpandMore from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const WorkExperience = ({ work, expanded, handleChange }) => {
  return (
    <>
      <Typography variant="h4" component="h2" mb={1}>
        Work Experience
      </Typography>
      {work.map((w, i) => (
        <Accordion
          expanded={expanded === w.title}
          onChange={handleChange(w.title)}
          key={w.title}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography
              sx={{ width: { xs: "100%", md: "33%" }, flexShrink: 0 }}
            >
              {w.title}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                display: { xs: "none", md: "block" },
              }}
            >
              {w.company} • {w.location}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {w.company} • {w.location}
            </Typography>
            <Typography>
              {/* {getYearsAndMonthsTimeLapse(w.start, w.end)} */}
            </Typography>
          </AccordionDetails>
          <AccordionActions>
            <Button>
              <Typography>
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
    </>
  );
};

export default WorkExperience;

import ExpandMore from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Education = ({ education, expanded, handleChange }) => {
  return (
    <>
      <Typography variant="h4" component="h2" mb={1}>
        Education
      </Typography>
      {education.map((e) => (
        <Accordion
          expanded={expanded === e.degree + e.study}
          onChange={handleChange(e.degree + e.study)}
          key={e.degree + e.study}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography
              sx={{ width: { xs: "100%", md: "33%" }, flexShrink: 0 }}
              variant="div"
            >
              <Typography display={"block"} sx={{ fontStyle: "italic" }}>
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
            <Typography>
              <FontAwesomeIcon icon={faQuoteLeft} />
              &nbsp;{e.description}&nbsp;
              <FontAwesomeIcon icon={faQuoteRight} />
            </Typography>
          </AccordionDetails>
          <AccordionActions>
            <Link href={e.degreeLink} underline="none">
              <Button>{e.school}</Button>
            </Link>
          </AccordionActions>
        </Accordion>
      ))}
    </>
  );
};

export default Education;

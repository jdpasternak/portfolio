import Download from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const Summary = ({ summary }) => {
  return (
    <>
      <Typography variant="h4" component="h2" id="summary">
        Summary
        <Tooltip title="Download PDF" placement="right">
          <Link
            href={`${process.env.PUBLIC_URL}/assets/Jake%20Pasternak.pdf`}
            target="_blank"
            download
          >
            <IconButton>
              <Download />
            </IconButton>
          </Link>
        </Tooltip>
      </Typography>
      <Typography>{summary}</Typography>
    </>
  );
};

export default Summary;

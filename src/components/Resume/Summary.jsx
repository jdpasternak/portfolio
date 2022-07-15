import { Download } from "@mui/icons-material";
import { IconButton, Link, Tooltip, Typography } from "@mui/material";

const Summary = ({ summary }) => {
  return (
    <>
      <Typography variant="h4" component="h2">
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

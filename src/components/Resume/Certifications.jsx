import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Certifications = ({ certifications }) => {
  return (
    <>
      <Typography variant="h4" component="h2" mb={1} id="certifications">
        Certifications
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {certifications.map((certification) => (
          <Grid item key={certification.name} xs={6} sm={4} md={3} lg={2}>
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
    </>
  );
};

export default Certifications;

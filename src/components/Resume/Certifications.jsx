import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Certifications = ({ certifications }) => {
  return (
    <>
      <Typography variant="h4" component="h2" mb={1}>
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

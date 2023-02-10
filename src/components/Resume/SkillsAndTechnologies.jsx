import Masonry from "@mui/lab/Masonry";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsAndTechnologies = ({ skills }) => {
  return (
    <>
      <Typography variant="h4" component="h2" mb={1}>
        Skills and Technologies
      </Typography>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={1} mb={3}>
        {skills.map((skill) => (
          <Card sx={{ width: "100%" }} key={skill.group}>
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
        ))}
      </Masonry>
    </>
  );
};

export default SkillsAndTechnologies;

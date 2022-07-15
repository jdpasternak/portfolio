import { Masonry } from "@mui/lab";
import {
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
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

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import PostItem from "./PostItem";

const Post = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <List className={classes.root}>
          {[1, 2, 3].map(() => {
            return <PostItem />;
          })}
        </List>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default Post;

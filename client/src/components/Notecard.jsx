import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxWidth: '60vw',
  }
});

export default function Notecard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h1">Some Word</Typography>
        <hr />
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          hendrerit, eros sed scelerisque egestas, massa est vulputate ante,
          eget lacinia mi mauris eu diam. Donec gravida enim elit. Curabitur
          scelerisque odio odio, nec pretium felis tristique nec. Pellentesque
          dignissim, felis non pharetra consectetur, mi neque eleifend magna, at
          rhoncus magna tellus eget orci. Sed rutrum rhoncus ex, quis eleifend
          dui tincidunt sed. Cras scelerisque ut quam non pharetra. Integer
          rhoncus leo in ipsum vehicula lacinia.
        </Typography>
      </CardContent>
    </Card>
  );
}

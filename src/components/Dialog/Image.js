import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Slide,
  Typography,
  Zoom,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router'

import {
  getProblemFromGroupAction,
} from '../../redux/slices/problem'

const useStyles = makeStyles((theme) => ({
  description: {
    padding: '10px',
    align: 'left',
    textAlign: 'justify',
  },
  paper: {
    padding: theme.spacing(2),
    width: '100%',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    maxHeight: '400px',
    objectFit: 'contain',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '250px',
      maxHeight: '250px',
      width: '100%',
    }
  }
}));

function Index({
  open,
  handleClose,

  image: inputImage,
}) {
  const classes = useStyles();
  const { problemGroupId, problemId, submitId } = useParams();
  const [image, setImage] = React.useState(inputImage || '/logo.png');

  return (
    <Dialog maxWidth="xs" open={open} onClose={handleClose} PaperComponent='false'>
      <DialogTitle>
        <Grid container spacing={2} justify='center'>
          <img className={classes.image} alt='' src={process.env.PUBLIC_URL + image} />
        </Grid>
      </DialogTitle>
    </Dialog >
  );
}


export default Index;
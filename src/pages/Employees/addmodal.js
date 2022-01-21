import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from "@material-ui/icons/Add";
import Grid from '@material-ui/core/Grid';

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Label } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AddDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" className="BtnPrimary" onClick={handleClickOpen}>
        Add Item
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth={"md"}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Item
        </DialogTitle>
        <DialogContent dividers>
        <form noValidate autoComplete="off">
            <Grid container spacing={1}>
              <Grid item md={4}>
                  <Grid container spacing={1}>
                    <Grid item md={8}>
                      <TextField  size="small" id="outlined-basic" label="Payment Mode" variant="outlined" />
                    </Grid>
                    <Grid item md={4}>
                      <Button className="BtnPrimary" size="small">
                        <AddIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              <Grid item md={3}>
                <TextField  size="small" id="outlined-basic" label="Amount" variant="outlined" />
              </Grid>
              <Grid item md={4}>
                <TextField  size="small" id="outlined-basic" label="Remarks" variant="outlined" />
              </Grid>
              <Grid item md={1}>
                <Button className="BtnPrimary">
                  <AddIcon />Add
                </Button>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1}>
              <Grid item xs={3} md={7}>
              </Grid>
              <Grid item xs={9} md={5}>
                <Grid container spacing={1}>
                  <Grid item xs={5}>
                    <Typography className="textBold">Sub Total:</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField  size="small" variant="outlined" />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography className="textBold">Total Discount:</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField  size="small" variant="outlined" />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography className="textBold">Total Tax:</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField  size="small" variant="outlined" />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography className="textBold">Additional Charge:</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField  size="small" variant="outlined" />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography className="textBold">Grand Total:</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <TextField size="small" variant="outlined" />
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

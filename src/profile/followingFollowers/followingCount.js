import React from 'react';
import Following from './following';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

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
}))(MuiDialogContent);

const FollowingCount = ({followingNumber, handleOnUnfollow, followingResult, user }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Box display="flex" flexDirection="column" p={1} m={1}>
            <Typography onClick={handleClickOpen}>FOLLOWING</Typography>
            <Typography onClick={handleClickOpen} variant="overline">{followingNumber}</Typography>
        </Box>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Following
            </DialogTitle>
            <DialogContent dividers>
                <Following 
                    followingResult={followingResult}
                    user={user} 
                    handleOnUnfollow={handleOnUnfollow}
                />
            </DialogContent>
        </Dialog>
    </div>
  );
}

export default FollowingCount;

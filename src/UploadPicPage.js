import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    margin: '10px',
    width: '10px'
  },
  input: {
    display: 'none',
  },
  uploadPicPage: {
    width: '600px'
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  centered: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: '10px'
  },
});

class DisplayResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasUploaded: false
    };
  }

  onChange = () => {
    this.setState({ hasUploaded: true });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.uploadPicPage}>
          {!this.state.hasUploaded ? this.renderBeforeUpload() : this.renderAfterUpload()}
        </div>
      </div>
    );
  }

  renderBeforeUpload() {
    const { classes } = this.props;

    return (<Paper >
    <Typography variant="h5" component="h3" className={classes.centered}>
      Choose photo you would like to convert 
    </Typography>
    <input
      accept="image/*"
      className={classes.input}
      id="raised-button-file"
      multiple
      type="file"
      onChange={this.onChange}
    />
    <div className={classes.centered}>
    <label htmlFor="raised-button-file">
       <Button component="span" variant="contained" className={classes.button}>
          unselect
       </Button>
    </label>
    </div>
  </Paper>);
  }

  renderAfterUpload() {
    const { classes } = this.props;

    return (<Paper >
    <Typography variant="h5" component="h3" className={classes.centered}>
      Choose photo you would like to convert 
    </Typography>
    <input
      accept="image/*"
      className={classes.input}
      id="raised-button-file"
      multiple
      type="file"
      onChange={this.onChange}
    />
    <div className={classes.centered}>
    <label htmlFor="raised-button-file">
       <Button component="span" variant="contained" className={classes.button}>
          unselect
       </Button>
    </label>
    </div>
    </Paper>);
  }
}

export default withStyles(styles)(DisplayResultPage);
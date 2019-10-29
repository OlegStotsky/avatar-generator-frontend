import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Image from "material-ui-image";
import ApiAdapter from "./adapters/ApiAdapter";

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
      targetPicWasLoaded: false,
      isUploading: true,
      isSubmitting: false,
      file: null,
      generatedAvatar: null
    };
  }

  onInputChange = (event) => {
    const { files } = event.target;
    const filePreview = URL.createObjectURL(files[0]);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = () => {
      this.setState({
        filePreview,
        file: fileReader.result
      });
    }
    this.setState({ targetPicWasLoaded: true });
  }
  
  startAgain = () => {
    this.setState({ hasUploaded: false });
  }

  handleUpload = async () => {
    this.setState({ isSubmitting: true });
    console.log("submitting");
    console.log({ file: this.state.file });
    const response = await ApiAdapter.uploadProfilePicture(this.state.file);
    this.setState({ isUploading: false, isSubmitting: false, generatedAvatar: `data:image/png;base64,${response}` });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.uploadPicPage}>
          {this.state.isUploading ? this.renderBeforeUpload() : this.renderAfterUpload()}
        </div>
      </div>
    );
  }

  renderBeforeUpload() {
    const { classes } = this.props;

    return (
      <Paper >
        {this.state.file ? (<div><Image src={this.state.filePreview} /></div>) : 
        (<Typography variant="h5" component="h3" className={classes.centered}>
          Choose photo you would like to convert 
        </Typography>)}
        <input
          accept="image/*"
          className={classes.input}
          id="raised-button-file"
          multiple
          type="file"
          onChange={this.onInputChange}
        />
        <div className={classes.centered}>
        <label htmlFor="raised-button-file">
          <Button component="span" variant="contained" className={classes.button}>
              select photo
          </Button>
        </label>
          { this.state.targetPicWasLoaded &&  <Button variant="contained" className={classes.button} onClick={this.handleUpload}>
              upload
          </Button>}
        </div>
    </Paper>
    );
  }

  renderAfterUpload() {
    const { classes } = this.props;

    return (
    <Paper >
      <Typography variant="h5" component="h3" className={classes.centered}>
        Here is your avatar 
      </Typography>
      <div>
        <Image src={this.state.generatedAvatar} />
      </div>
      <div className={classes.centered}>
        <Button variant="contained" className={classes.button} onClick={this.startAgain}>
            Upload Another One
        </Button>
      </div>
    </Paper>);
  }
}

export default withStyles(styles)(DisplayResultPage);
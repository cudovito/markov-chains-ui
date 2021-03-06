import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import { CheckboxProps } from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Feedback = () => {
  const classes = useStyles();

  const [checkedA, setCheckedA] = useState(false);
  const [checkedB, setCheckedB] = useState(false);
  const [checkedC, setCheckedC] = useState(false);

  const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedA(event.target.checked);
  };
  const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedB(event.target.checked);
  };
  const handleChangeC = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedC(event.target.checked);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Feedback
          </Typography>
          <form className={classes.form} noValidate>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedA}
                    onChange={handleChangeA}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="API is taking too long"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedB}
                    onChange={handleChangeB}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Results are not correct"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedC}
                    onChange={handleChangeC}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="others"
              />
            </FormGroup>
            {checkedC ? (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="other"
                    label="Other"
                    name="other"
                  />
                </Grid>
              </Grid>
            ) : (
              <></>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;

import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const submitHandler = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data.token));
        setError(data.error);
        if (data.token) {
          history.push("/home");
        }
      });
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "#c4f2ef", height: "100vh" }}
    >
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        style={{
          height: "80vh",
          width: "35%",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "5px 5px 5px -2px rgba(0,0,0,0.36)",
        }}
      >
        <Grid item style={{ backgroundColor: "#6d70ed", borderRadius: "3px" }}>
          <Typography
            variant="h5"
            style={{ color: "white", padding: "5px 10px" }}
          >
            LOGO
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Divider
                style={{ width: "100px", height: "1px", marginRight: "5px" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" style={{ color: "#848785" }}>
                Login using email
              </Typography>
            </Grid>
            <Grid item>
              <Divider
                style={{ width: "100px", height: "1px", marginLeft: "5px" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" justifyContent="flex-start">
            <Grid item style={{ marginBottom: "10%" }}>
              <Grid container direction="column">
                <Grid item style={{ marginBottom: "8px" }}>
                  <label style={{ color: "#848785" }}>email address</label>
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="eg: anshu@gmail.com"
                    variant="outlined"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item style={{ marginBottom: "8px" }}>
                  <label style={{ color: "#848785" }}>Enter Password</label>
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="*******"
                    variant="outlined"
                    type="password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "10%" }}>
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  backgroundColor: "#6d70ed",
                  color: "white",
                }}
                onClick={submitHandler}
              >
                Log in
              </Button>
            </Grid>
            <Grid
              item
              style={{ marginTop: "10%", color: "red", textAlign: "center" }}
            >
              {error === "" ? null : <Typography>{error}</Typography>}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;

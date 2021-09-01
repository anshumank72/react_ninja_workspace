import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Pagination from "@material-ui/lab/Pagination";

const Home = () => {
  const [datarr, setDatarr] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((result) => {
        setDatarr(result.data);
      });
  }, [page]);
  return (
    <Grid container direction="column">
      <Grid item style={{ marginBottom: "2.5rem" }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              LOGO
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          {datarr.map((item) => {
            return (
              <Grid item key={item.id}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      image={`${item.avatar}`}
                      title="image of person"
                      style={{ height: "15rem", width: "13rem" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {`${item.first_name} ${item.last_name}`}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.email}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item style={{ margin: "5rem auto" }}>
        <Pagination
          count={2}
          color="primary"
          size="large"
          defaultPage={page}
          onChange={(e, value) => setPage(value)}
          shape="rounded"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};
export default Home;

import React from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function Login() {
  document.title = "Login | User Management";

  return (
    <Container
      maxWidth="xs"
      sx={{ marginTop: { xs: "50px", lg: "150px" }, borderRadius: "10px" }}
    >
      <Grid
        container
        spacing={3}
        sx={{ background: "white", borderRadius: "5px" }}
      >
        <Grid item xs={12} sx={{ padding: "24px" }}>
          <Typography variant="h4" color="secondary" align="center">
            LOGIN
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ padding: "24px" }}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="secondary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center">
                  Don't have an account? <Link to="/register">Register</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

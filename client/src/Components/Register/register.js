import React from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function register() {
  document.title = "Register | User Management";
  return (
    <Container maxWidth="xs" sx={{ marginTop: { xs: "50px", lg: "150px" } }}>
      <Grid
        container
        spacing={3}
        sx={{ background: "white", borderRadius: "5px" }}
      >
        <Grid item xs={12} sx={{ padding: "24px" }}>
          <Typography variant="h4" color="secondary" align="center">
            REGISTER
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ padding: "24px" }}>
          <form method="post" action="http://127.0.0.1:8989/register">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="username"
                  name="username"
                  size="small"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  size="small"
                  type="email"
                  variant="outlined"
                  required
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
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="contact"
                  size="small"
                  variant="outlined"
                  required
                  inputProps={{ maxLength: 10, type: "tel" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="secondary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography align="center">
                  Already have an account? <Link to="/login">Login</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

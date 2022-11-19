import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";

export const ResourceRequisition = () => {
  return (
    <div className="body">
      <div className="imagecontainer">
        <img
          className="image"
          src="https://www.wallpaperflare.com/static/9/941/297/architecture-buildings-city-city-lights-wallpaper-preview.jpg"
          alt="BirlaSoft"
        />
      </div>
      <div className="formcontainer">
        <div className="form">
          <Grid container>
            <Grid item xs={4.5}></Grid>
            <Grid item xs={3}>
              <h2>Resource Requirement</h2>
            </Grid>
            <Grid item xs={1.5}></Grid>
            <Grid item xs={3}>
              <img
                className="logoimg"
                src="https://hiringsolutions.blob.core.windows.net/resumebank/cad925b0-5d59-4942-af4b-fda3948c3024/OrgLogo/birlasoft_owler_20170913_055353_original.png"
                alt="BirlaSoft Logo"
              />
            </Grid>
            <Grid item xs={10}></Grid>
            <Grid item xs={1}>
              <Button variant="contained" color="secondary">
                New
              </Button>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <br />
          <br />
          <Grid container>
            <Grid item xs={4.5}></Grid>
            <Grid item xs={3}>
              {" "}
              <TextField
                label="Search Request Number"
                variant="outlined"
                type="text"
                required
              />
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" color="primary">
                Search
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>

          <form action="" className="form-main">
            <Grid container>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={1.5}>
                <span>Created BY:-</span>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Employee ID"
                  variant="outlined"
                  type="text"
                  required
                />
              </Grid>
              <Grid item xs={2.5}>
                <TextField
                  label="Employee Name"
                  variant="outlined"
                  type="text"
                  required
                />
              </Grid>
              <Grid item xs={1.5}></Grid>
              <Grid item xs={1.5}>
                <Typography variant="h6">Created on:-</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField variant="outlined" type="date" required />
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={1.5}>
                <span>Hiring Type:-</span>
              </Grid>
              <Grid item xs={2}>
                <Select displayEmpty fullWidth="100%" label="Age">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>C2C</MenuItem>
                  <MenuItem value={20}>FTC</MenuItem>
                  <MenuItem value={30}>FTE</MenuItem>
                  <MenuItem value={30}>Pro-Active</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1.5}>
                <span>Position:-</span>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  variant="outlined"
                  label="Enter Position"
                  type="text"
                  required
                />
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={1.5}>
                <span>Education qualification:-</span>
              </Grid>
              <Grid item xs={2.5}>
                <Select displayEmpty fullWidth="100%" label="Age">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2.5}>
                <Select displayEmpty fullWidth="100%" label="Age">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1.5}>
                <span>Year Of Exp:-</span>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  variant="outlined"
                  label="Year of Exp"
                  type="text"
                  required
                />
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={1.5}>
                <span>Technology Knowledge Req:-</span>
              </Grid>
              <Grid item xs={2.5}>
                <Select displayEmpty fullWidth="100%" label="Age">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2.5}>
                <Select displayEmpty fullWidth="100%" label="Age">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1.5}>
                <span>Required By:-</span>
              </Grid>
              <Grid item xs={2}>
                <Select displayEmpty fullWidth="100%">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={1.5}>
                <span>Work Location:-</span>
              </Grid>
              <Grid item xs={2.5}>
                <Select displayEmpty fullWidth="100%" label="Country">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2.5}>
                <Select displayEmpty fullWidth="100%" label="City">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1.5}>
                <span>Ready to work in shift:-</span>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  varient="outlined"
                  label="Enter Yes or No"
                  required
                ></TextField>
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
              <Grid item xs={0.5}></Grid>{" "}
              <Grid item xs={1.5}>
                <span>Type Of resource:-</span>
              </Grid>
              <Grid item xs={2.5}>
                <Select displayEmpty fullWidth="100%" label="Country">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Front-Enf</MenuItem>
                  <MenuItem value={20}>Back-End</MenuItem>
                  <MenuItem value={30}>Full Stack</MenuItem>
                  <MenuItem value={30}>UI Designer</MenuItem>
                  <MenuItem value={30}>Architet</MenuItem>
                  <MenuItem value={30}>Business Analysts</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2.5}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1.5}>
                <span>Technology:-</span>
              </Grid>
              <Grid item xs={2}>
                <Select displayEmpty fullWidth="100%" label="Country">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={1.5}>
                <span>Domain Knowledge:-</span>
              </Grid>
              <Grid item xs={2.5}>
                <Select fullWidth="100%" label="Country">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Banking</MenuItem>
                  <MenuItem value={20}>Insurance</MenuItem>
                  <MenuItem value={30}>IOT</MenuItem>
                  <MenuItem value={30}>Manufacturing</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2.5}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1.5}>
                <span>Ready to Relocate:-</span>
              </Grid>
              <Grid item xs={1}>
                <label htmlFor="">Yes</label>
                <input type="radio" />
              </Grid>
              <Grid item xs={1}>
                <label htmlFor="">No</label>
                <input type="radio" />
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

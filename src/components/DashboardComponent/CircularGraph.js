import React from "react";
import {
  StyledBorderContainer,
  StyledColorContainer
} from "../../assets/styles/ContentStyle";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import { useStyles } from "../../assets/styles/commonStyles";
import circularGraph from "../../assets/img/circular.jpg";
import { salesPopCategories } from "../../contants/staticLists";

function CircularGraph() {
  const classes = useStyles();
  return (
    <>
      <div style={{ margin: "10px" }}>
        <StyledBorderContainer container spacing={0} sx={{ height: '500px', width: 'auto'}}>
          <Grid item xs={12} className= { classes.startContainer }>
            <Typography
              className={classes.headText}
              sx={{ fontWeight: "700", color: "#A9A9A9" }}
            >
              Popular Categories
            </Typography>
          </Grid>
          <StyledColorContainer item xs={12} mt={2} >
            {salesPopCategories.map((item, index) => (
              <div key={index} className={classes.rowStyle}>
                <Box
                  sx={{
                    background: item.color,
                  }}
                  className= {classes.styleColor}
                ></Box>
                <Typography>{item.name}</Typography>
              </div>
            ))}
          </StyledColorContainer>
          <Grid item xs={12} mt={2}>
            <img src={circularGraph} style = {{ height: '250px'}} alt="graph" />
          </Grid>
        </StyledBorderContainer>
      </div>
    </>
  );
}

export default CircularGraph;

import React from "react";
import {
  StyledBorderContainer,
  StyledBox,
  StyledGraphImg,
  StyledColorContainer
} from "../../assets/styles/ContentStyle";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import { useStyles } from "../../assets/styles/commonStyles";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import curveGraph from "../../assets/img/curveGraph.png";
import { salesItemList } from "../../contants/staticLists";

function GraphComponent({selectedItemIndex}) {
  const classes = useStyles();
  return (
    <>
      <div style={{ margin: "10px" }}>
        <StyledBorderContainer container spacing={0} sx={{ height: '500px', width: 'auto'}}>
          <Grid item xs={12} className={classes.spaceBetweenContainer}>
            <Typography
              className={classes.headText}
              sx={{ fontWeight: "700", color: "#A9A9A9" }}
            >
              { selectedItemIndex === 0 ? 'Sales Performance' : selectedItemIndex === 1 ? 'Income Graph' :
              selectedItemIndex === 2 ? 'Session Performance': 'Conversion rate'}
            </Typography>
            <StyledBox>
              <SettingsOutlinedIcon />
            </StyledBox>
          </Grid>
          <StyledColorContainer item xs={12} mt={2} >
            {salesItemList.map((item, index) => (
              <div key={index} className={classes.rowStyle}>
                <Box
                 className= {classes.styleColor}
                  sx={{
                    background: item.color,
                  }}
                ></Box>
                <Typography>{item.name}</Typography>
              </div>
            ))}
          </StyledColorContainer>
          <Grid item xs={12} mt={5}>
            <StyledGraphImg src={curveGraph} alt="graph" />
          </Grid>
        </StyledBorderContainer>
      </div>
    </>
  );
}

export default GraphComponent;

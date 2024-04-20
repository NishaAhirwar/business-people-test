import React from "react";
import { StyledMainContainer } from "../../assets/styles/ContentStyle";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useStyles } from "../../assets/styles/commonStyles";

function DataBox({ dataValue, index, selectedItemIndex }) {
  const classes = useStyles();
  return (
    <>
      <div style={{ margin: "10px" }}>
        <StyledMainContainer container spacing={0} sx={{border: index === selectedItemIndex ? `2px solid ${dataValue.background}` :''}}>
          <Grid item xs={8} >
            <Typography className={classes.font16} >{dataValue.head}</Typography>
            <p className={`${classes.startContainer} ${classes.divideSpace}`}>
              <Typography className={`${classes.headText}`} style={{color: dataValue.background}}>
                {dataValue.dataSet}
              </Typography>
              <Typography className={`${classes.subText}`}>
                {dataValue.subData}
              </Typography>
            </p>
          </Grid>
          <Grid item xs={4}>
            <div> {index === selectedItemIndex ? dataValue.img2 : dataValue.img1} </div>
          </Grid>
        </StyledMainContainer>
      </div>
    </>
  );
}

export default DataBox;

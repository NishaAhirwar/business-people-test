import React, { useState } from "react";
import { Grid } from "@mui/material";
import DataBox from "./Databox";
import { data } from "../../contants/staticLists";
import GraphComponent from "./GraphComponent";
import CircularGraph from "./CircularGraph";
import Tables from "./Table";
import AddUser from "./AddUser";

function Content() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)

    const handleSelection = (index) => {
         setSelectedItemIndex(index)
    }
  return (
    <>
      <div>
        <Grid
          container
          spacing={0}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {data.map((item, key) => (
            <Grid key = {key} item lg={3} md={6} xs={6} onClick={()=>handleSelection(key)}>
              <DataBox dataValue = {item}
              selectedItemIndex = {selectedItemIndex}
              index = {key} />
            </Grid>
          ))}
          <Grid item xs={12} md={8} lg={8}><GraphComponent
          selectedItemIndex = {selectedItemIndex} /></Grid>
          <Grid item xs={12} md={4} lg={4}><CircularGraph /></Grid>
          <Grid item xs={12} md={12} lg={12}><Tables /></Grid>
          <Grid item xs={12} md={12} lg={12}><AddUser /></Grid>
        </Grid>
      </div>
    </>
  );
}

export default Content;

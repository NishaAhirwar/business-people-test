import React, { useState } from "react";
import {
  StyledBorderContainer,
  StyledBox,
  ContainerStyle,
} from "../../assets/styles/ContentStyle";
import Typography from "@mui/material/Typography";
import { Grid, Pagination} from "@mui/material";
import { useStyles } from "../../assets/styles/commonStyles";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {tableField } from "../../contants/staticLists";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const tableData = [
  {
    name: "Nisha",
    order: "19 May, 2021 ",
    phone: "+91-9898765543",
    location: "India",
    registered: "yes",
  },
  {
    name: "Isha",
    order: "19 May, 2021 ",
    phone: "+91-9898765543",
    location: "USA",
    registered: "no",
  },
  {
    name: "Tisha",
    order: "19 May, 2021 ",
    phone: "+91-9898765543",
    location: "Canada",
    registered: "yes",
  },
  {
    name: "Vishal",
    order: "19 May, 2021 ",
    phone: "+91-9898765543",
    location: "India",
    registered: "no",
  },  {
    name: "Nishchay",
    order: "19 May, 2021 ",
    phone: "+91-9898765543",
    location: "Canada",
    registered: "no",
  },  {
    name: "Nihal",
    order: "19 May, 2021 ",
    phone: "+91-9898765543",
    location: "USA",
    registered: "yes",
  },  {
    name: "Utakarsh",
    order: "19 May, 2021 ",
    phone: "+91-9898765543",
    location: "Canada",
    registered: "no",
  },  {
    name: "Utpreksha",
    order: "19 May, 2021 ",
    phone: "+91-9898765543",
    location: "USA",
    registered: "yes",
  },  {
    name: "Gajendra",
    order: "18 May, 2021 ",
    phone: "+91-9898765543",
    location: "Canada",
    registered: "yes",
  },  {
    name: "Harsh",
    order: "15 May, 2021 ",
    phone: "+91-9898765543",
    location: "Australia",
    registered: "yes",
  },  {
    name: "Pooja",
    order: "20 May, 2021 ",
    phone: "+91-9898765543",
    location: "India",
    registered: "yes",
  },  {
    name: "Anamika",
    order: "19 June, 2021 ",
    phone: "+91-9898765543",
    location: "Australia",
    registered: "no",
  },  {
    name: "Antima",
    order: "19 May, 2021 ",
    phone: "+91-9898765543",
    location: "India",
    registered: "yes",
  },  {
    name: "Monika",
    order: "19 Jun, 2021 ",
    phone: "+91-9898765543",
    location: "Australia",
    registered: "yes",
  },  {
    name: "Guru",
    order: "19 May, 2021 ",
    phone: "+91-9898765543",
    location: "India",
    registered: "yes",
  },  {
    name: "Kamini",
    order: "19 Jun, 2021 ",
    phone: "+91-9898765543",
    location: "Australia",
    registered: "yes",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


function Tables() {
  const classes = useStyles();
  const [page, setPage] = useState(1)

  const renderTableCell = (key,item, index) => {
    console.log(item[key])
    return item[key];
  }
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(page)
  };

  return (
    <>
      <div style={{ margin: "10px" }}>
        <StyledBorderContainer container spacing={0}>
          <Grid item xs={12} className={classes.spaceBetweenContainer}>
            <Typography
              className={classes.headText}
              sx={{ fontWeight: "700", color: "#A9A9A9" }}
            >
              Recent Customers
            </Typography>
            <StyledBox>
              <SettingsOutlinedIcon />
            </StyledBox>
          </Grid>
          <Grid item xs={12} mt={2}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <StyledTableRow>
                    {Object.values(tableField).map((heading, index) => (
                      <StyledTableCell key={index}>
                        {heading}&nbsp;
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {tableData.slice((page - 1) * 5, page * 5).map((item, index) => (
                    <React.Fragment key={index}>
                      <StyledTableRow>
                        {Object.keys(tableField).map((key, i) => (
                          <StyledTableCell key={i}>
                            {renderTableCell(key, item, index)}
                          </StyledTableCell>
                        ))}
                      </StyledTableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
          {!!tableData && tableData?.length > 5 &&
      <ContainerStyle>
        <Pagination
          count={Math.ceil(tableData.length / 5)}
          page={page}
          showFirstButton
          showLastButton
          onChange={handleChangePage}
        />
      </ContainerStyle>}
          </Grid>
        </StyledBorderContainer>
      </div>
    </>
  );
}

export default Tables;

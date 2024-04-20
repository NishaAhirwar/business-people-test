import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

export const data = [
  {
    head: "Total Sales",
    img1: <WorkRoundedIcon fontSize="large" />,
    img2: <WorkOutlineIcon fontSize="large" />,
    dataSet: 21324,
    subData: "+2013",
    background: "#FA7070",
  },
  {
    head: "Total Income",
    img1: <MonetizationOnRoundedIcon fontSize="large" />,
    img2: <MonetizationOnOutlinedIcon fontSize="large" />,
    dataSet: "$221324",
    subData: "+$2201",
    background: "#A1C398",
  },
  {
    head: "Total Sessions",
    img1: <PeopleAltRoundedIcon fontSize="large" />,
    img2: <PeopleAltOutlinedIcon fontSize="large" />,
    dataSet: 16703,
    subData: "+3391",
    background: "#7BC9FF",
  },
  {
    head: "Conversion Rate",
    img1: <Person2RoundedIcon fontSize="large" />,
    img2: <Person2OutlinedIcon fontSize="large" />,
    dataSet: "12.8%",
    subData: "-1.22%",
    background: "#D895DA",
  },
];

export const salesItemList = [
  { name: 'Laptop', color: "#E72929" },
  { name: 'Headset', color: "#A1C398" },
  { name: 'Monitor', color: "#7BC9FF" },
  { name: 'Phone', color: "#1B3C73" },
  { name: 'Mouse', color: "#FDE767" },
];

export const salesPopCategories =[
{ name: 'Electronics', color: "#E72929" },
{ name: 'Furniture', color: "#A1C398" },
{ name: 'Toys', color: "#7BC9FF" },]

export const tableField = {
  name: 'Name',
  order: 'OrderList',
  phone: 'Phone Number', 
  location: 'Location',
  registered: 'Registered', 
}

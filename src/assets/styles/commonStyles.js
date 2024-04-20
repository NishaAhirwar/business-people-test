import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  font16: {
    fontSize: "16px !important",
  },
  font14: {
    fontSize: "14px !important",
    color: "#B4B4B3",
  },
  startContainer : {
    display: 'flex',
    justifyContent: 'flex-start !important',
    flexDirection: 'column !important',
    alignItems: 'flex-start !important',
    margin: 0
  },
  spaceBetweenContainer: {
    display: 'flex',
    justifyContent: 'space-between !important',
    // flexDirection: 'column !important',
  },

  styleMargin: {
    margin: " 0 10px",
    "@media (max-width: 640px )": {
      margin: " 0 5px",
    },
  },
  userContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    "@media (max-width: 640px )": {
      display: "none !important",
    },
  },
  headText: {
    fontSize: '22px !important',
    lineHeight: '1 !important',
  },
  subText: {
    fontSize: '12px !important',
    color: 'gray'
  },
  divideSpace: {
    marginTop: '10% !important',
  },
  rowStyle : {
    display: 'flex',
    flexDirection: 'row'
  },
  styleColor: {                    
  height: "20px",
  width: "20px",
  margin: "3px",},

  userImage : {
    width: '180px',
    height: '180px',
    borderRadius: '16px',
    padding: '2px',
    border: '2px solid #DDDDDD'
  }

}));

export { useStyles };

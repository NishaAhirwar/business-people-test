import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const StyledMainContainer = styled(Grid)`
display: flex;
border-radius: 8px;
padding: 10px;
cursor: pointer;
border: 1px solid rgba(224, 221, 224, 1);
-webkit-box-shadow: 6px -5px 5px 0px rgba(224, 221, 224, 1);
-moz-box-shadow: 6px -5px 5px 0px rgba(224, 221, 224, 1);
box-shadow: 6px -5px 5px 0px rgba(224, 221, 224, 1);
& .MuiGrid-item {
    & > div {
        display: flex;
        align-items: center !important;
        justify-content: flex-end;
        margin: 10% !important;        
    };
    & .MuiTypography-root {
        display: flex;
        justify-content: flex-start !important;
        font-weight: 600;
        line-height: 2;
        position: relative;       
    };  
};
};
`;

export const StyledBorderContainer = styled(Grid)`
border-radius: 8px;
padding: 20px;
border: 1px solid rgba(224, 221, 224, 1);
-webkit-box-shadow: 6px -5px 5px 0px rgba(224, 221, 224, 1);
-moz-box-shadow: 6px -5px 5px 0px rgba(224, 221, 224, 1);
box-shadow: 6px -5px 5px 0px rgba(224, 221, 224, 1);
};`;

export const StyledBox = styled(Box)`
display: flex;
align-items: center;
border-radius: 8px;
padding: 5px !important;
cursor: pointer;
background: #EEEEEE;
};`;

export const StyledGraphImg = styled.img`
height: auto;
width: 100%;`;

export const StyledColorContainer = styled(Grid)`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;

export const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 48px;
  color: #fff;
  background: #176B87 !important;
  border-radius: 8px;
  &:hover {
    background: #64CCC5 !important;
  }
`;


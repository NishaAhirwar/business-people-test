import styled from 'styled-components';
import Grid from "@mui/material/Grid";

export const StyledGrid = styled(Grid)`
display: flex;
justify-content: space-between;
& .MuiGrid-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    &.allignClassRight {
        justify-content: flex-end;
    };
};
`;
export const StylesImgContainer = styled.div`
height: 32px;
width: 32px;
border-radius: 100%;
border: 2px solid white;
img {
    height: 28px;
    width: 28px;
    border-radius: 100%;
}`;
import React, { useRef, useState } from "react";
import {
  StyledBorderContainer,
  StyledBox,
  StyledButton,
} from "../../assets/styles/ContentStyle";
import Typography from "@mui/material/Typography";
import {
  Grid,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useStyles } from "../../assets/styles/commonStyles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Formik } from "formik";
import { object, string } from "yup";
import userImage from '../../assets/img/userImage.png'
import CustomizedDialogs from "../Dialog";

export const userSchema = object({
username: string()
    .typeError(" saturation level must be a number")
    .min(0, "username must be greater than or equal to 0")
    .max(100, "username must be less than or equal to 100")
    .required("username is required"),
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string()
    .email("Please enter a valid email address")
    .matches(
      /^[a-zA-Z0-9+_.-]+@[_a-zA-Z0-9-]+(?:\.[_a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/i,
      "Invalid email"
    )
    .required("Email is required"),
});

function AddUser() {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState('')
  const inputRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  const initialValues = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    role: "a",
  };

  const handleSubmit = (values, {resetForm}) => {
    setLoading(true);
    setTimeout(() => {
        resetForm()
        setLoading(false)
        setOpen(true)
    }, 3000);
    resetForm()
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }

  }

  return (
    <>
      <div style={{ margin: "10px" }}>
        <StyledBorderContainer container spacing={0}>
          <Grid item xs={12} className={classes.spaceBetweenContainer} ml={12} mr={10} mt={5} mb={2}>
            <Typography
              className={classes.headText}
              sx={{ fontWeight: "700", color: "#A9A9A9" }}
            >
              Add User
            </Typography>
            <StyledBox>
              <CloseOutlinedIcon />
            </StyledBox>
          </Grid>
          <Grid item xs={8} pl={4} mb={4}>
            <Typography sx={{fontSize:'16px', fontWeight: 600}}>User Details</Typography>
          </Grid>
          <Grid item xs={4} mb={4}>
            <Typography sx={{fontSize:'16px', fontWeight: 600}}>Profile Picture</Typography>
          </Grid>
          <Grid item xs={12} >
            <Grid container spacing={0}>
              <Grid item xs={8} >
              <Formik
                initialValues={initialValues}
                validationSchema={userSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({
                  handleChange,
                  values,
                  errors,
                  handleSubmit,
                  setFieldValue,
                  validateField,
                  resetForm
                }) => {

                    const handleSelect = (e) => {
                        setFieldValue('role', e.target.value)
                    }

                  return (
                    <Formik>
                      <Grid
                        container
                        spacing={2}
                        sx={{ borderRight: "1px solid #C7C8CC", display: 'flex', justifyContent: 'center', padding: '0 40px '}}
                      >
                        <Grid item xs={6}>
                          <TextField
                            sx={{ minWidth: "100%" }}
                            name="username"
                            label={"Enter username"}
                            type="string"
                            onChange={(e) => {
                                handleChange("username")(e);
                              }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl sx={{ minWidth: "100%" }}>
                            <InputLabel id="demo-simple-select-helper-label">
                              Role
                            </InputLabel>
                            {console.log(values)}
                            <Select
                              name ='role'
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="Age"
                              onChange={handleSelect}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value='Software Engineer'>Software Engineer</MenuItem>
                              <MenuItem value='Automation Tester'>Automation Tester</MenuItem>
                              <MenuItem value='ServiceNow Developer'>
                                ServiceNow Developer
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            sx={{ minWidth: "100%" }}
                            name="email"
                            label={"Enter Email"}
                            type="email"
                            onChange={(e) => {
                                handleChange("email")(e);
                              }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            sx={{ minWidth: "100%" }}
                            name="firstName"
                            label={"Enter First name"}
                            type="string"
                            onChange={(e) => {
                                handleChange("firstName")(e);
                              }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                           sx={{ minWidth: "100%" }}
                            name="lastname"
                            label={"Enter Last name"}
                            type="string"
                            onChange={(e) => {
                                handleChange("lastName")(e);
                              }}
                          />
                        </Grid>
                        <Box m={1} pt={1} display='flex' justifyContent='center'>
                          <StyledButton
                            name="submit"
                            disabled={
                              Object.keys(errors).length > 0 || isLoading
                            }
                            onClick={handleSubmit}
                            variant="contained"
                          >
                            {isLoading ? (
                              <CircularProgress
                                style={{ color: "white" }}
                                size={20}
                                thickness={5}
                              />
                            ) : (
                              "Add user"
                            )}
                          </StyledButton>
                        </Box>
                      </Grid>
                    </Formik>
                  );
                }}
              </Formik>
              </Grid>
              <Grid item xs={4} display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
              <img src={uploadedImage || userImage} alt='user' className={classes.userImage} />
              <input type='file' placeholder="ChooseFile" onChange= {handleImage} ref={inputRef} style={{display: 'none'}} />
              <Box mt={2}>
              <StyledButton variant="contained" onClick= {()=>inputRef.current.click()}>Select Image</StyledButton>
              </Box>
              </Grid>
            </Grid>
          </Grid>
          <CustomizedDialogs open = {open} setOpen={setOpen} />
        </StyledBorderContainer>
      </div>
    </>
  );
}

export default AddUser;

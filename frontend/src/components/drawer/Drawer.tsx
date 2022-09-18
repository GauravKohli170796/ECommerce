import { Button, Checkbox, Divider, FormControlLabel, FormGroup, InputAdornment, Slider, SwipeableDrawer, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { drawerConst } from "../../redux/constants/actionConst";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/images/logo.png";

function Drawer() {
  const { isOpen } = useSelector((state: any) => state.drawer);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<number[]>([0, 8000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const renderSearchComponent = () => {
    return (
      <Box sx={{ width: "90%", margin: "20px 5px", display: "flex", flexDirection: "column" }}>
        <TextField
          id="outlined-basic"
          label="Search a product"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          fullWidth
        />
        <Button variant="contained" sx={{ alignSelf: "flex-end", marginTop: "20px" }}>
          Search
        </Button>
      </Box>
    );
  };
  const renderFliterComponent = () => {
    return (
      <Box sx={{ width: "90%", margin: "20px 5px", display: "flex", flexDirection: "column"}}>
        <Typography variant="h5" sx={{ alignSelf: "center",margin:"16px 0px" }}>Filters</Typography>
        <Divider />
        <Typography variant="h6">Price</Typography>
        <Slider
          getAriaLabel={() => 'Minimum distance shift'}
          value={value2}
          onChange={handleChange2}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
        <Typography variant="h6">Categories</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox/>} label="Shirts" />
          <FormControlLabel control={<Checkbox />} label="skirts" />
          <FormControlLabel control={<Checkbox />} label="Kurti" />
          <FormControlLabel control={<Checkbox />} label="Plazo" />
          <FormControlLabel control={<Checkbox />} label="Combo" />
        </FormGroup>
        <Divider />
        <Typography variant="h6">Sort</Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox/>} label="Price low to high" />
          <FormControlLabel control={<Checkbox />} label="Price high to low" />
          <FormControlLabel control={<Checkbox />} label="Rating low to high" />
          <FormControlLabel control={<Checkbox />} label="Rating high to low" />
        </FormGroup>
      </Box>
    );
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={() => {
        dispatch({ type: drawerConst.CLOSE });
      }}
      onOpen={() => {
        dispatch({ type: drawerConst.OPEN });
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", width: { xs: "60vw", md: "25vw" } }}>
        <img src={logo} height="50px" style={{ margin: "30px 0px 30px 0px" }} />
        <Divider />
         {renderFliterComponent()}
        {renderSearchComponent()}
      </Box>
    </SwipeableDrawer>
  );
}
export default Drawer;

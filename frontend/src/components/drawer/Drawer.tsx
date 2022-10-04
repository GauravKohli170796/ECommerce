import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Slider,
  SwipeableDrawer,
  TextField,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { drawerConst, drawerShowOptions,eFilterOptionsAction} from "../../redux/constants/actionConst";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/images/logo.png";

function Drawer() {
  const { isOpen ,drawerShowOption } = useSelector((state: any) => state.drawer);
  const { category ,price,priceSort,ratingSort} = useSelector((state: any) => state.filter);
  const dispatch = useDispatch();
  

  const handleRatingSort = (event: any) => {
    if (event.target.checked) {
      dispatch({ type: eFilterOptionsAction.ratingSort, payload: { ratingSort: event.target.value } });
      return;
    }
    dispatch({ type: eFilterOptionsAction.ratingSort, payload: { ratingSort: "" } });
  };

  const handlePrice = (event: any): void => {
    dispatch({ type: eFilterOptionsAction.price, payload: { price: event.target.value } });
  };

  const handlePriceSort = (event: any): void => {
    if (event.target.checked) {
      dispatch({ type: eFilterOptionsAction.priceSort, payload: { priceSort: event.target.value } });
      return;
    }
    dispatch({ type: eFilterOptionsAction.priceSort, payload: { priceSort: "" } });
  };

  const handleCategory = (event: any): void => {
    const val = event.target.value.toString();
    const categoryValue = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    if (event.target.checked) {
      dispatch({ type: eFilterOptionsAction.category, payload: { category: [...category,categoryValue]} });
      return;
    }
    const categoryFilterVal = category.filter((categoryVal:string) => categoryVal !== categoryValue);
    dispatch({ type: eFilterOptionsAction.category, payload: { category: categoryFilterVal} });
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
      <Box sx={{ width: "90%", margin: "5px 5px", display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" sx={{ alignSelf: "center", margin: "5px 0px" }}>
          Filters
        </Typography>
        <Button variant="outlined" sx={{ alignSelf: "flex-end", marginTop: "20px" }} onClick={()=>{dispatch({type:eFilterOptionsAction.reset})}}>
          Clear Filters
        </Button>
        <Divider sx={{ marginY: "20px" }} />
        <Typography variant="h6">Price</Typography>
        <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={price}
          valueLabelDisplay="auto"
          onChange={handlePrice}
          max={8000}
        />
        <Divider sx={{ marginY: "12px" }} />
        <Typography variant="h6">Categories</Typography>
        <FormGroup>
          <FormControlLabel
            onChange={(e) => {
              handleCategory(e);
            }}
            control={<Checkbox />}
            label="Shirts"
            value="shirts"
          />
          <FormControlLabel
            onChange={(e) => {
              handleCategory(e);
            }}
            control={<Checkbox />}
            label="skirts"
            value="skirts"
          />
          <FormControlLabel
            onChange={(e) => {
              handleCategory(e);
            }}
            control={<Checkbox />}
            label="Kurti"
            value="kurti"
          />
          <FormControlLabel
            onChange={(e) => {
              handleCategory(e);
            }}
            control={<Checkbox />}
            label="Plazo"
            value="plazo"
          />
          <FormControlLabel
            onChange={(e) => {
              handleCategory(e);
            }}
            control={<Checkbox />}
            label="Combo"
            value="combo"
          />
        </FormGroup>
        <Divider sx={{ marginY: "20px" }} />
        <Typography variant="h6">Sort Price</Typography>
        <FormGroup>
          <FormControlLabel
            onChange={(e) => {
              handlePriceSort(e);
            }}
            control={<Checkbox />}
            value="PriceLowToHigh"
            checked={priceSort === "PriceLowToHigh"}
            label="Price low to high"
          />
          <FormControlLabel
            onChange={(e) => {
              handlePriceSort(e);
            }}
            control={<Checkbox />}
            value="PriceHighToLow"
            checked={priceSort === "PriceHighToLow"}
            label="Price high to low"
          />
        </FormGroup>
        <Divider sx={{ marginY: "20px" }} />
        <Typography variant="h6">Sort Rating</Typography>
        <FormGroup>
          <FormControlLabel
            onChange={(e) => {
              handleRatingSort(e);
            }}
            name="sortRating"
            control={<Checkbox />}
            checked={ratingSort === "RatingLowToHigh"}
            value="RatingLowToHigh"
            label="Rating low to high"
          />
          <FormControlLabel
            onChange={(e) => {
              handleRatingSort(e);
            }}
            name="sortRating"
            control={<Checkbox />}
            checked={ratingSort === "RatingHighToLow"}
            value="RatingHighToLow"
            label="Rating high to low"
          />
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
        {drawerShowOption===drawerShowOptions.filter && renderFliterComponent()}
        {drawerShowOption===drawerShowOptions.search && renderSearchComponent()}
      </Box>
    </SwipeableDrawer>
  );
}
export default Drawer;

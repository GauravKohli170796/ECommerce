import { Divider,IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function ProductsViewer() {
  const scrollRef = useRef();
  const renderAllProducts = () => {
    let view = [];
    for (let i = 0; i < 20; i++) view.push(<ProductCard />);
    return view;
  };
  const renderLatestProducts = () => {
    let view = [];
    for (let i = 0; i < 10; i++) view.push(<ProductCard />);
    return view;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 2px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      <Box>
        {/* <AcUnitIcon sx={{ color: "#ea1000" }} /> */}
        <Typography className="section-head" variant="overline" fontSize="large">
          Latest Products
        </Typography>
        {/* <AcUnitIcon sx={{ color: "#ea1000" }} /> */}
      </Box>

      <Divider sx={{marginY:"16px",width:"96vw"}} />
      <IconButton sx={{ backgroundColor: "lightgray", alignSelf: "flex-end", marginX: "16px" }}>
        <NavigateNextIcon />
      </IconButton>
      <Box ref={scrollRef}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width:"96vw",
          margin: "10px 10px",
          overflowX: "scroll"
        }}
      >
        {renderLatestProducts()}
      </Box>
      <Divider sx={{marginY:"16px",width:"96vw"}} />
      {/* <AcUnitIcon sx={{ color: "#ea1000" }} /> */}
      <Typography className="section-head" variant="overline" fontSize="large">
        Featured Products
      </Typography>
      {/* <AcUnitIcon sx={{ color: "#ea1000" }} /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 10px",
          flexWrap: "wrap"
        }}
      >
        {renderAllProducts()}
      </Box>
    </Box>
  );
}

export default ProductsViewer;

import { Divider, SwipeableDrawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { drawerConst } from "../../redux/constants/actionConst";
import logo from "../../assets/images/logo.png"

function Drawer() {
  const {isOpen}= useSelector((state:any) => state.drawer);
  const dispatch = useDispatch();
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={() => {
        dispatch({type: drawerConst.CLOSE });
      }}
      onOpen={() => {
        dispatch({type:drawerConst.OPEN });
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" ,width:{xs:"60vw",md:"25vw"}}}>
        
        <img src={logo} height="60px" style={{margin:"30px 0px 30px 0px"}}></img>
        <Divider/>
        <Typography>Filters</Typography>
     </Box>
    </SwipeableDrawer>
  );
}
export default Drawer;

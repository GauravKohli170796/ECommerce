import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Button, Divider, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetAppState } from "../../AppContext";
import logo from "../../assets/images/logo.png";
import { drawerShowOptions } from "../../constants/AppConst";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const AppState = GetAppState();

  useEffect(() => {
    async function checkLogInStatus() {
      const authToken = await localStorage.getItem("auth");
      if (authToken) {
        setIsLoggedIn(true);
      }
     }
    checkLogInStatus();
  }, [navigate]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const openDrawer = (showOption: drawerShowOptions) => {
    AppState.setOpenDrawer(true);
    AppState.setDrawerOption(showOption);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "8px", position: "sticky", top: 0, left: 0, zIndex: 1000 }}>
      <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
        <Toolbar>
          <img src={logo} height="80px" alt="Main logo"></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Tooltip title="Filters" arrow>
              <IconButton
                aria-label="delete"
                size="large"
                color="primary"
                onClick={() => {
                  openDrawer(drawerShowOptions.filter);
                }}
              >
                <FilterAltIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Search Products" arrow>
              <IconButton
                aria-label="delete"
                size="large"
                color="primary"
                onClick={() => {
                  openDrawer(drawerShowOptions.search);
                }}
              >
                <SearchIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="My Cart" arrow>
              <IconButton aria-label="delete" size="large" color="primary">
                <ShoppingCartIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            {isLoggedIn && <Tooltip title="Logut" arrow>
              <IconButton aria-label="delete" size="large" color="primary">
                <LogoutIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>}

            {!isLoggedIn && <Tooltip title="Login/Signup" arrow>
              <IconButton aria-label="delete" size="large" color="primary">
                <LoginIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>}
          </Box>

          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {" "}
              <MenuIcon />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  openDrawer(drawerShowOptions.filter);
                }}
              >
                <FilterAltIcon fontSize="inherit" sx={{ marginRight: "5px" }} />
                Filters
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleClose();
                  openDrawer(drawerShowOptions.search);
                }}
              >
                <SearchIcon fontSize="inherit" sx={{ marginRight: "5px" }} />
                Search Products
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ShoppingCartIcon fontSize="inherit" sx={{ marginRight: "5px" }} />
                My Cart
              </MenuItem>
              <Divider />
              {isLoggedIn && <MenuItem onClick={handleClose}>
                <LogoutIcon fontSize="inherit" sx={{ marginRight: "5px" }} />
                Log Out
              </MenuItem>}

              {!isLoggedIn && <MenuItem onClick={handleClose}>
                <AccountBoxIcon fontSize="inherit" sx={{ marginRight: "5px" }} />
                Login/SignUp
              </MenuItem>
              }
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;

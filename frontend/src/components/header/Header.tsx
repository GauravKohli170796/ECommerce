import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../assets/images/logo.png";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
        <Toolbar>
          <img src={logo} height="60px"></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Box sx={{display:{xs:'none',sm:"block"}}}>
            <Tooltip title="Filters" arrow>
              <IconButton aria-label="delete" size="large" color="primary">
                <FilterAltIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Search Products" arrow>
              <IconButton aria-label="delete" size="large" color="primary">
                <SearchIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="My Cart" arrow>
              <IconButton aria-label="delete" size="large" color="primary">
                <ShoppingCartIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="My Account" arrow>
              <IconButton aria-label="delete" size="large" color="primary">
                <AccountBoxIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{display:{xs:'block',sm:"none"}}}>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            > <MenuIcon/></Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClose}><FilterAltIcon fontSize="inherit" sx={{marginRight:"5px"}}/>Filters</MenuItem>
              <MenuItem onClick={handleClose}><SearchIcon fontSize="inherit" sx={{marginRight:"5px"}}/>Search Products</MenuItem>
              <MenuItem onClick={handleClose}><ShoppingCartIcon fontSize="inherit" sx={{marginRight:"5px"}}/>My Cart</MenuItem>
              <MenuItem onClick={handleClose}><AccountBoxIcon fontSize="inherit" sx={{marginRight:"5px"}}/>My Account</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;

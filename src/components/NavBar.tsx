import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar style={{ backgroundColor: "#303030" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink to="/">
              <img
                src="https://cdn4.vectorstock.com/i/1000x1000/63/08/ninja-gaming-joystick-sport-logo-icon-vector-34196308.jpg"
                width={50}
                height={50}
                style={{ marginRight: "10px", borderRadius: "50px" }}
                alt=""
              />
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      to="/category"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Category
                    </NavLink>{" "}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {" "}
                    <NavLink
                      to="/platform"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Platform
                    </NavLink>{" "}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {" "}
                    <NavLink
                      to="/search"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      Search
                    </NavLink>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to="/category"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Category
                </NavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to="/platform"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Platform
                </NavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to="/search"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Search
                </NavLink>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
export default NavBar;

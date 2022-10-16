import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

// IMPORT MATERIAL UI
import { AppBar, Avatar, IconButton, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const StyledToolBar = styled(Toolbar) ({
  display:"flex",
  justifyContent:"space-between"
})

function Nav () {

  // USE - SELECTOR
  const user = useSelector((store) => store.user);

  // USE - STATE
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

return (
  <AppBar position="sticky">
    <StyledToolBar>
      {/* If no user is logged in, show these links */}
      {!user.id && (
      // If there's no user, show login/registration links
        <>
          <Link to="/login">
            Login / Register
          </Link>
          <Link to="/about">
            About
          </Link>
        </>
      )}
      {/* If a user is logged in, show these links */}
      {user.id && (
        <>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                >
                  $(mySkin)
              </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem>
                  <Link to="/user">
                    Home
                  </Link>
                </MenuItem>  
                <MenuItem>
                  <Link to="/product">
                    Product
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/profile">
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/info">
                    Info Page
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/about">
                    About
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              }}
            >
              $(mySkin)
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Tooltip title="Home Page">
                <Link to="/user">
                  <Button variant="contained" >
                    <Typography>
                      Home
                    </Typography>
                  </Button>
                </Link>
              </Tooltip>
              <Tooltip title="Product Page">
                <Link to="/product">
                  <Button variant="contained" >
                    <Typography>
                      Product
                    </Typography>
                  </Button>
                </Link>
              </Tooltip>
              <Tooltip title="Profile Page">
                <Link to="/profile">
                  <Button variant="contained" >
                    <Typography>
                      Profile
                    </Typography>
                  </Button>
                </Link>
              </Tooltip>
              <Tooltip title="Info Page">
              <Link to="/info">
                  <Button variant="contained" >
                    <Typography>
                      Info Page
                    </Typography>
                  </Button>
                </Link>
              </Tooltip>
              <Tooltip title="About Page">
                <Link to="/about">
                  <Button variant="contained" >
                    <Typography>
                      About
                    </Typography>
                  </Button>
                </Link>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
              <MenuItem>
                <LogOutButton />
              </MenuItem>
              </Menu>
            </Box>
            </Toolbar>
          </Container>
        </>
      )}
      </StyledToolBar>
    </AppBar>
    );
} // END OF Nav

export default Nav;


// import './Nav.css';

// function Nav() {
//   const user = useSelector((store) => store.user);

//   return (
//     <div className="nav">
//       <Link to="/home">
//         <h2 className="nav-title">Chameng GOING SOLO!!!</h2>
//       </Link>
//       <div>
//         {/* If no user is logged in, show these links */}
//         {!user.id && (
//           // If there's no user, show login/registration links
//           <Link className="navLink" to="/login">
//             Login / Register
//           </Link>
//         )}

//         {/* If a user is logged in, show these links */}
//         {user.id && (
//           <>
//             <Link className="navLink" to="/user">
//               Home
//             </Link>

//             <Link className="navLink" to="/product">
//               Product
//             </Link>

//             <Link className="navLink" to="/profile">
//               Profile
//             </Link>

//             <Link className="navLink" to="/info">
//               Info Page
//             </Link>

//             <LogOutButton className="navLink" />
//           </>
//         )}

//         <Link className="navLink" to="/about">
//           About
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Nav;
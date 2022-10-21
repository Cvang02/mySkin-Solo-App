// IMPORT REACT
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

// IMPORT COMPONENT 
import './Nav.css';

// IMPORT MATERIAL UI
import { styled, useTheme } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import SpaIcon from '@mui/icons-material/Spa';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
      transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
      ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const StyledToolBar = styled(Toolbar) ({
  display:"flex",
  justifyContent:"space-between"
})

function Nav() {

  // USE-SELECTOR
  const user = useSelector(store =>store.user);

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
      <AppBar position="sticky" open={open}>
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
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          <Typography 
            variant="h3" 
            noWrap 
            component="div"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            $(mySkin)
          </Typography>
          </Toolbar>
            <IconButton>
              <LogoutIcon />
              <LogOutButton />
            </IconButton>
          </> 
          )}
        </StyledToolBar>
      </AppBar>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
        <Avatar
          src={user.profile_url}
          sx={{ width: 240, height: 240 }}
        />
      <Divider />
        <List>
          <Link to="/user">
            <ListItem>
              <ListItemButton>
              <IconButton>
                <HomeIcon />
              </IconButton>
                <Typography
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        <Link to="/product">
          <ListItem>
            <ListItemButton>
              <IconButton>
                <SpaIcon />
              </IconButton>
                <Typography
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Skincare Product
                </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/profile">
          <ListItem>
            <ListItemButton>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
                <Typography
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Profile
                </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/info">
          <ListItem>
            <ListItemButton>
              <IconButton>
                <InfoIcon />
              </IconButton>
                <Typography
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Information
                </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
          <Link to="/about">
            <ListItem>
              <ListItemButton>
                <IconButton>
                  <ArticleIcon />
                </IconButton>
                  <Typography
                    sx={{
                      mr: 2,
                      fontFamily: 'monospace',
                      fontWeight: 500,
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    About
                  </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
    </Drawer>
  </Box>
  ); // END OF return
} // END OF nav

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

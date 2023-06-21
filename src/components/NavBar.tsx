import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth:number = 240;
// const navItems = ['Home', 'Plaform', 'Category'];

const navItems2:{key:number,page:string,link:string}[]=[{
    key:1,
    page:'Home',
    link:'/'
},
{
    key:2,
    page:'Platform',
    link:'platform'
},
{
    key:3,
    page:'Category',
    link:'category'
}
]

export default function NavBa(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} >
      <Typography variant="h6" sx={{ my: 2,mx:2 }}>
        GAME CARDS
      </Typography>
      <Divider />
      <List>
        {navItems2.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <a href={item.link}>
                <ListItemText primary={item.page}/>
                </a>
            
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{backgroundColor:'#2b2b2b',color:'#a3a2a0'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="h4"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          textAlign={'left'}
          fontWeight={700}
          >
            GAME CARDS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems2.map((item) => (
               
              <Button key={item.key} href={`${item.link}`} sx={{ color: '#fff' }}>
            {/*    */}
           {item.page}
              </Button>
             
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}
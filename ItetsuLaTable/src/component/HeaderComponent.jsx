import {
    AppBar,
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger
} from "@mui/material";
import {Menu} from "@mui/icons-material";
import icon from "../assets/images/table.png";
import {Fragment, useState} from "react";
import PropTypes from 'prop-types';

import useScrollNavigate from 'react-scroll-navigate';

export default function HeaderComponent () {

    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollNavigateError, scrollNavigate } = useScrollNavigate();
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navItems = [
        {title: 'Compétences', link : 'competences'},
        {title: 'Services', link : 'services'} ,
        {title: 'A propos', link : 'a-propos'} ,
        {title : 'Contact', link: 'contact'}
    ]

    function HideOnScroll(props) {
        const { children, window } = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
        });

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    const mainText = (
        <Fragment>
            <Typography variant="h6" component="div" sx={{   flexGrow: 1 }}>
                <Link aria-label={'Nom du site'}  sx={{ textDecoration:'none' , color: 'var(--backgroundColor)' , cursor: 'pointer', fontWeight:'bold' }}
                      onClick={() => { scrollNavigate('/') } } >
                    ItetsuLaTable
                </Link>
            </Typography>
        </Fragment>

    ) ;

    const drawerWidth = 240;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box my={2}>
                {mainText}
            </Box>
            <Divider />
            <List>
                {
                    navItems.map((item , key) => (
                        <ListItem key={key} disablePadding>
                            <ListItemButton aria-label={item.title} sx={{ textAlign: 'center' }}>
                                <Link aria-label={'link to ' + item.title} sx={{ textDecoration:'none' , color: 'var(--text-black)' , cursor: 'pointer', fontSize:'1.5rem' }}
                                      onClick={() => { scrollNavigate(item.link) } }  >
                                    {item.title}
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );


    return (
        <Box sx={{ flexGrow: 1  }} component={'nav'} >
            <Container fixed >
                <HideOnScroll >
                    <AppBar sx={{ backgroundColor: 'var(--text-white)' }} >
                        <Toolbar>
                            <img style={{ marginRight: '10px' }} src={icon} alt="ItetsuLaTable icon" width={50} height={50} loading={"lazy"} />
                            {mainText}
                            <IconButton
                                disableRipple
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { md: 'none' } , color: 'var(--text-black)' }}
                            >
                                <Menu />
                            </IconButton>

                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                {navItems.map((item, key) => (
                                    <Link  aria-label={'link to ' + item.title} key={key} sx={{ textDecoration:'none' , color: 'var(--text-black)' , '&:hover' : {color:'var(--color-secondary)'} , cursor: 'pointer' , fontSize : '1.5rem' , marginX : 2 }}
                                           onClick={() => { scrollNavigate(item.link) } }
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </Box>

                        </Toolbar>
                    </AppBar>
                </HideOnScroll>

                <Box component="nav">
                    <Drawer
                        anchor={'right'}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth  },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Container>
        </Box>
    )

}
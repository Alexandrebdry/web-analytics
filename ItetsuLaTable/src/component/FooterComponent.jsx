import {Fragment} from "react";
import {
    Box,
    Container,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    Link,
    Typography,
    Stack,
    Divider
} from "@mui/material";
import {GitHub, LinkedIn} from "@mui/icons-material";


import useScrollNavigate from 'react-scroll-navigate';

export default function FooterComponent () {

    const {  scrollNavigate } = useScrollNavigate();

    return (
        <Fragment>
            <Box pt={2} p={5} sx={{ color:'var(--text-white)', backgroundColor: 'var(--text-black)' }} >
                <Container  >
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} >
                            <Typography aria-label={'footer plan du site'} component={'p'} variant={'h4'} sx={{fontWeight:'bold'}}> Plan du site </Typography>
                            <Stack>
                                <Typography component={'a'} variant={'body1'}
                                            sx={{cursor:'pointer', color:'var(--text-white)',textDecoration:'none', mt:3}}
                                            aria-label={'lien vers la home page'}
                                            onClick={() => {scrollNavigate('/') }}
                                >
                                    ItetsuLaTable - Développeur web
                                </Typography>
                                <Typography component={'a'} variant={'body1'}
                                            sx={{cursor:'pointer', color:'var(--text-white)',textDecoration:'none',mt:3}}
                                            aria-label={'lien vers mes competences'}
                                            onClick={() => {scrollNavigate('/competences') }}
                                >
                                    Mes compétances
                                </Typography>
                                <Typography component={'a'} variant={'body1'}
                                            sx={{cursor:'pointer', color:'var(--text-white)',textDecoration:'none',mt:3}}
                                            aria-label={'lien vers mes services'}  onClick={() => {scrollNavigate('/services') }}
                                >
                                    Mes services
                                </Typography>
                                <Typography component={'a'} variant={'body1'}
                                            sx={{cursor:'pointer', color:'var(--text-white)',textDecoration:'none',mt:3}}
                                            aria-label={'lien vers à propos'}
                                            onClick={() => {scrollNavigate('/a-propos') }}
                                >
                                    A propos
                                </Typography>
                                <Typography component={'a'} variant={'body1'}
                                            sx={{cursor:'pointer', color:'var(--text-white)',textDecoration:'none',mt:3}}
                                            aria-label={'lien vers contact'}
                                            onClick={() => {scrollNavigate('/contact') }}
                                >
                                    Contact
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography aria-label={'footer reseaux'} component={'p'} variant={'h4'} sx={{fontWeight:'bold'}}> Mes réseaux </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <IconButton aria-label={'github footer btn'} href="https://github.com/Alexandrebdry" target="_blank" rel="noopener noreferrer">
                                            <GitHub sx={{color: 'var(--text-white)'}}/>
                                        </IconButton>
                                    </ListItemIcon>
                                    <ListItemIcon>
                                        <IconButton aria-label={'linkedin footer btn'} href="https://www.linkedin.com/in/alexandrebdry/" target="_blank" rel="noopener noreferrer">
                                            <LinkedIn sx={{color: 'var(--text-white)'}}/>
                                        </IconButton>
                                    </ListItemIcon>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography aria-label={'footer contact'} component={'p'} variant={'h4'} sx={{fontWeight:'bold'}}> Me contacter </Typography>
                            <Typography aria-label={'footer email'} component={'a'} href={'mailto:alexandre.baudry.itetsu@gmail.com'}
                                sx={{cursor:'pointer', color:'var(--text-white)'}}
                            >
                                <strong> par mail </strong>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{mt: 4, mb: 4, backgroundColor:'var(--text-white)'}} />
                    <Box display={'flex'} flexDirection={ {sm: 'column', md: 'row'} }  justifyContent={'space-between'} alignItems={'center'}>
                        <Typography flex={'1'}> &copy; ItetsuLaTable 2020 - 2023  </Typography>

                        <Link aria-label={'mentions légales'} onClick={() => {scrollNavigate('/mentions-legales') } } sx={{cursor:'pointer', color:'var(--text-white)',textDecoration:'none'}} >
                            Mentions légales
                        </Link>
                    </Box>
                </Container>
            </Box>
        </Fragment>
    )
}
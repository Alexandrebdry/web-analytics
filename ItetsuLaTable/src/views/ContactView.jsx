import {Fragment, useEffect} from "react";
import HeroBannerComponent from "@/component/HeroBannerComponent";
import {Box, Container, Grid, Icon, IconButton, Stack, Typography} from "@mui/material";
import {GitHub, LinkedIn} from "@mui/icons-material";
import ContactForm from "@/component/form/ContactForm";
import useAnalyticsEventTracker from "@/component/hooks/useGoogleAnalytics";

export default function ContactView () {

    const gaEventTracker = useAnalyticsEventTracker() ;
    useEffect(() => {

        gaEventTracker({
            category : 'contact page',
            action : 'view',
            label : 'load'
        });

    },[])

    return (
        <Fragment>

            <HeroBannerComponent
                color={'--text-white'}
                bgColor={'--color-secondary'}
            >
                <Container  >
                    <Box>
                        <Typography aria-label={'titre de la page'} component={'h1'} variant={'h2'} sx={{fontWeight: 'bold', fontSize: {xs: '2rem' , sm: '3.75rem'} }}  >
                            Contact
                        </Typography>
                        <Typography aria-label={'sous titre de la page'} component={'h2'} variant={'body1'}>
                            Réaliser votre projet de site internet, une question. Contactez-moi !
                        </Typography>
                    </Box>
                </Container>
            </HeroBannerComponent>



              <Box py={10} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} sx={{backgroundColor: 'var(--text-white)', color: 'var(--text-black)'}}>
                <Container fixed >
                    <ContactForm/>
                </Container>
            </Box>


        </Fragment>
    )
}
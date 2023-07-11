import { Box, Container, Grid, Typography} from "@mui/material";
import HeroBannerComponent from "@/component/HeroBannerComponent";
import useAnalyticsEventTracker from "@/component/hooks/useGoogleAnalytics";
import {useEffect} from "react";
import {Build, Cloud, Code, Monitor, Visibility, Work} from "@mui/icons-material";
import IconComponent from "@/component/IconComponent";

export default function ServicesView () {

    const gaEventTracker = useAnalyticsEventTracker() ;
    useEffect(() => {

        gaEventTracker({
            category : 'service page',
            action : 'view',
            label : 'load'
        });

    },[])

    return (
        <Box >
            <HeroBannerComponent
                color={'--text-white'}
                bgColor={'--color-secondary'}
            >
                <Container   >

                    <Box>
                        <Typography  aria-label={'titre de la page'} component={'h1'} variant={'h2'} sx={{fontWeight: 'bold', fontSize: {xs: '2rem' , sm: '3.75rem'} }}  >
                            Mes Services
                        </Typography>
                        <Typography  aria-label={'sous titre de la page'}>
                            pour répondre au mieux à vos besoins
                        </Typography>
                    </Box>
                </Container>
            </HeroBannerComponent>

            <Box py={10} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <Container   >
                    <Grid container spacing={4}>
                        <Grid item xs={6} sm={4}>
                            <IconComponent
                                icon={<Monitor/>}
                                titre={"Création de site internet"}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <IconComponent
                                icon={<Code/>}
                                titre={"Développement web"}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <IconComponent
                                icon={<Visibility/>}
                                titre={"SEO"}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <IconComponent
                                icon={<Work/>}
                                titre={"B2B"}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <IconComponent
                                icon={<Cloud/>}
                                titre={"Hébergement et cloud"}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}        >
                           <IconComponent
                               icon={<Build/>}
                               titre={"Maintenance et amélioration"}
                           />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Box>
    )
}
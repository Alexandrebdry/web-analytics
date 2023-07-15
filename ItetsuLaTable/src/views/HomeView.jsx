import {Fragment, useEffect, useRef,} from "react";
import {Box, Button, Container, Divider, Grid, Grow, Slide, Typography} from "@mui/material";
import {
    Brush,
    Cast,
    Cloud,
    Code,
    Coffee,
    Computer,
    Construction,
    CropOriginal,
    Email,
    Hotel,
    RocketLaunch,
    School,
    Star, StarHalf
} from "@mui/icons-material";

import image from "../assets/images/home.webp";
import responsive from "../assets/images/responsive.png";
import adapt from "../assets/images/adapt.webp";
import NumberComponent from "@/component/NumberComponent";

import useAnalyticsEventTracker from '../component/hooks/useGoogleAnalytics';
import useScrollNavigate from "react-scroll-navigate";

import useVisible from "react-viewport-detect";
import ProjectComponent from "@/component/ProjectComponent";
import TimelineComponent from "@/component/timeline/TimelineComponent";
import TimelineItemComponent from "@/component/timeline/TimelineItemComponent";

export default function () {

    //Projects VP
    const refProjects = useRef() ;
    const inVP = useVisible(refProjects) ;

    //Points Vp
    const refPoints = useRef() ;
    const inPtsVP = useVisible(refPoints) ;

    const projet = useRef() ;
    const projets = useVisible(projet) ;

    const steps = useRef() ;
    const inSteps = useVisible(steps) ;

    const { scrollNavigate } = useScrollNavigate();
    const gaEventTracker = useAnalyticsEventTracker() ;
    useEffect(() => {

       gaEventTracker({
           category : 'homePage',
           action : 'view',
           label : 'load'
       });

    },[]);

    return (
        <Fragment>

            <Box sx={{backgroundColor: 'var(--text-white)',color :'var(--text-black)'}} pt={'100px'} >
                <Container fixed >
                    <Grid container>
                        <Grid item xs={12} md={6} >
                            <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} height={'100%'} >
                                <Typography component={'h1'} sx={{fontWeight: 'bold', fontSize: {xs: '2rem' , sm: '3.75rem'} }} >
                                    ItetsuLaTable <br/> Développeur freelance
                                </Typography>
                                <Typography>
                                    En Freelance, je vous accompagne dans toutes les phases de votre projet de site internet.
                                </Typography>
                                <Typography>
                                    Du design, au rendu final, je m'occupe de tout !
                                </Typography>
                                <Box mt={'25px'}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} sm={6}>
                                            <Button onClick={() => {scrollNavigate('/contact')} }  aria-label={'button demande de devis'} sx={{  py:2, px:5 , color: 'var(--text-white)' , backgroundColor : 'var(--color-secondary)' , '&:hover' : {backgroundColor: 'var(--backgroundColor)'}  }}  startIcon={<Email />}>
                                                Obtenir un devis
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Button variant={'outlined'} onClick={() => {scrollNavigate('/a-propos')} }  aria-label={'button en savoir plus'}
                                                    sx={{  py:2, px:5 , color: 'var(--text-black)' , backgroundColor : 'var(--text-white)' , '&:hover' : {backgroundColor: 'var(--text-white-hover)'}  }}  >
                                                En savoir plus
                                            </Button>
                                        </Grid>
                                    </Grid>


                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>

                            <Box component={'img'} display={'flex'} justifyContent={'center'} src={image} alt={'Image developpement web'}
                                 sx={{
                                     width: {xs:'50%', md:'100%'} , height: {xs:'300px', md:'500px'} ,
                                     marginLeft:'auto', marginRight:'auto'
                            }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box py={10}>
                <Container fixed >
                    <Grid container spacing={3} ref={projet} sx={{ overflowX:'hidden'}} >
                        <Slide direction={'right'} in={projets} timeout={500}>
                            <Grid item xs={12} md={4}>
                                <ProjectComponent
                                    darkmode={true}
                                    icon={<Computer/>}
                                    titre={'Création de site internet'}
                                    description={"Réalisation d'un site from scratch. Spécialisé dans ce domaine pour répondre à vos besoins. Gestion de vos applications webs,\n" +
                                        "de vos bases de données et audit."}
                                />
                            </Grid>
                        </Slide>
                            <Grid item xs={12} md={4}>
                                <ProjectComponent
                                    icon={<Construction/>}
                                    titre={'Maintenance de site internet'}
                                    description={"Vous possèdez déjà un site internet et vous souhaitez le faire évoluer ? Que cela soit une petite mise à jour ou le développement de nouvelles " +
                                        "fonctionnalitées. "}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <ProjectComponent
                                    icon={<Cloud/>}
                                    titre={'Hébergement de site internet'}
                                    description={"Vous possèdez un site internet et vous ne savez pas comment le mettre en ligne ? Je m'occupe de toutes les démarches pour vous ! "}
                                />
                            </Grid>
                    </Grid>
                </Container>

            </Box>

            <Box py={5}>
                <Container  >
                    <Divider sx={{color:'var(--text-black)'}} >
                        <Typography  sx={{
                            marginLeft: '30px',
                            marginRight:'30px',
                            color:'var(--text-black)',
                            fontWeight:'bold',
                            cursor:'pointer'
                        }}
                            aria-label={'voir tous les services'}
                            component={'a'}
                            onClick={() => {scrollNavigate('/services') }}
                        >
                            Voir tous les services
                        </Typography>
                    </Divider>
                </Container>
            </Box>


            <Box  py={15} >
                <Container fixed >
                    <Typography aria-label={'Titre section projet'} component={'h2'} variant={'h4'} sx={{fontWeight:'bold', }} >
                        Adaptez à tous types de projets
                    </Typography>
                    <Typography aria-label={'sous titre section projet'} >
                        Je suis là pour répondre aux mieux à vos besoins
                    </Typography>
                    <Grid mt={5} container spacing={2} ref={refProjects} sx={{ overflowX:'hidden'}} >
                        <Slide  direction={'right'} in={inVP}  >
                            <Grid  item xs={12} md={6} >
                                <Box display={'flex'} justifyContent={'center'} height={'100%'} flexDirection={'column'}>
                                    <Typography textAlign={'justify'}>
                                        Vous souhaitez votre propre site internet, une refonte partielle ou totale, une maintenance ? <br/>
                                        Vous êtes <strong>un particulier</strong> ou <strong>une entreprise</strong>  ? <br/>
                                        Je réponds présent à votre appelle. Je suis <strong>expert en ingénierie du web</strong> je m'assure toujours de la satisfaction
                                        de mon client.
                                        <br/>
                                    </Typography>
                                    <Box display={'flex'} mt={2}  >
                                        <Star sx={{ color:'var(--color-secondary)' }} />
                                        <Star sx={{ color:'var(--color-secondary)' }} />
                                        <Star sx={{ color:'var(--color-secondary)' }} />
                                        <Star sx={{ color:'var(--color-secondary)' }} />
                                        <StarHalf sx={{ color:'var(--color-secondary)' }} />
                                        <Typography ml={2} >Avis clients </Typography>
                                    </Box>
                                </Box>

                            </Grid>
                        </Slide>
                        <Slide  direction={'left'} in={inVP}  >
                            <Grid item xs={12} md={6}>
                                <Box component={'img'} display={'flex'} justifyContent={'center'} src={adapt} alt={'Image adapter à tous'}
                                     sx={{
                                         width: {xs:'50%', md:'100%'} , height: {xs:'100px', md:'100%'} ,
                                         marginLeft:'auto', marginRight:'auto'
                                     }}
                                />
                            </Grid>
                        </Slide>
                    </Grid>
                </Container>
            </Box>

            <Box  py={15} sx={{backgroundColor: 'var(--color-secondary)', color:'var(--text-white)'}} >
                <Container fixed >
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <Typography aria-label={'Titre section projet'} component={'h2'} variant={'h4'} sx={{fontWeight:'bold', }} >
                                Deux, trois chiffres pour vous rassurez !
                            </Typography>
                            <Typography aria-label={'sous titre section projet'} >
                                Les statistiques sont authentiques.
                            </Typography>
                        </Grid>

                        <Grid item xs={6} sm={3}>
                            <NumberComponent number={3} icon={<RocketLaunch/>} text={"Années d'activités"} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <NumberComponent number={7} icon={<School/>} text={"Ans d'expériences"} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <NumberComponent number={666} icon={<Coffee/>}  text={'Litres de café'} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <NumberComponent number={777} icon={<Hotel/>}  text={"Nuits blanches"} />
                        </Grid>

                    </Grid>
                </Container>
            </Box>


            <Box py={15} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'var(--text-white)'}}>
                <Container fixed  sx={{ overflowX:'hidden'}} >
                    <Typography aria-label={'section étapes'} component={'h2'} variant={'h4'} sx={{fontWeight:'bold',}} >
                        Votre projet en 4 étapes
                    </Typography>
                    <Box mt={2} >
                        <Grid container spacing={4} ref={steps}>
                            <Grow in={inSteps} timeout={1500} >
                                <Grid item xs={12} sm={6} >
                                    <ProjectComponent
                                        icon={<CropOriginal/>}
                                        titre={'Wireframe'}
                                        description={"Les wireframes sont l'essence même d'un site internet." +
                                            " Elles servent à placer tous les éléments de votre projet, à structurer le tout !" +
                                            " C'est grâce à cela que je peux répondre aux mieux à vos besoins."}
                                    >
                                    </ProjectComponent>
                                </Grid>
                            </Grow>
                           <Grow in={inSteps} timeout={1500} >
                               <Grid item xs={12} sm={6}>
                                   <ProjectComponent
                                       icon={<Brush/>}
                                       titre={'Design'}
                                       description={"Maintenant que tout est en place, il faut donner vie à votre projet !" +
                                           "Le design permet d'avoir une première ébauche de votre site internet." +
                                           "Les couleurs, le texte, l'ensemble. Tout y sera représenté pour qu'ensuite il devienne réalité."}
                                   >
                                   </ProjectComponent>
                               </Grid>
                           </Grow>
                           <Grow in={inSteps} timeout={1500} >
                               <Grid item xs={12} sm={6}>
                                   <ProjectComponent
                                       icon={<Code/>}
                                       titre={'Développement'}
                                       description={"Il prend vie, votre projet est bientôt entre vos mains. C'est la phase la plus importante, " +
                                           "celle ou le simple design se transforme en site internet. Fini le théorique et place à la pratique. " +
                                           "Il devient réalité."}
                                   >
                                   </ProjectComponent>
                               </Grid>
                           </Grow>
                            <Grow in={inSteps} timeout={1500} >
                                <Grid item xs={12} sm={6}>
                                    <ProjectComponent
                                        icon={<Cast/>}
                                        titre={'Mise en production'}
                                        description={"Une fois votre site internet terminé, il faut le mettre en ligne. Je vous accompagne dans toutes ces démarches ! " +
                                            "Et oui, cela n'est pas toujours facile de mettre un site en production alors ne vous en faites pas. Je m'en occupe " +
                                            "pour vous."}
                                    >
                                    </ProjectComponent>
                                </Grid>
                            </Grow>

                        </Grid>

                    </Box>
                </Container>
            </Box>

            <Box py={10}  display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{backgroundColor: 'var(--backgroundColor)', color: 'var(--text-white)'}}>

                <Container fixed >
                    <Box display={'flex'}  flexDirection={'column'} >
                        <Typography aria-label={'section sur mesure'} component={'h2'} variant={'h4'} sx={{fontWeight:'bold', pb:5}} >Un site sur mesure</Typography>

                        <Grid container sx={{ overflowX:'hidden'}}>
                                <Grid ref={refPoints} item xs={12} sm={6} >
                                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100%'} >
                                        <Box component={'img'} src={responsive} sx={{ width: {xs: 250, md : 500} , height: {xs:150, md : 300} }}  alt="Image d'un site responsive" />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6} >
                                    <TimelineComponent>
                                        <TimelineItemComponent
                                            numero={'1'}
                                            title={'Responsive'}
                                            description={"Téléphone, tablette, ordinateur, télévision ? Votre site pourra être visiter par tous"}
                                        />
                                        <TimelineItemComponent
                                            numero={'2'}
                                            title={'Personnalisé'}
                                            description={"Au travers de toutes les étapes, votre avis vous sera demandé afin que votre projet corresponde à vos besoins"}
                                        />
                                        <TimelineItemComponent
                                            numero={'3'}
                                            title={'Retour'}
                                            description={"Autant de retour que vous voulez. Vous aurez un suivi au plus proche des avancées de votre projet."}
                                        />
                                        <TimelineItemComponent
                                            numero={'4'}
                                            title={'Disponibilité'}
                                            last
                                            description={"Je reste disponible pour vous apporter un suivi technique et pratique adapté à votre projet."}
                                        />
                                    </TimelineComponent>
                                </Grid>
                        </Grid>

                    </Box>
                </Container>
            </Box>
        </Fragment>
    )

}
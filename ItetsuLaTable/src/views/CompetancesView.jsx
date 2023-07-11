import {Box, Container, Grid, Slide, Typography} from "@mui/material";
import HeroBannerComponent from "@/component/HeroBannerComponent";


import react from "../assets/images/react.png";
import vue from "../assets/images/vue.png";

import node from "../assets/images/node.png";
import nest from "../assets/images/nest.svg";
import docker from "../assets/images/docker.webp";
import kubernetes from "../assets/images/kubernetes.png";

import esgi from "../assets/images/esgi.jpeg";
import dassault from "../assets/images/dassault.png";
import symfony from "@/assets/images/symfony.png" ;
import electron from "@/assets/images/electron.png" ;
import useAnalyticsEventTracker from "@/component/hooks/useGoogleAnalytics";
import {useEffect, useRef} from "react";
import CompetenceComponent from "@/component/CompetenceComponent";
import useVisible from "react-viewport-detect";


export default function CompetancesView () {

    const gaEventTracker = useAnalyticsEventTracker() ;
    useEffect(() => {

        gaEventTracker({
            category : 'competences page',
            action : 'view',
            label : 'load'
        });

    },[])

    const slider = useRef();
    const checked = useVisible(slider);

    return (
        <Box
            sx={{overflowX:'hidden'}}
        >
            <HeroBannerComponent
                color={'--text-white'}
                bgColor={'--color-secondary'}
            >
                <Container  >

                    <Box>
                        <Typography  aria-label={'titre de la page'} component={'h1'} variant={'h2'} sx={{fontWeight: 'bold', fontSize: {xs: '2rem' , sm: '3.75rem'} }}  >
                            Mes compétences
                        </Typography>
                        <Typography  aria-label={'sous titre de la page'}>
                            Expert en ingénierie du web
                        </Typography>
                    </Box>
                </Container>
            </HeroBannerComponent>

            <Box py={10} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <Container   >
                    <Grid container spacing={4} ref={slider} >
                        <Slide direction="right" timeout={1000} in={checked}  >
                            <Grid item container spacing={2} xs={12} sm={6} >
                            <Grid item xs={12}>
                                <Typography aria-label={'titre section front end'} component={'h2'} variant={'h4'}  >
                                    <strong>Front End</strong>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CompetenceComponent
                                    image={react}
                                    titre={'React'}
                                    caption={'3 packages open sources'}
                                    description={"4 ans d'expérience  "}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CompetenceComponent
                                    image={vue}
                                    titre={'Vue'}
                                    caption={'10 projets et + '}
                                    description={'Une maîtrise totale'}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <CompetenceComponent
                                    image={electron}
                                    titre={'Electron'}
                                    caption={'application web ou mobile'}
                                    description={'Transformez votre site en application'}
                                />
                            </Grid>

                        </Grid>
                        </Slide>
                        <Slide direction="left" timeout={1000} in={checked}  >
                            <Grid item container spacing={2} xs={12} sm={6}>
                            <Grid item xs={12}>
                                <Typography  aria-label={'titre section back end'} component={'h2'} variant={'h4'}  >
                                    <strong>Back End</strong>
                                </Typography>
                            </Grid>
                            <Grid  item xs={12} md={6}>
                                <CompetenceComponent
                                    image={node}
                                    titre={'Node'}
                                    caption={'express, temps réel, web socket ...'}
                                    description={"Une petite envie ? "}
                                />

                            </Grid>
                            <Grid  item xs={12} md={6}>
                                <CompetenceComponent
                                    image={nest}
                                    titre={'Nest'}
                                    caption={'api, graphQL, analytics, SRR'}
                                    description={"De quoi répondre à tous vos besoins"}
                                />

                            </Grid>

                            <Grid  item xs={12} >
                                <CompetenceComponent
                                    image={symfony}
                                    titre={'Symfony'}
                                    caption={'application web complexe ou api'}
                                    description={"La french touch"}
                                />

                            </Grid>
                        </Grid>
                        </Slide>
                        <Grid item container spacing={2} xs={12} sx={{ display:'flex' ,  justifyContent: 'flex-start' }} >
                            <Grid item xs={12} sx={{ display:'flex' , justifyContent: 'flex-start'  }} >
                                <Typography  aria-label={'titre section Devops'} component={'h2'} variant={'h4'}  >
                                    <strong>Devops</strong>
                                </Typography>
                            </Grid>
                            <Grid item  xs={12} md={6} >
                                <CompetenceComponent
                                    image={docker}
                                    titre={'Docker'}
                                    caption={'une stack, plusieurs environemments'}
                                    description={"Tous mes projets tournent sur docker"}
                                />

                            </Grid>
                            <Grid item  xs={12} md={6}>
                                <CompetenceComponent
                                    image={kubernetes}
                                    titre={'Kubernetes'}
                                    caption={"Relier à docker, permet de scale vos serveurs"}
                                    description={"Utile pour les gros projets."}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box py={10} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{backgroundColor: 'var(--text-white)', color: 'var(--text-black)'}}>
                <Container   >
                    <Grid container spacing={4} >
                        <Grid item xs={12} >
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} flexDirection={{xs:'column', md:'row'}}>
                                <img src={esgi} alt={'Logo esgi'}  loading={'lazy'} width={'150px'}   />
                                <Typography aria-label={'description ESGI'} sx={{ paddingLeft: {xs:0, md: 4} , paddingTop:{xs:4,md:0},  textAlign:'justify'}} >
                                    Fraichement diplômé de <strong>l'ESGI</strong> dans le domaine de l'ingénierie du web.
                                    Durant ce cursus j'ai mis en pratique tout ce qu'on nous a enseigné.
                                    Je suis devenu <strong>expert</strong> en développement web grâce à toutes ses connaissances que l'on à pu me transmettre
                                    et surtout principalement grâce à la pratique.
                                    Création de mon propre CMS, création d'un site de gestion de tournoi, d'une application pour adopter un animal (Le tinder de la SPA),
                                    une boutique de moto avec un chat en temps réel, le jeu du blackjack ...  <br/>
                                    C'est une liste non-exhaustive de tous les projets que j'ai réalisés. De plus, j'ai moi-même créé un cours sur une technologie : <strong>Phalcon</strong> <br/>
                                    Plus de 40 pages écrites, 3 QCM et plus de 2 heures de vidéos afin d'expliquer au mieux ce langage.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} flexDirection={{xs:'column', md:'row'}}>
                                <img src={dassault} alt={'Logo dassault'}  loading={'lazy'} width={'150px'}  />
                                <Typography aria-label={'description ESGI'} sx={{paddingLeft: {xs:0, md: 4} , paddingTop:{xs:4,md:0},  textAlign:'justify'}} >
                                    J'ai eu la chance d'avoir été accepté en stage de fin d'études afin de valider mon DUT Informatique chez <strong>Dassault Systèmes</strong>, un leader du marché
                                    dans la création de logiciels dédiés aux industries. La plupart des personnes connaissent Solidworks ou bien Catia, les deux produits phares de la boite.
                                    Durant ce stage j'ai réalisé une application Symfony permettant de gérer toute la taxonomie et les traductions associées. <br/>
                                    Ce stage a duré 6 mois et à la fin de celui-ci j'ai été recruté en interne dans <strong>le département de la R&D</strong> en tant que développeur Front-end.
                                    Après deux ans dans ce département j'ai décidé de changer, toujours dans la même entreprise
                                    je suis passé <strong>développeur full-stack</strong>, les technologies utilisées étant <strong>Drupal</strong> et <strong>Vue/Nuxt</strong> <br/>
                                    J'ai donc passé plus de 3 ans dans cette entreprise leader de la 3D ! Et ce n'est que le début.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography aria-label={'résumé'} sx={{textAlign:'justify'}}>
                                En résumé, je suis devenu <strong>expert dans mon domaine</strong>, celui de la création et le développement de site internet grâce aux formations que j'ai eu.
                                Je tiens à remercier mes professeurs notamment Amin NAIRI, Yves SKRZYPCZYK  ,Adrien MORIN et Karl MARQUES pour leurs enseignements.
                                Je le suis aussi devenu aux travers de mes différents projets et aussi de mon expérience professionelle chez Dassault Systèmes. Je tiens à remercier
                                Ralph JUREIDINI pour m'avoir fait confiance dès mes débuts et Ludovic COTTIN.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Box>
    )
}
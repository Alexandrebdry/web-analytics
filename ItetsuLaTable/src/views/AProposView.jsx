import {Box, Container, Grid, Typography} from "@mui/material";
import HeroBannerComponent from "@/component/HeroBannerComponent";
import useAnalyticsEventTracker from "@/component/hooks/useGoogleAnalytics";
import {useEffect} from "react";

import iut from "../assets/images/iut.png";
import esgi from "../assets/images/esgi.jpeg";
import react from "@/assets/images/react.png";
import dassault from "@/assets/images/ds.webp";
import OpenSourcesComponent from "../component/OpenSourcesComponent";
import TimelineComponent from "../component/timeline/TimelineComponent";
import TimelineItemComponent from "../component/timeline/TimelineItemComponent";
import useScrollNavigate from "react-scroll-navigate";
import {TagTrackerSDK} from "react-analytics-sdk-esgi";

export default function AProposView () {

    const {scrollNavigate} = useScrollNavigate() ;
    const gaEventTracker = useAnalyticsEventTracker() ;
    useEffect(() => {

        gaEventTracker({
            category : 'a propos',
            action : 'view',
            label : 'load'
        });

    },[])


    return (
        <Box>
            <TagTrackerSDK
                appID={"606a54ca-c368-46f7-a16d-8448e917437b"}
                appSECRET={"82e3e439-808c-4fbd-b450-955497e173db"}
                tagName={"a-propos"}
            />

            <HeroBannerComponent
                color={'--text-white'}
                bgColor={'--color-secondary'}
            >
                <Container   >
                    <Box>
                        <Typography  aria-label={'titre de la page'} component={'h1'} variant={'h2'} sx={{fontWeight: 'bold', fontSize: {xs: '2rem' , sm: '3.75rem'} }}  >
                            A Propos d'ItetsuLaTable
                        </Typography>
                        <Typography  aria-label={'sous titre de la page'}>
                            développeur web en freelance
                        </Typography>
                    </Box>
                </Container>
            </HeroBannerComponent>

            <Box py={10} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Container   >
                    <Typography aria-label={'Qui suis-je ? '} component={'h2'} variant={'h4'} sx={{fontWeight:'bold', mb:1}} >
                        Qui suis-je ?
                    </Typography>
                    <Typography sx={{textAlign:'justify'}}>
                        On me connaît sous le nom d'ItetsuLaTable ou bien d'Alexandre. Expert en ingénierie du web je mets tout mon savoir à votre disposition aux travers de mes services.
                        Étant développeur web full-stack, je peux réaliser vos sites internets les plus simples aux plus complexes ! Plus qu'un travail, <strong>c'est une passion</strong>. <br/>
                        Je fais de la veille technologique afin de connaîre ce qu'il se fait de mieux, pour vous. Je découvre de nouvelles choses et partage cela auprès des autres développeurs.
                        Fan de l'open source, j'ai moi-même créé plusieurs projets et je compte bien continuer dans cette voix.
                        Je suis jeune et dynamique, également passioné par le basket-ball, le roller et les jeux-vidéos. <br/>
                        Si tu as des questions me concernant ou bien envie de lancer ton projet n'hésite pas à
                        <Typography  sx={{
                            color:'var(--text-black)',
                            fontWeight:'bold',
                            marginLeft: 1,
                            textDecoration: 'underline',
                            cursor:'pointer'
                        }}
                            aria-label={'me cintacter'} component={'a'}
                            onClick={() => {scrollNavigate('/contact') }}>
                             me contacter
                        </Typography>
                    </Typography>


                </Container>
            </Box>

            <Box py={10} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{backgroundColor: 'var(--backgroundColor)', color: 'var(--text-white)'}}>
                <Container   >
                    <Typography aria-label={'Section open sources'} component={'h2'} variant={'h4'} sx={{fontWeight:'bold'}}>
                        Mes projets open sources
                    </Typography>
                    <Grid container spacing={4} mt={5} >
                        <Grid item xs={12} md={6}>
                            <OpenSourcesComponent
                                image={<img src={react} alt={'Logo react'}  loading={'lazy'} width={'50'}  />}
                                titre={'React scroll navigate'}
                                description={"Lors du changement de page React gère mal le scroll. Ce package" +
                                    " permet de simplifier la chose ! Il est possible de retourner au top de la page ou bien à une ref précise" }
                                link={'https://www.npmjs.com/package/react-scroll-navigate'}
                            />

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <OpenSourcesComponent
                                image={<img src={react} alt={'Logo react'}  loading={'lazy'} width={'50'}  />}
                                titre={'React MUI Snackbar'}
                                description={"Un package pour aider à l'utilisation des snackbars de matérial UI." +
                                    " Permet un meilleur retour utilisateur après une action, création de compte, connexion, envoi d'un formulaire d'une application React "}
                                link={'https://www.npmjs.com/package/react-mui-snackbar'}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <OpenSourcesComponent
                                image={<img src={react} alt={'Logo react'}  loading={'lazy'} width={'50'}  />}
                                titre={'React viewport detect'}
                                description={"Un package React facile à utiliser pour détecter le viewport. " +
                                    "Il permet de détecter si un élément est visible ou non dans la page en ce moment " +
                                    "et de lancer une action en fonction de la visibilité de l'élément à l'aide d'un boolean."}
                                link={'https://www.npmjs.com/package/react-viewport-detect'}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box py={10} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{backgroundColor: 'var(--text-white)', color: 'var(--text-black)'}}>
                <Container   >
                    <Typography aria-label={'Section pro'} component={'h2'} variant={'h4'} sx={{fontWeight:'bold'}}>
                        Mon parcours professionnel
                    </Typography>
                    <TimelineComponent >
                        <TimelineItemComponent
                            logo={dassault}

                            title={"2022 - 2023 - Web Factory - Développeur full stack"}
                            description={"Durant cette dernière année en alternance chez Dassault Systèmes, j'ai travaillé dans l'équipe de la Web Factory. L'équipe est chargée de" +
                                " maintenir le site de l'entreprise : 3ds.com ainsi que tous les sites reliés à ce domaine. En tant que développeur full-stack, j'ai participé " +
                                " au développement de fonctionnalités mineurs côté back-end (Drupal) et majeur côté front (Vue/Nuxt). Factorisation du code, amélioration de l'expérience utilisateur " +
                                " , simplifier la maintenance, création d'un design system et migration vers Vue3. J'ai travaillé sur plein de sujets divers, de manière autonome."}
                        />
                        <TimelineItemComponent
                            logo={dassault}

                            title={"2020 - 2022 - R&D Enovia Structure configurée - Développeur Front-end"}
                            description={"J'ai travaillé deux ans dans le secteur de la Recherche et du Développement (R&D) de Dassault Systèmes sur le logiciel Enovia dans l'équipe des structures configurées. " +
                                " Enovia possède plusieurs applications que l'on peut lancer en même temps. Le but de mon équipe est de gérer la configuration, le filtrage des données et des structures de données au travers de toutes " +
                                " les application lancées. En tant que développeur Front-end mon but a été de simplifier au maximum l'expérience utilisateur, de développer de nouveaux outils de configuration et de " +
                                " migrer les anciens outils vers une nouvelle librairie tout en m'assurant de gérer les diverses licences nécessaires et la sécurité d'Enovia. "}
                        />
                        <TimelineItemComponent
                            logo={dassault}
                            last
                            title={"2020 - Web Factory - Développeur Symfony"}
                            description={"J'ai réalisé un stage de fin d'études dans l'équipe de la Web Factory. Mon sujet était la création d'une application from scratch : Le gestionnaire de Taxonomie." +
                                " Le but de celui-ci est de centraliser toute la taxonomie de l'entreprise en gardent la source, la provenance. Cela a été la partie la plus simple." +
                                " Ensuite, il fallait aussi gérer les traductions de toutes les valeurs présentes et pour cela, j'ai réalisé un outil d'import / export en format JSON. " +
                                "Grâce à celui-ci on peut choisir toutes les langues voulues afin d'exporter un fichier JSON à remplir, puis il suffit de l'importer pour créer toutes les traductions (modifiables par la suite). " +
                                " Le dernier challenge a été de créer un outil de versionning afin de geler certains données en fonction des années. Cela permet de gérer la Taxonomie de 2020, 2021, 2022 ... "}
                        />




                    </TimelineComponent>


                </Container>
            </Box>

            <Box pb={10} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Container   >
                    <Typography aria-label={'titre section mon parcours'} component={'h2'} variant={'h4'} sx={{fontWeight:'bold', textAlign:'right'}} >
                        Mon parcours scolaire
                    </Typography>

                    <TimelineComponent align={'right'}>
                        <TimelineItemComponent
                            logo={esgi}
                            align={'left'}
                            title={'2021 -2023 Mastère Ingénierie du web ESGI'}
                            description={"Mastère spécialisée dans l'ingénierie du Web. Durant ces deux années intenses j'ai énormement appris. " +
                                "En commencant par les bases du JavaScript et les API du web puis en étudiant les divers librairies et frameworks tels que Symfony, React, Vue, Nest et TypeScript, Django, Web en temps réel ..." +
                                " J'ai réalisé plusieurs gros projets afin de mieux assimiler ces compétances. J'ai réalisé un site de gestion de tournoi en élimination directe et/ou Best Of 3 et 5 avec tout un système de classement et de satistiques. " +
                                " Ensuite, un jeu de black jack, puis un site e-commerce avec l'intégration d'un chatbot et d'un chat en ligne en temps réel. J'ai aussi développé ma plateforme de KPI équivalente à Google Analytics. Un site permettant d'adopter des animaux (Un Tinder pour adopter) " +
                                "et aussi un site de librairie avec la gestion des emprunts, des clubs de lecteurs et des évènements. La liste des projets réalisé est grande, et c'est grâce à cela que je suis devenu expert en développement Web."}
                        />
                        <TimelineItemComponent
                            logo={esgi}
                            align={'left'}
                            title={'2020-2021 Bachelor Ingénierie du web ESGI'}
                            description={"Bachelor spécialisé dans le Web. Une année courte et intense, en cours et en projet." +
                                " En effet, on a revu les bases du PHP, de l'HTML et du CSS avec un peu de JS pour les animations. " +
                                " Afin de pousser ces langages à leur apogée on a réalisé plusieurs projets. Le plus gros d'entre eux s'appellent JINGO." +
                                " Un CMS en PHP MVC réalisé from Scratch. Wireframe et Figma sont les deux choses par lesquelles j'ai commencé. Puis la réalisation du projet." +
                                " Ce CMS aide les écoles à réaliser un site internet. Gestion des matières, des cours, chapitre et des étudiants avec un système de QCM. Tout y est gérer. "}
                        />
                        <TimelineItemComponent
                            logo={iut}
                            align={'left'}
                            title={'2018-2020 IUT de Paris'}
                            last
                            description={"Directement après le bac je me suis spécialisé en informatique. " +
                                "Durant ces deux années j'ai étudié la logique informatique à travers divers projets et divers langages de programmation. " +
                                "Ici on s'intéresse qu'au WEB ! HTML, CSS, JS, PHP j'ai acquis tous les basiques. " +
                                "Portfolio, site pour parler d'un livre, site de QCM en ligne et le jeu du plus ou moins. " +
                                "Voici les projets que j'ai réalisé dans le cadre de mes études."}

                        />


                    </TimelineComponent>

                </Container>
            </Box>

        </Box>
    )
}
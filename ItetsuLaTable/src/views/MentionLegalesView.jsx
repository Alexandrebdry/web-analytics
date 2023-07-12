import {Container, Typography, Box} from "@mui/material";
import {Fragment, useEffect} from "react";
import useAnalyticsEventTracker from "@/component/hooks/useGoogleAnalytics";

export default function MentionLegalesView () {

    const gaEventTracker = useAnalyticsEventTracker() ;
    useEffect(() => {

        gaEventTracker({
            category : 'MentionLegalesPage',
            action : 'view',
            label : 'load'
        });

    },[]) ;

    const url = (<a aria-label={'Site itetsu la table'} href=' https://itetsulatable..com/' style={{marginRight: '2px'}}> https://itetsulatable..com/</a>)

    return (
        <Fragment>
            <Container sx={{ color: 'var(--text-black)' }}>
                <Typography mt={15} variant={"h2"}>
                    Mentions légales
                </Typography>

                <Box my={2}>
                    <Typography variant={'h4'}>
                        1. Présentation du site internet
                    </Typography>
                    <Typography>
                        <strong>Propiétaire</strong> : ItetsuLaTable Numéro de SIRET : 90366867100014 - 50 Rue d'Erevan 92130 Issy-les-Moulineaux
                    </Typography>
                    <Typography mt={1}>
                        <strong>Responsable publication</strong> : ItetsuLaTable - alexbaudry0@gmail.com
                        <br/> Le responsable communication est une personne physique ou morale
                    </Typography>
                    <Typography mt={1}>
                        <strong>Hébergeur</strong> : Netlify
                    </Typography>
                </Box>

                <Box my={2}>
                    <Typography variant={'h4'}>
                        2. Condition générales d'utilisations
                    </Typography>
                    <Typography>
                        Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables.
                        Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.
                    </Typography>
                    <Typography mt={1}>
                        L’utilisation du site {url} implique l’acceptation pleine et entière des conditions générales d’utilisation
                        ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment,
                        les utilisateurs du site {url} sont donc invités à les consulter de manière régulière.
                    </Typography>
                    <Typography mt={1}>
                        Ce site internet est normalement accessible à tout moment aux utilisateurs.
                        Une interruption pour raison de maintenance technique peut être toutefois décidée par {url}  ,
                        qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.
                    </Typography>
                    <Typography mt={1}>
                        Le site web {url} est mis à jour régulièrement par {url} responsable.
                        De la même façon, les mentions légales peuvent être modifiées à tout moment :
                        elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible
                        afin d’en prendre connaissance.
                    </Typography>
                </Box>

                <Box my={2} mb={15}>
                    <Typography variant={'h4'}>
                        3. Description des services
                    </Typography>
                    <Typography>
                        Le site internet {url} a pour objet de fournir une information concernant l’ensemble des activités de la société.
                    </Typography>
                    <Typography mt={1}>
                        {url} s’efforce de fournir sur le site {url} des informations aussi précises que possible.
                        Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences
                        dans la mise à jour, qu’elles soient de son fait ou du fait des tiers
                        partenaires qui lui fournissent ces informations.
                    </Typography>
                    <Typography mt={1}>
                        Toutes les informations indiquées sur le site {url} sont données à titre indicatif,
                        et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site {url}
                        ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
                    </Typography>
                </Box>
            </Container>
        </Fragment>
    )
}
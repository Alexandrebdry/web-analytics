import {Box, Typography} from "@mui/material";
import useAnalyticsEventTracker from "@/component/hooks/useGoogleAnalytics";
import {useEffect} from "react";

export default function NotFound () {

    const gaEventTracker = useAnalyticsEventTracker() ;
    useEffect(() => {

        gaEventTracker({
            category : '404 page',
            action : 'view',
            label : 'load'
        });

    },[])

    return (
        <Box sx={{height: '95vh'}} display={'flex'} justifyContent={'center'} alignItems={'center'} >
            <Typography  variant={'h2'}>
                La page n'existe pas
            </Typography>
        </Box>
    )
}
import {Fragment} from "react";
import {Box, IconButton, Typography} from "@mui/material";

export default function HighlightComponent ({icon, title, description, resize = false}) {

    return (
        <Fragment>
            { resize === false ?
                <Box sx={{maxWidth:'500px'}} display={'flex'} alignItems={'center'}   >
                    <Box  mr={3}  >
                        <IconButton  aria-label={'button logo ' + title}  disableRipple sx={{color:'var(--color-secondary)'}}  >
                            {icon}
                        </IconButton>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'}>

                        <Typography aria-label={'titre high light ' + title} component={'h3'} variant={'body1'} sx={{fontWeight: 'bold'}}  mb={2}>
                            {title}
                        </Typography>
                        <Typography  aria-label={'desc high light ' + title} variant={'body2'} sx={{textAlign: 'justify'}}>
                            {description}
                        </Typography>
                    </Box>

                </Box>
                :
                <Box sx={{maxWidth:'50%',  flexDirection: {xs: 'column' , md: 'row'} }} display={'flex'} alignItems={'center'}   >
                    <Box  mr={3}  >
                        <IconButton  aria-label={'button logo ' + title}  disableRipple sx={{color:'var(--color-secondary)'}}  >
                            {icon}
                        </IconButton>
                    </Box>

                    <Box display={'flex'} flexDirection={'column'}>

                        <Typography aria-label={'titre high light ' + title} component={'h3'} variant={'body1'} sx={{fontWeight: 'bold'}}  mb={2}>
                            {title}
                        </Typography>
                        <Typography  aria-label={'desc high light ' + title} variant={'body2'} sx={{textAlign: 'justify'}}>
                            {description}
                        </Typography>
                    </Box>

                </Box>
            }

        </Fragment>
    )
}
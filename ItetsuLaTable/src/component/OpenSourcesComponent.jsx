import {Fragment} from "react";
import {Avatar, Box, Button, Stack, Typography} from "@mui/material";

export default function ({link,titre,description,image}) {

    return (
        <Fragment>
            <Box>

                <Box display={'flex'} mb={2} sx={{minHeight:'150px'}}>
                    <Avatar sx={{
                        background: 'var(--text-black)',
                        border: '1px solid var(--text-white)',
                        alignSelf:'center' ,
                        width: 75,
                        height: 75,
                        mr: 2,
                    }} >
                        {image}
                    </Avatar>
                    <Stack>
                        <Typography aria-label={'Open source titre : ' + titre } component={'h3'} variant={'h5'} sx={{fontWeight:'bold'}} mb={1} >
                            {titre}
                        </Typography>
                        <Typography aria-label={'Open source description : ' + titre} sx={{ textAlign:'justify'}} >
                            {description}
                        </Typography>

                    </Stack>
                </Box>
                <Button
                    sx={{
                        color: 'var(--text-white)', width:'100%' ,
                        backgroundColor: 'var(--text-black)', '&:hover': {backgroundColor: '#000'}
                    }}
                    aria-label={'Lien vers le projet'} variant={'contained'} href={link} target={'_blank'} rel="noopener noreferrer" >
                    Voir le projet
                </Button>
            </Box>


        </Fragment>
    )
}
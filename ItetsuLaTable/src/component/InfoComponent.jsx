import {Avatar, Box, Container, Typography} from "@mui/material";
import {Fragment} from "react";

export default function InfoComponent ({numero, titre, description, comp = 'h3', variant = 'h4' , align = 'flex-start', middle= false }) {

    return (
        <Box display={'flex'} flexDirection={'column'}  alignItems={align}>
            <Box sx={{ display: 'flex' , alignItems:'center',mb :1}}>
                <Avatar sx={{backgroundColor: 'var(--color-secondary)',  mr: 2}} > {numero} </Avatar>
                <Typography aria-label={'Info titre ' + titre} component={comp} variant={variant}  sx={{fontWeight:'bold'}} >
                    {titre}
                </Typography>
            </Box>
                {
                    middle === false ?
                        <Typography aria-label={'Info description ' + titre} sx={{ textAlign:'justify' }} >
                            {description}
                        </Typography>
                        :
                        <Typography aria-label={'Info description ' + titre} sx={{ textAlign:'justify',  width: '50%' ,  margin: 'auto' }} >
                            {description}
                        </Typography>
                }
        </Box>
    )
}
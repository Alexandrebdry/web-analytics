import {Avatar, Box, Typography} from "@mui/material";


export default function IconComponent ({icon, titre}) {

    return (
        <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
            <Avatar sx={{ mb: 2 ,  width: 70 , height: 70 ,   backgroundColor : 'var(--color-secondary)' , "&:hover" : { backgroundColor: 'var(--backgroundColor)'} }}>
                {icon}
            </Avatar>
            <Typography aria-label={'icon ' + titre} sx={{textAlign:'center'}} component={'h2'} variant={'body1'}>
                {titre}
            </Typography>
        </Box>
    )
}
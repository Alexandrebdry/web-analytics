import {Box, Grid, Icon, Typography} from "@mui/material";
import {Construction} from "@mui/icons-material";

export default function ({icon, titre, description, darkmode = false}) {
    return (
        <Box  p={2}  display={'flex'} alignItems={'center'} sx={{
            transition: 'all',
            borderRadius: '5px' ,
            backgroundColor : darkmode === false ? 'none' : 'var(--color-secondary)' ,
            color : darkmode === false ? 'var(--text-black)' : 'var(--text-white)' ,
            "&:hover": {backgroundColor: darkmode === false ? 'var(--color-secondary)' : 'var(--backgroundColor)' , color:'var(--text-white)' }
        }}  >
            <Grid container spacing={2} sx={{  transition: 'transform 0.2s ease-in-out' ,
                "&:hover": {transform: "translate(5px,0)"} }}>
                <Grid item>
                    <Icon aria-label={'Icon du projet ' + titre}>
                        {icon}
                    </Icon>
                </Grid>
                <Grid item>
                    <Box>
                        <Typography aria-label={'titre du projet ' + titre} component={'h2'} sx={{fontWeight:'bold'}} >
                            {titre}
                        </Typography>
                        <Typography aria-label={'description du projet ' + titre}  sx={{textAlign:'justify'}}>
                            {description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
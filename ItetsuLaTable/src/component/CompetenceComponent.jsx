import {Avatar, Box, Typography} from "@mui/material";

export default function CompetenceComponent({image,titre, description, caption}) {


    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            sx={{
                border: '2px solid var(--color-secondary)' ,
                borderRadius:'5px',
                paddingY: '5px',
                minHeight:'150px',
                "&:hover": {
                    borderColor:'var(--backgroundColor)',
                    backgroundColor:'var(--color-secondary)',
                    color:'var(--text-white)' ,
                    boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
                }
            }}
        >
            <Avatar sx={{ width:'50px', height:'50px' , backgroundColor: 'var(--text-black)', border:'2px solid  var(--color-secondary)' }} >
                <img src={image} alt={'Logo de ' + titre }  loading={'lazy'} width={'40'} height={'40'}  />
            </Avatar>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
                 sx={{
                     textAlign: 'justify',
                     paddingX: '5px'
                 }}
            >

                <Typography aria-label={'titre competence ' + titre } component={'h3'} variant={'body1'} sx={{fontWeight: 'bold'}}  >
                    {titre}
                </Typography>
                <Typography aria-label={'caption competence ' + titre } variant={'caption'}>
                    {caption}
                </Typography>
                <Typography  aria-label={'desc competence ' + titre } variant={'body2'}          >
                    {description}
                </Typography>
            </Box>
        </Box>
    )
}
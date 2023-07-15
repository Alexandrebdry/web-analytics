import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {Avatar, Box, Typography} from "@mui/material";

export default function ({logo, numero = 0, title, description, align = 'right', last = false}) {



    return (
        <TimelineItem position={align}>

            <TimelineSeparator  >

                <TimelineDot sx={{backgroundColor: 'var(--text-white)', border:'1px solid var(--color-secondary)' }}  >
                    {numero === 0 ?
                        <Avatar src={logo} alt="timeline dot logo " sx={{objectFit: 'fit'}}/>
                        :
                        <Avatar sx={{ backgroundColor: 'var(--color-secondary)', border:'1px solid  var(--text-white)' }} >
                            {numero}
                        </Avatar>
                    }
                </TimelineDot>
                <TimelineConnector
                    sx={{
                        backgroundColor: 'var(--color-secondary)',
                        height: '100%',
                        paddingTop: last === true ? 0 : numero === 0 ? 10 : 5,
                    }}
                />

            </TimelineSeparator>
            {align === 'right' ?

                <TimelineContent>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography aria-label={'Timeline titre ' + title} component={'h3'} variant={'body1'}
                                    sx={{fontWeight: 'bold'}} mb={2}>
                            {title}
                        </Typography>
                        <Typography aria-label={'Timeline contenu ' + title} variant={'body2'}
                                    sx={{textAlign: 'justify'}}>
                            {description}
                        </Typography>
                    </Box>
                </TimelineContent>
                :
                <TimelineOppositeContent>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography aria-label={'Timeline titre ' + title} component={'h3'} variant={'body1'}
                                    sx={{fontWeight: 'bold', textAlign:'right'}} mb={2}>
                            {title}
                        </Typography>
                        <Typography aria-label={'Timeline contenu ' + title} variant={'body2'}
                                    sx={{textAlign: 'justify'}}>
                            {description}
                        </Typography>
                    </Box>
                </TimelineOppositeContent>
            }
        </TimelineItem>
    )
}
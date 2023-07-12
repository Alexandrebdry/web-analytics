import {Box} from "@mui/material";
import ParticlesComponent from "@/component/ParticlesComponent";

export default function HeroBannerComponent ({children, image = null, bgColor = '--text-white', color = '--text-black'}) {

    return (
            image !== null ?
                <Box   sx={{ flexGrow: 1 , backgroundImage: `url(${image})` , backgroundRepeat: 'no-repeat' , backgroundSize: 'cover'  }}  >
                    <Box sx={{backgroundColor: "rgba(0,0,0,0.3)"}}>
                        <Box display={'flex'}  alignItems={'center'} sx={{color: 'var(--text-white)', height:'100vh'}} >
                            { children }
                        </Box>
                    </Box>
                </Box>
                :
                <Box  sx={{ flexGrow: 1 , backgroundColor: 'var('+bgColor+')' , position : 'relative'}}  >
                    <ParticlesComponent/>
                    <Box display={'flex'}  alignItems={'center'} sx={{color: 'var('+color+')', height:'50vh'}} >
                        { children }
                    </Box>

                </Box>
    )
}
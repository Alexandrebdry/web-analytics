import AnimatedNumbers from "react-animated-numbers";
import {Fragment, useState} from "react";
import {Box, Icon, Typography} from "@mui/material";

export default function NumberComponent ({number, text, icon}) {
    const [num, setNum] = useState(number);

    return (
        <Fragment>
            <Box>
                <Box display={'flex'} alignItems={'center'} sx={{ fontWeight:'bold' }}>
                    <AnimatedNumbers
                        animateToNumber={num}
                        fontStyle={{ fontSize: 32 }}
                        configs={(number, index) => {
                            return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                        }}
                    ></AnimatedNumbers>
                    <Icon aria-label={'btn icon'}  sx={{color:'var(--text-white)', }} >
                        {icon}
                    </Icon>
                </Box>
                <Typography sx={{fontWeight: 'bold'}}>
                    {text}
                </Typography>
            </Box>



        </Fragment>




    )
}
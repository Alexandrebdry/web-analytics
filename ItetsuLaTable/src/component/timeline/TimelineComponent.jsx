import {Timeline, timelineContentClasses, timelineItemClasses} from "@mui/lab";
import {Fragment} from "react";

export default function ({align= 'left' ,children}) {

    return (
        <Fragment>
            {align === 'left' ?
                <Timeline
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >
                    {children}
                </Timeline>
                :
                <Timeline
                    sx={{
                        [`& .${timelineContentClasses.root}`]: {
                            flex: 0.2,
                        },
                    }}
                >
                    {children}
                </Timeline>
            }
        </Fragment>
    )
}
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Caption = ({ caption }) => {
    return(
        <Box m={3} display='flex' justifyContent='center'>
            <Typography>
                <Box fontWeight="fontWeightBold" >
                    {caption}
                </Box>
            </Typography>
        </Box>
    )
}

export default Caption;
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper({ width, height }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: { width },
                    height: { height },
                },
            }}
        >
            {/* <Paper elevation={0} />
      <Paper /> */}
            <Paper elevation={3} />

        </Box>
    );
}
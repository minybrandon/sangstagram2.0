import React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const LinkButton = () => {
    return (
        <Box display='flex'  flexDirection='row'  m={1} p={5}>
            <Box p={3}>
                <Link href="/">
                    <HomeIcon />
                </Link>
            </Box>
            <Box p={3}>
                <Link href="/search">
                    <SearchIcon />
                </Link>
            </Box>
            <Box p={3}>
                <Link href="/profile">
                    <AccountCircleIcon />
                </Link>
            </Box>
            
        </Box>
    )
}

export default LinkButton;

import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, ToolBar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

function Header() {
  return (
    <AppBar position='static'>
        <ToolBar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
                Travel advisor
            </Typography>
            <Box display='flex'>
                <Typography variant='h6' className={classes.title}>
                    Explore new places
                </Typography>
                <Autocomplete>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>
                </Autocomplete>
            </Box>
        </ToolBar>
    </AppBar>
  )
}

export default Header
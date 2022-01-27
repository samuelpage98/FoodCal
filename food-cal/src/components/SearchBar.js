import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('')

    const searchHandler = (event) => {
        setSearchText(event.target.value)
    }

    useEffect(() => {
        props.searchSubmitHandler(searchText)
    }, [searchText])

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{ display: "inline-block" }}>
                <TextField id="standard-basic" label="Search meals" variant="standard" onChange={searchHandler} />
                <IconButton aria-label="search" sx={{ marginTop: "12px" }} onClick={() => props.searchSubmitHandler(searchText)}>
                    <SearchIcon />
                </IconButton>
            </div>
        </Box>

    )
}

export default SearchBar

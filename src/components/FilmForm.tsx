import { Button, ButtonGroup, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { useState } from 'react'
import type { FilmFormPropsT, FilmT } from '../types/globalTypes'

const FilmForm = ({ handleCallSearchByTitle, resetFilmList }: FilmFormPropsT) => {
    const [film, setFilm] = useState<FilmT>({ id: crypto.randomUUID(), title: "", type: "movie",language:"" });
    const languageOptions = [
        { value: '', label: 'Select language' },
        { value: 'en', label: 'English' },
        { value: 'us', label: 'English/US' },
        { value: 'it', label: 'Italian' },
        { value: 'es', label: 'Spanish' },
        { value: 'fr', label: 'French' },
        { value: 'de', label: 'German' }
    ];

    function handleResetFilmList() {
        resetFilmList();
        setFilm({ id: crypto.randomUUID(), title: "", type: "movie",language:"it" });
    }

    function handleFilm(e: any) {
        let field = e.target.name;
        let value = e.target.value;

        setFilm(prev => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <Grid size={12}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <TextField className='text-primary' placeholder='Search' id='movie-field' name='title' autoComplete='off' label="Title" value={film.title} onChange={handleFilm} color='warning' focused sx={{ color: 'white', marginRight: 5, minWidth: "20rem" }} />
                <FormControl>
                    <RadioGroup
                        row
                        aria-labelledby="type"
                        defaultValue="movie"
                        name="type"
                        onChange={handleFilm}

                    >
                        <FormControlLabel value="movie" name="type" control={<Radio color='warning' sx={{ color: 'white' }} />} label="Movie" />
                        <FormControlLabel value="series" name="type" control={<Radio color='warning' sx={{ color: 'white' }} />} label="Serie" />
                    </RadioGroup>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} id="language-select" size="small" style={{width:170}}>
                    <Select
                        value={film.language}
                        label="Age"
                        name='language'
                        displayEmpty
                        onChange={handleFilm}>
                        {languageOptions?.map((option)=>{
                            return (
                                <MenuItem value={option.value}>{option.label}</MenuItem>
                            )
                        }) }
                    </Select>
                </FormControl>
                <FormControl>
                    <ButtonGroup variant="outlined" aria-label="search and reset buttons">
                        <Button variant='outlined' color='warning' sx={{ marginLeft: 5 }} onClick={() => handleCallSearchByTitle(film)}>search</Button>
                        <Button variant='outlined' color='error' sx={{ marginLeft: 5 }} onClick={() => handleResetFilmList()}>reset</Button>
                    </ButtonGroup>
                </FormControl>
                
            </Grid>

        </Grid>
    )
}

export default FilmForm
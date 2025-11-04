import { Grid } from '@mui/material'
import FilmForm from './FilmForm'
import FilmList from './FilmList'
import { useState,useRef } from 'react'
import { searchByTitle } from '../api/streamingAvailability'
import { ErrorDesc, type FilmT } from '../types/globalTypes'
import CustomSnackbar from './CustomSnackbar'

const Body = () => {
    const [films, setFilms] = useState([]);
    const [snackBarConfig, setSnackBarConfig] = useState({open:false, message:""});
    const languageRef = useRef<string>("");

    async function callSearchByTitle(params: FilmT) {
        setFilms([]);
        languageRef.current = params.language;
        if (params?.title && params.type && params.language) {
            try {
                const films = await searchByTitle(params?.title, params?.type,params.language);
                if (films.length > 0) {
                    setFilms(films);
                }
            } catch (error:any) {
                handleOpenSnackbar(Object.values(ErrorDesc).indexOf(error.message) !== -1 ? error.message : "An error occurred while fetching films");
            }


        } else {
            handleOpenSnackbar("Please check the title,type fields and language");
        }

    }

    function resetFilmList() {
        setFilms([]);
    }

    function handleOpenSnackbar(message:string) {
        const msg = message || "An error occurred";
        setSnackBarConfig({ open: true, message: msg });
    };
    function closeSnackbar() {
        setSnackBarConfig({  ...snackBarConfig,open: false });
    };

    return (
        <Grid id="body" container sx={{ flex: 1, mt: 2, mb: 0, display: 'flex', flexDirection: 'column' }}>
            <CustomSnackbar snackBarConfig={snackBarConfig} close={closeSnackbar} />
            <Grid size={12} flex={1} alignItems={'baseline'}>
                <FilmForm handleCallSearchByTitle={callSearchByTitle} resetFilmList={resetFilmList} />
            </Grid>
            <Grid size={12} flex={4}>
                <FilmList films={films} language={languageRef.current}/>
            </Grid>
        </Grid>
    )
}

export default Body
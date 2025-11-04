import { Backdrop, CircularProgress, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../api/axiosInstance';

const Loader = () => {
    const [loading,setLoading] = useState(false);

    let activeRequests = 0;

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      function (config) {
        if (activeRequests === 0) {
          setLoading(true);
        }
        activeRequests++;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      function (response) {
        activeRequests--;
        if (activeRequests === 0) {
          setLoading(false);
        }
        return response;
      },
      function (error) {
        activeRequests--;
        if (activeRequests === 0) {
          setLoading(false);
        }
        
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  
  return (
    <Grid container alignItems={'center'}>
        <Grid size={12} sx={{position:'relative'}}>
            <Backdrop open={loading} sx={{zIndex:(theme)=>theme.zIndex.drawer + 1}}>
                {loading && <CircularProgress style={{position:'absolute',top:200}} size={100} color='error' sx={{transform:'50%'}}/>}
            </Backdrop>
        </Grid>
    </Grid>
  )
}

export default Loader
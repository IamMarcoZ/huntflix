import { useState, useEffect } from 'react';
import mockedRes from '../api/response.json'
import { axiosInstance } from '../api/axiosInstance'

const mock = true;

function useFilmList(title: string, showType: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/shows/search/title',
    params: {
      country: 'it',
      title: title,
      series_granularity: 'show',
      show_type: showType,
      output_language: 'en'
    },
    headers: {
      'x-rapidapi-key': 'efb0657df5mshc131d534eeccdc0p18d8b1jsn65c4abf8e243',
      'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
    }
  };



  useEffect(() => {

    const fetchData = async () => {
      try {
        if (mock) {
          const response = mockedRes;
          setData(response)
        } else {
          const response = await axiosInstance.request(options);
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { data, error };
}

export default useFilmList;
import { axiosInstance } from './axiosInstance';
// import mockedRes from  './avengers.json'
// import mockedRes2 from './batman.json'
// import mockedRes3 from './lepagine.json'

// const mock = false;

export async function searchByTitle(title:String,showType:string,country:string):Promise<any> {

    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/shows/search/title',
        params: {
            country: country,
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

    try {
        // if(mock){
        //     const response = mockedRes3;
        //     return response
        // } else {
            const response = await axiosInstance.request(options);
            return response.data;
        // }
    } catch (error) {
        
    }
}


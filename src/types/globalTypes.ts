export type FilmT = {
    imageSet?: any
    language:string,
    id?:string,
    title:string,
    type:string,
    originalTitle?:string,
    overview?:string
    streamingOptions?: {
    [key: string]: any[]; 
  };
}

export type FilmFormPropsT = {
    handleCallSearchByTitle: (params:FilmT)=>void,
    resetFilmList: ()=>void
}

export type CustomCardPropsT = {
    film: FilmT,
    index:number
    learnMore:(film:FilmT)=>void,
    shortOverview:(overview:string|undefined)=>string|undefined
}

export enum ErrorDesc {
    NO_STREAMING_OPTIONS = "No films found with streaming options in the selected language"
}

export interface Config {
    streamerId : string | number 
    streamerName : string
    api : string
    primaryColor : string
    secondaryColor : string
    fontString : string
    font : string
    youtubeMetatag? : string
    geoApi : string
}

export const defaultConfig : Config = {
    streamerId : 14,
    streamerName : 'goodluck',
    api : 'https://compare.topadsservices.com',
    primaryColor : '#2b2b2b',
    secondaryColor : '#e1b96e',
    fontString : "",
    font : `'Roboto', sans-serif`,
    geoApi : 'https://api.ipgeolocation.io/ipgeo'
}

export let configuration : Config = {
    streamerId : 14,
    streamerName : 'goodluck',
    api : 'https://compare.topadsservices.com',
    primaryColor : '#2b2b2b',
    secondaryColor : '#e1b96e',
    fontString : "",
    font : `'Roboto', sans-serif`,
    geoApi : 'https://api.ipgeolocation.io/ipgeo'
}

export const setConfigurationFile = (newConfig  : Config = configuration) => {
    configuration = newConfig
}


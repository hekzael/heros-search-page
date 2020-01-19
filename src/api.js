
const apiKey='24b1895d742249906ad0e573e7cc5098';
const baseUrl = 'https://gateway.marvel.com:443/v1';
const hash = 'b47fb5b0cd984588b5760710179cd48c'/* '175422f7c0e7bb884d799c0b8bb4ed88' */
const ts = '1';
const characters = '/public/characters';
const byChartName = '?nameStartsWith=';

const img_size = {
  characterComic: 'portrait_small',
  character: 'portrait_incredible'
};

export const allChartUrl = `${baseUrl}${characters}?apikey=${apiKey}&hash=${hash}&ts=${ts}`;

export const getChartComicsUrl = characterId =>{
  console.log(characterId)
  return `${baseUrl}${characters}/${characterId}/comics?orderBy=focDate&apikey=${apiKey}&hash=${hash}&ts=${ts}`;}

export const getChartByNameUrl = query => 
  `${baseUrl}${characters}${byChartName}${encodeURIComponent(query)}&apikey=${apiKey}&hash=${hash}&ts=${ts}`;

export const getImageUrl = (url, ext, mode) => `${url}/${img_size[mode]}.${ext}`;

//1f6873f9da30a9768970e218bc0971f8cf3e3ba2724b1895d742249906ad0e573e7cc5098

//b47fb5b0cd984588b5760710179cd48c
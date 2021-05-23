import Url from 'url';
//import getUrlWithParamsConfig from './getUrlWithParamsConfig';

function req() {
	console.log('####: request');
	const uri = Url.format({
		protocol: 'https',
		host: 'zarmarathon.com',
		query: {
			name: 'Zar',
		}
	});

	console.log('####: uri', uri);
	//console.log('####: getUrlWithParamsConfig', getUrlWithParamsConfig('getPokemons'));
}
export default req;
import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object | null, addPath?: string | number):Promise<T> {
	const uri = Url.format(getUrlWithParamsConfig(endpoint, query, addPath));
	console.log('####: uri', uri);
	return await fetch(uri).then((res) => res.json());
}
export default req;
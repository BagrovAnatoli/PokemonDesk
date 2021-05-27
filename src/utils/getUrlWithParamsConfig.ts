import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: object | null, addPath?: string | number): object {


	const path = config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri.pathname + '/' + addPath;
	let url = {
		...config.client.server,
		path,
		query
	};
	console.log('####: url', url);
	return url;
}

export default getUrlWithParamsConfig;
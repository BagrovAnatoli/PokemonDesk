import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: object): object {
	let url = {
		...config.client.server,
		...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
		query
	};
	return url;
}

export default getUrlWithParamsConfig;
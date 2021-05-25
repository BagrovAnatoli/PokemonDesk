import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string): object {
	let url = {
		...config.client.server,
		...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri
	};
	return url;
}

export default getUrlWithParamsConfig;
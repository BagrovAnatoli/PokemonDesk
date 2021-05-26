import {useState, useEffect} from 'react';
import req from "../utils/request";
//import {IPokemons, IData} from '../interface/pokemons';

const useData = (endpoint: string, query: object, deps: any[] = []) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const getData = async() => {
			setIsLoading(true);
			try{
				const result = await req(endpoint, query);

				setData(result);
				setIsError(false);
			} catch (e) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}
		getData();
	}, deps);

	return {
		data,
		isLoading,
		isError
	}
}

export default useData;
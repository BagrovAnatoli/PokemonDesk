import {useState, useEffect} from 'react';
import req from "../utils/request";
//import {IPokemons, IData} from '../interface/pokemons';

const useData = <T>(endpoint: string, query: object | null, deps: any[] | null = [], addPath?: string | number) => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		const getData = async(): Promise<void> => {
			setIsLoading(true);
			try{
				const result = await req<T>(endpoint, query);

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
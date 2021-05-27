import React, {useState, useEffect} from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
//import { pokemons } from './assets/pokemons';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import req from "../../utils/request";

import {IPokemons, PokemonsData} from '../../interface/pokemons'

import s from './Pokedex.module.scss';


interface IQuery {
	name?: string;
	limit: number;
}

const PokedexPage = () => {
	const [searchValue, setSearchValue] = useState('');
	const [query, setQuery] = useState<IQuery>({
		limit: 12
	});
	const debouncedValue = useDebounce(searchValue, 500);

	// const query = useMemo(() => ({
	// 	name: searchValue
	// }),[searchValue]);
	const {
		data,
		isLoading,
		isError
	} = useData<IPokemons>('getPokemons', query, [debouncedValue]);

	const handleSearhChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('####: e', e.target.value);
		setSearchValue(e.target.value);
		setQuery((state: IQuery) => ({
			...state,
			name: e.target.value
		}));
	}


	// if (isLoading) {
	// 	return <div>Loading...</div>
	// }

	if (isError) {
		return <div>Something wrong!</div>
	}

	return (
		<>
			<Layout className={s.root}>
				<Heading hType='h3'>
					{!isLoading && data && data.total} <b>Pokemons</b> for you to choise favorite
				</Heading>
				{/*
				<div>
					{data?.pokemons.map((item: any) => <div>{item.name}</div>)}
				</div>
				*/}
				<div>
					<input type="text" value={searchValue} onChange={handleSearhChange}/>
				</div>
			
				<div className={s.root}>
					<div id={s.wrapper}>
						<div id={s.content}>
							{
								!isLoading && data && data.pokemons.map((pokemon: PokemonsData) => {
									return <PokemonCard
										key={pokemon.name}
										pokemon={pokemon}
									/>
								})
							}
						</div>	
					</div>
				</div>
			</Layout>
		</>
	);
};

export default PokedexPage;
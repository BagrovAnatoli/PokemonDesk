import React, {useEffect, useState} from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
//import { pokemons } from './assets/pokemons';

import s from './Pokedex.module.scss';

const usePokemons = () => {
	const [data, setData] = useState<IData>();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const getPokemons = async() => {
			setIsLoading(true);
			try{
				const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
				const result = await response.json();

				setData(result);
				setIsError(false);
			} catch (e) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}
		getPokemons();
	}, []);

	return {
		data,
		isLoading,
		isError
	}
}


// interface EmptyPageProps {
// 	title?: string;
// };
//console.log('pokemons: ', pokemons);
interface IData {
		total: number;
		count: number;
		offset: number;
		limit: number;
		pokemons: IPokemon[];
	}
interface IPokemon {
}

const PokedexPage = () => {
	const {
		data,
		isLoading,
		isError
	} = usePokemons();


	if (isLoading) {
		return <div>Loading...</div>
	}

	if (isError) {
		return <div>Something wrong!</div>
	}

	return (
		<>
			<Layout className={s.root}>
				<Heading hType='h3'>
					{data?.total} <b>Pokemons</b> for you to choise favorite
				</Heading>
				<div>
					{data?.pokemons.map((item: any) => <div>{item.name}</div>)}
				</div>
			</Layout>
			
			{/*
			<div className={s.root}>
				<div id={s.wrapper}>
					<div id={s.content}>
						{
							pokemons.map((pokemon) => {
								return <PokemonCard
									key={pokemon.name}
									pokemon={pokemon}
								/>
							})
						}
					</div>	
				</div>
			</div>
			*/}
		</>
	);
};

export default PokedexPage;
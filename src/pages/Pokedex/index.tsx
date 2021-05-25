import React, {useEffect, useState} from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
//import { pokemons } from './assets/pokemons';
import req from "../../utils/request";

import s from './Pokedex.module.scss';

const usePokemons = () => {
	const [data, setData] = useState<IData>();
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const getPokemons = async() => {
			setIsLoading(true);
			try{
				const result = await req('getPokemons');

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
	"name_clean": string;
    "abilities": string[];
    "stats": {
      "hp": number;
      "attack": number;
      "defense": number;
      "special-attack": number;
      "special-defense": number;
      "speed": number;
    },
    "types": string[];
    "img": string;
    "name": string;
    "base_experience": number;
    "height": number;
    "id": number;
    "is_default": boolean;
    "order": number;
    "weight": number;
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
				{/*
				<div>
					{data?.pokemons.map((item: any) => <div>{item.name}</div>)}
				</div>
				*/}
			
			
				<div className={s.root}>
					<div id={s.wrapper}>
						<div id={s.content}>
							{
								data?.pokemons.map((pokemon) => {
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
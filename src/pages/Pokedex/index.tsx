import React, {useEffect, useState} from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
//import { pokemons } from './assets/pokemons';

import s from './Pokedex.module.scss';


// interface EmptyPageProps {
// 	title?: string;
// };
//console.log('pokemons: ', pokemons);
interface IPokemon {

}

const PokedexPage = () => {
	const [totalPokemons, setTotalPokemons] = useState(0);
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('http://zar.hosthot.ru/api/v1/pokemons')
		.then(res => res.json())
		.then(data => {
			console.log('####: res', data);
			setTotalPokemons(data.total);
			setPokemons(data.pokemons);
			setIsError(false);
		})
		.catch(() => {
			setIsError(true);
		})
		.finally(() => {
			setIsLoading(false);
		});
	}, []);

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
					{totalPokemons} <b>Pokemons</b> for you to choise favorite
				</Heading>
				<div>
					{pokemons.map((item: any) => <div>{item.name}</div>)}
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
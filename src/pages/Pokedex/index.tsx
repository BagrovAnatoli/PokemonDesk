import React from 'react';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import { pokemons } from './assets/pokemons';

import s from './Pokedex.module.scss';


// interface EmptyPageProps {
// 	title?: string;
// };
console.log('pokemons: ', pokemons);
const PokedexPage = () => {
	return (
		<div className={s.root}>
			<Header />
			<div id={s.wrapper}>
				<div id={s.content}>
					{
						pokemons.map((pokemon) => {
							return <PokemonCard
								key={pokemon.id}
								pokemon={pokemon}
							/>
						})
					}
				</div>	
			</div>
		</div>
	);
};

export default PokedexPage;
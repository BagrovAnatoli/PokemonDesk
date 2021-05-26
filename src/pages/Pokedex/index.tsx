import React, {useState} from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
//import { pokemons } from './assets/pokemons';
import useData from '../../hook/getData';
import req from "../../utils/request";

import {IPokemons, PokemonsData} from '../../interface/pokemons'

import s from './Pokedex.module.scss';




// interface EmptyPageProps {
// 	title?: string;
// };
//console.log('pokemons: ', pokemons);

// interface IData {
// 		total: number;
// 		count: number;
// 		offset: number;
// 		limit: number;
// 		pokemons: IPokemon[];
// 	}

// interface IPokemon {
// 	"name_clean": string;
//     "abilities": string[];
//     "stats": {
//       "hp": number;
//       "attack": number;
//       "defense": number;
//       "special-attack": number;
//       "special-defense": number;
//       "speed": number;
//     },
//     "types": string[];
//     "img": string;
//     "name": string;
//     "base_experience": number;
//     "height": number;
//     "id": number;
//     "is_default": boolean;
//     "order": number;
//     "weight": number;
// }

interface IQuery {
	name?: string;
}

const PokedexPage = () => {
	const [searchValue, setSearchValue] = useState('');
	const [query, setQuery] = useState<IQuery>({});

	// const query = useMemo(() => ({
	// 	name: searchValue
	// }),[searchValue]);
	const {
		data,
		isLoading,
		isError
	} = useData<IPokemons>('getPokemons', query, [searchValue]);

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
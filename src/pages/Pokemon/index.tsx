import React, {useState, useEffect} from 'react';
import useData from '../../hook/getData';
import req from "../../utils/request";
import s from './Pokemon.module.scss';

export interface PokemonProps {
	id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {

	const {
		data,
		isLoading,
		isError
	} = useData('getPokemon', null, null, id);
	console.log(data);

	return (
		<div>
			<div>
			This is pokemon id equal {id}
			</div>
		</div>
	);
};

export default Pokemon;
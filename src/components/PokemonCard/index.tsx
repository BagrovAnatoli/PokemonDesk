import React from 'react';
import s from './PokemonCard.module.scss';
import Heading from "../Heading";

interface PokemonCardProps {
    pokemon: {
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
  };
 }

const toFirstUpperCase = (s: string): string => s[0].toUpperCase() + s.substr(1).toLowerCase();

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    //console.log('pokemon', pokemon);
    return (
        <div className={s.root}>
            <div className={s.infoWrap}>
                <Heading hType='h4' className={s.titleName}>
                    {toFirstUpperCase(pokemon.name)}
                </Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {pokemon.stats.attack}
                        </div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {pokemon.stats.defense}
                        </div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {pokemon.types.map((pokemonType: string) => {
                        return (<span className={s.label} key={pokemonType}>{toFirstUpperCase(pokemonType)}</span>);
                    })}
                </div>
            </div>
            <div className={s.pictureWrap}>
                <img src={pokemon.img} alt={toFirstUpperCase(pokemon.name)} />
            </div>
        </div>
    );
};

export default PokemonCard;
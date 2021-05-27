export interface IPokemons {
  total: number;
  pokemons: PokemonsData[];
}

let pokemonsData = {
  "name_clean":"staryu",
   "abilities":[
     "illuminate",
     "natural-cure",
     "analytic"
   ],
   "stats":{
     "hp":30,
     "attack":45,
     "defense":55,
     "special-attack":70,
     "special-defense":55,
     "speed":85
   },
   "types":["water"],
   "img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
   "name":"staryu",
   "base_experience":68,
   "height":8,
   "id":120,
   "is_default":true,
   "order":181,
   "weight":345
 };

 export type PokemonsData = typeof pokemonsData;


//  export interface IData {
//   total: number;
//   count: number;
//   offset: number;
//   limit: number;
//   pokemons: IPokemons[];
// }

// {
//     {
//     "name_clean": string;
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
//   };
//  }
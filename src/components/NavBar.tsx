import React from "react";

interface PokemonProps {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Array<PokemonProps>;
}

const NavBar: React.FC<NavBarProps> = ({ pokemonList, setPokemonIndex }) => {
  return (
    <>
      {pokemonList.map((pokemon, index) => {
        return (
          <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
            {pokemon.name}
          </button>
        );
      })}
    </>
  );
};

export default NavBar;

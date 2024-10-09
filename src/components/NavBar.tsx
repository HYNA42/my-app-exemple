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

const NavBar: React.FC<NavBarProps> = ({
  pokemonList,
  pokemonIndex,
  setPokemonIndex,
}) => {
  const handleNext = () => {
    if (pokemonList.length - 1 > pokemonIndex) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  return (
    <>
      {pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}

      {pokemonList.length - 1 > pokemonIndex && (
        <button onClick={handleNext}>Suivant</button>
      )}
    </>
  );
};

export default NavBar;

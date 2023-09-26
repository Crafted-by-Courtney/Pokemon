import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Index extends React.Component  {
  render () {
  const pokemon = this.props.pokemon
  return (
    <div style={myStyle}>
      <h1>See All The Pokemon!</h1>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>
            <img src={poke.img} alt={poke.name} />
            <p>Name: {capitalizeFirstLetter(poke.name)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
}

module.exports = Index;

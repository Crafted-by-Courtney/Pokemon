import React from 'react';
import pokemon from '../models/pokemon';

// Inline styles as an object
const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 style={myStyle}>See All The Pokemon!</h1>
        <ul>
            {pokemon.map((pokemon, i) => {
                return (
                <li>
                    The{' '}
                    <a href={`/pokemon/${i}`}>
                        {pokemon.name}
                    </a>{' '}
                    looks like {pokemon.img} 
                </li>
                );
            })}
        </ul>
      </div>
    );
  }
}

export default Index;

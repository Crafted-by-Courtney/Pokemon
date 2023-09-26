// import React from 'react';

// const myStyle = {
//   color: '#ffffff',
//   backgroundColor: '#000000',
// };

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// class Show extends React.Component {
//   render() {
//     const { pokemon } = this.props;
//     const { id } = this.props.match.params; // Get the 'id' parameter from the URL

//     // Ensure 'id' is a valid index within the 'pokemon' array
//     if (id >= 0 && id < pokemon.length) {
//       const poke = pokemon[id];

//       return (
//         <div style={myStyle}>
//           <h1>Gotta Catch 'Em All</h1>
//           <h2>{capitalizeFirstLetter(poke.name)}</h2>
//           <img src={poke.img} alt={poke.name} />
//           <a href="/pokemon">Back</a>
//         </div>
//       );
//     } else {
//       return (
//         <div style={myStyle}>
//           <h1>Pokemon Not Found</h1>
//           <a href="/pokemon">Back</a>
//         </div>
//       );
//     }
//   }
// }

// export default Show;

import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Show extends React.Component {
  render() {
    const { pokemon, id } = this.props;

    // Ensure 'id' is within valid bounds
    if (id >= 0 && id < pokemon.length) {
      const poke = pokemon[id];

      return (
        <div style={myStyle}>
          <h1>Gotta Catch 'Em All</h1>
          <h2>{capitalizeFirstLetter(poke.name)}</h2>
          <img src={poke.img} alt={poke.name} />
          <a href="/pokemon">Back</a>
        </div>
      );
    } else {
      return (
        <div style={myStyle}>
          <h1>Pokemon Not Found</h1>
          <a href="/pokemon">Back</a>
        </div>
      );
    }
  }
}

export default Show;

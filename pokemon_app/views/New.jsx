// import React from 'react';

// const myStyle = {
//   color: '#ffffff',
//   backgroundColor: '#000000',
// };

// class New extends React.Component {
//   render() {
//     return (
//         <div>
//             <h1>New Pokemon page</h1>
//             <form action="/pokemon" method="POST">
//                 Name: <input type="text" name="name" /><br/>
//                 //Image: <img src='https://img.pokemondb.net/artwork/{name}.jpg' /><br/>
//                 <input type="submit" name="" value="Create Pokemon"/>
//              </form>
//         </div>);
//   }
// }

// module.exports = New;

import React from 'react';

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imgURL: '', // Store the image URL here
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    // Generate the image URL based on the entered name
    const imgURL = `https://img.pokemondb.net/artwork/${value}.jpg`;
    this.setState({ imgURL });
  };

  render() {
    return (
      <div style={myStyle}>
        <h1>New Pokemon Page</h1>
        <form action="/pokemon" method="POST">
            Name: <input type="text" name="name" /><br/>
            <input type="submit" value="Create Pokemon" />
        </form>

      </div>
    );
  }
}

export default New;

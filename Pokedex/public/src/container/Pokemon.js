import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      abilities: [],
      height: null,
      moves:[],
      weight:null,
      image:null,
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            isLoaded: true,
            abilities: result.abilities,
            height: result.height,
            weight:result.weight,
            moves: result.moves,
            image: result.sprites.back_default
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, abilities,moves } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <>
          <h1>Image</h1>

          <img src={this.state.image} alt="pokemon"/>
          <h1>Abilities</h1>
        <ul>
          {abilities.map((item,ind) => (
            <li key={ind}>
              {item.ability.name}
            </li>
          ))}
        </ul>
        <h1>Moves</h1>
        <ul>
          {moves.map((item,ind) => (
            <li key={ind}>
              {item.move.name}
            </li>
          ))}
        </ul>
        <h1>Height</h1>
        {this.state.height}: 
        <h1>Weight</h1>
        {this.state.weight}
        
        </>
      );
    }
  }
}

export default Pokemon;
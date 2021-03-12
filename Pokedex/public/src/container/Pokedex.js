import React from 'react';
import {
 Link,
} from "react-router-dom";
import styles from "./style.module.css";
class Pokedex extends React.Component {
  state= {  
      error: null,
      isLoaded: false,
      items: [],
      currentPage:1,
      count:0
    
  }
    nextPage=()=>{          
     let cnow=this.state.count;      
      cnow+=50;
      console.log(cnow);
      this.setState({
          count:cnow
      });
      console.log(this.state.count);
      
       this.componentDidMount();
  }

  prevPage=()=>{          
     let cnow=this.state.count;    
     if(cnow>50){  
      cnow-=50;
      console.log(cnow);
      this.setState({
          count:cnow
      });
      console.log(this.state.count);
      
       this.componentDidMount();
     }
  }

  componentDidMount() {
      var url=`https://pokeapi.co/api/v2/pokemon?offset=${this.state.count}&limit=20`;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          this.setState({
            isLoaded: true,
            items: result.results
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <>
        <ul>
          {items.map((item,ind) => (
                            
            <li key={ind}>
              <text className={styles.poke}>{item.name}</text> <Link className={styles.link}to='/pokemon' onClick={()=>{localStorage.setItem('url', item.url);}}>Abilities</Link>
            </li>
            
            
          ))}
        </ul>
        <button onClick={this.nextPage}>Next</button>
        <button onClick={this.prevPage}>Prev</button>
        </>
      );
    }
  }
}

export default Pokedex;

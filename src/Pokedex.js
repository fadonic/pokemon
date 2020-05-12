import React, { Component } from 'react'
import PokeCard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
  render () {
    return (
      <div className='Pokedex'>
        <h1>Pokedex!</h1>
        <p>Total Experience: {this.props.exp}</p>
        <p className={this.props.isWinner ? 'isWinner' : 'isLooser'}>
          {this.props.isWinner ? 'WINNER' : 'LOSER'}
        </p>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map(p => {
            return (
              <PokeCard
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Pokedex

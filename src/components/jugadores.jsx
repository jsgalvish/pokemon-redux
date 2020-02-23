import React from 'react';
import { connect } from 'react-redux';

const Jugadores = ({ pokemons, agregarTitular, agregarSuplente }) => (
  <section>
    <h2> Jugadores </h2>
    <div className="contenedor-jugadores">
      {
        pokemons.map( (p) => (
          <article key={p.id}>
            <h4>{p.name}</h4>
            <img src={p.picture} alt={p.name} />
            <div>
              <button type="button" onClick={() => agregarTitular(p)}>Titular</button>
              <button type="button" onClick={() => agregarSuplente(p)}>Suplente</button>
            </div>
          </article>
        ))
      }
    </div>
  </section>
)

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
})

const mapDispatchToProps = (dispatch) => ({
  agregarTitular(pokemon){
    dispatch({
      type: 'AGREGAR_TITULAR',
      pokemon,
    });
  },
  agregarSuplente(pokemon){
    dispatch({
      type: 'AGREGAR_SUPLENTE',
      pokemon,
    });
  },
})

export default connect(mapStateToProps,mapDispatchToProps)(Jugadores);

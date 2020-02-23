import React from 'react';
import { connect } from 'react-redux';

const Titulares = ({titulares, quitarTitular}) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha">
      {
        titulares.map( (p) => (
          <article className="titular" key={p.id}>
            <div>
              <p>{p.name}</p>
              <button type="button" onClick={() => quitarTitular(p)}>x</button>
            </div>
            <img src={p.picture} alt={p.name} />
          </article>
        ))
      }
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(pokemon) {
    dispatch({
      type: 'QUITAR_TITULAR',
      pokemon,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);

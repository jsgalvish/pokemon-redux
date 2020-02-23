import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({suplentes, quitarSuplente}) => (
  <section>
    <h2>Suplentes</h2>
    <div>
      {
        suplentes.map((p) => (
          <article className="suplentes" key={p.id}>
            <div>
              <p>{p.name}</p>
              <button type="button" onClick={() => quitarSuplente(p)}>X</button>
            </div>
            <img src={p.picture} alt={p.name} />
          </article>
        ))
      }
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const mapDispatchToProps = (dispatch) => ({
  quitarSuplente(pokemon) {
    dispatch({
      type: 'QUITAR_SUPLENTE',
      pokemon,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);

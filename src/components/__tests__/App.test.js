import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

/**
 * @param string
 * @param promise
 */
it('shows a comment box', () => {
  const div = document.create('div');
  /**
   * Este div no se crea en un document de un browser
   * sino en ReactDom (JSDOM)
   */
  ReactDOM.render(<App />, div);
  /**
   * El renderizado de este div, en realidad no ocurre dentro de lo
   * que se ejecuta en el navegador. Pero react "cree" que sí se
   * ejecuta en el entorno de un navegador.
   *
   * De tal forma, se pretende darle realismo a las pruebas, sin que
   * el performance se vea afectado
   */
  ReactDOM.unmountComponentAtNode(div);

  /**
   * Finalmente, cuando termine nuestro test, es necesario limpiar
   * la memoria de estos "elementos HTML fantasmas"
   */
});

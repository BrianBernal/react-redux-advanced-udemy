import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

/**
 * @param string
 * @param promise
 */
it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if the CommentBox is there

  ReactDOM.unmountComponentAtNode(div);

  /**
   * Finalmente, cuando termine nuestro test, es necesario limpiar
   * la memoria de estos "elementos HTML fantasmas"
   */
});

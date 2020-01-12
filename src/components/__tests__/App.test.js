import React from 'react';
import { shallow } from 'enzyme'; // shallow render. See notebooks!
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
  const wrapped = shallow(<App />);
  /**
   * wrapped para indicar que estamos trayendo es una
   * versión wrapped de App. Así pues wrapped es un
   * component, por lo que también sería valido llamarlo
   * 'component'
   */

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

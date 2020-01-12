import React from 'react';
import { shallow } from 'enzyme'; // shallow render. See notebooks!
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const wrapped = shallow(<App />);
/**
 * wrapped para indicar que estamos trayendo es una
 * versión wrapped de App. Así pues wrapped es un
 * component, por lo que también sería valido llamarlo
 * 'component'
 */
it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

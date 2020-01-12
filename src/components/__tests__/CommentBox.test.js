import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />); // wrapper = component
}); // Order execution: First

afterEach(() => {
  wrapped.unmount();
}); // Order execution: Third

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
}); // Order execution: Second

it('has a textarea that users can type in', () => {
  //step 1. Find the textarea element
  //step 2. Simulate a 'change' event in the element
  wrapped.find('textarea').simulate('change', {
    // el evento se refiere al contexto HTML, no al de jsx.
    target: { value: 'new comment' }
  });
  // target hace referencia a e.target.value
  // Es como si lanzaramos el evento dentro del cual
  // se le da el value 'new comment'. Esto para evaluar
  // el evento del textare (simulate the event)

  /**
   * Ahora es necesario forzar el render porque el render
   * normal de react depende de la asincronía de setState({})
   */
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// El proposito de enzyme-react es tener la habilidad de escribir
// algunos expetations que trabajan mejor con react (un poquito)

Enzyme.configure({ adapter: new Adapter() });

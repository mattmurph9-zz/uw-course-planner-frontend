import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorld from '../components/HelloWorld';

describe(HelloWorld, () => {
    const name = 'Person';
    const mockRemoveGreeting = jest.fn();
    const component = shallow(
        <HelloWorld name={name} removeGreeting={mockRemoveGreeting} />
    );
    it('renders and matches snapshot', () => {
        const component = renderer.create(
            <HelloWorld name="Person" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('contains the supplied name', () => {
        expect(component.text()).toContain(name);
    });
    it('modifies greeting when Change Language button is clicked', () => {
        component.find('button.changeLang').simulate('click');
        expect(component.text()).toContain('Bonjour');
        component.find('button.changeLang').simulate('click');
        expect(component.text()).toContain('Hello');
    });
    it('calls the passed in removeGreeting function when remove button is clicked', () => {
        component.find('button.remove').simulate('click');
        expect(mockRemoveGreeting).toHaveBeenCalled();
    });
});
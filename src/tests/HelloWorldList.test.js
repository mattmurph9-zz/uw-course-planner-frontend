import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorldList from '../components/HelloWorldList';
import AddGreeter from '../components/AddGreeter';
import HelloWorld from '../components/HelloWorld';
describe(HelloWorldList, () => {
  const component = shallow(
    <HelloWorldList />
  );
  // Add the rest of our tests here
  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <HelloWorldList />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('contains an AddGreeter subcomponent', () => {
    expect(component.find(AddGreeter)).toHaveLength(1);
  });
  it('contains the same number of HelloWorld components as greetings', () => {
    const helloWorlds = component.find(HelloWorld).length;
    const greetings = component.state('names').length;
    expect(helloWorlds).toEqual(greetings);
  });
  it('adds another greeting when the add greeting function is called', () => {
    const before = component.find(HelloWorld).length;
    component.instance().addGreeting('Test');
    component.update();
    const after = component.find(HelloWorld).length;
    expect(after).toEqual(before + 1);
  });
  it('removes a greeting from the list when the remove greeting function is called', () => {
    const before = component.find(HelloWorld).length;
    const remove = component.state('names')[0];
    component.instance().removeGreeting(remove);
    component.update();
    const after = component.find(HelloWorld).length;
    expect(after).toEqual(before - 1);
  });
});
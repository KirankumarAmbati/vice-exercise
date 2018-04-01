import React from 'react';
import renderer from 'react-test-renderer';
import ShowList from '../src/components/ShowList';

const handler = () => { };
test('ShowList component baseline', () => {
  const component = renderer.create(<ShowList handler={handler} activeIndex={3} rightBound={10} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ShowList component edge case', () => {
  const component = renderer.create(<ShowList handler={handler} activeIndex={9} rightBound={10} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

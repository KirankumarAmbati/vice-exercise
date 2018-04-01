import React from 'react';
import renderer from 'react-test-renderer';
import FeaturedShow from '../src/components/FeaturedShow';

const testShow = {
  id: 'a1',
  title: 'Gaycation',
  episodes: 24,
  product_image_url: '/images/gaycation.jpg',
};

test('FeaturedShow component', () => {
  const component = renderer.create(<FeaturedShow show={testShow} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import Row from '@/components/row';

test('Row renders correctly', () => {
  const component = renderer.create(<Row>content</Row>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Row renders className correctly', () => {
  const component = renderer.create(<Row className="className">content</Row>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

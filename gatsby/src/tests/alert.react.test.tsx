import { Alert } from '@/components/alert';
import React from 'react';
import renderer from 'react-test-renderer';

test('Alert box renders correctly', () => {
  const component = renderer.create(<Alert message="Testovací message" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

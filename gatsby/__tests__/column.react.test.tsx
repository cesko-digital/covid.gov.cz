import React from 'react';
import renderer from 'react-test-renderer';

import Col from '@/components/col';

test('Column renders correctly', () => {
  const component = renderer.create(<Col />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Column with content renders correctly', () => {
  const component = renderer.create(<Col>content</Col>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Column with responsive column classes renders correctly', () => {
  const component = renderer.create(
    <Col col={11} colSm={12} colMd={9} colLg={6} colXl={6} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Column with additional class names renders correctly', () => {
  const component = renderer.create(<Col className="class" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Column with available align-self properties renders correctly', () => {
  const component = renderer.create(
    <>
      <Col alignSelf="start" />
      <Col alignSelf="center" />
      <Col alignSelf="end" />
    </>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

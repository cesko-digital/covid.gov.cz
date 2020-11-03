import React from 'react';
import renderer from 'react-test-renderer';

import Button from '@/components/button';
import { Add } from '@material-ui/icons';

test('Button renders button element', () => {
  const component = renderer.create(
    <>
      <Button />
      <Button href="" />
    </>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders text correctly', () => {
  const component = renderer.create(<Button text="VÍCE" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders icon correctly', () => {
  const component = renderer.create(<Button icon={<Add />} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders variants correctly', () => {
  const component = renderer.create(
    <>
      <Button variant="contained" />
      <Button variant="outline" />
      <Button variant="secondary" />
      <Button variant="outline-black" />
      <Button variant="small-black" />
    </>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button does not render unknown variants', () => {
  const component = renderer.create(
    <>
      <Button variant="whatever-button" />
    </>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders additional class correctly', () => {
  const component = renderer.create(<Button className="whatever-button" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders onClick correctly', () => {
  const toggleSection = () => {};
  const component = renderer.create(<Button onClick={toggleSection} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders link correctly', () => {
  const component = renderer.create(<Button href="#" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders disabled state correctly ', () => {
  const component = renderer.create(
    <>
      <Button disabled />
      <Button href="#" disabled />
      <Button href="" disabled />
    </>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// disabled

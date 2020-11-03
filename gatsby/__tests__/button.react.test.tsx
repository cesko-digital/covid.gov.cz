import React from 'react';
import renderer from 'react-test-renderer';

import Button from '@/components/button';
import { Add } from '@material-ui/icons';

test('Button renders HTML button element (not anchor element)', () => {
  const component = renderer.create(
    <>
      <Button />
      <Button href="" />
    </>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button with text renders correctly', () => {
  const component = renderer.create(<Button text="VÍCE" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Anchor with text inside renders correctly', () => {
  const component = renderer.create(<Button text="VÍCE" href="#" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button with icon renders correctly', () => {
  const component = renderer.create(<Button icon={<Add />} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Buttons with variants render correctly', () => {
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

test('Button does not render unknown variants classes', () => {
  const component = renderer.create(<Button variant="whatever-button" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders with additional class correctly', () => {
  const component = renderer.create(<Button className="whatever-button" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Anchors with variants render correctly', () => {
  const component = renderer.create(
    <>
      <Button variant="contained" href="#" />
      <Button variant="outline" href="#" />
      <Button variant="secondary" href="#" />
      <Button variant="outline-black" href="#" />
      <Button variant="small-black" href="#" />
    </>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Anchor does not render unknown variants classes', () => {
  const component = renderer.create(
    <Button variant="whatever-anchor" href="#" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Anchor renders with additional class correctly', () => {
  const component = renderer.create(
    <Button className="whatever-anchor" href="#" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button with onClick renders correctly', () => {
  const toggleSection = () => {};
  const component = renderer.create(<Button onClick={toggleSection} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Anchor element renders correctly', () => {
  const component = renderer.create(<Button href="#" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button with disabled state renders correctly ', () => {
  const component = renderer.create(
    <>
      <Button disabled />
    </>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Anchor with disabled state renders like button ', () => {
  const component = renderer.create(
    <>
      <Button href="#" disabled />
      <Button href="" disabled />
    </>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

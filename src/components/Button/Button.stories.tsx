import Button from './Button';
import { FC } from 'react';

export default {
  title: 'Button',
  component: Button,
};

export const Primary: FC = (): JSX.Element => (
  <Button variant="primary">Primary</Button>
);

export const Secondary: FC = (): JSX.Element => (
  <Button variant="secondary">Secondary</Button>
);

export const Success: FC = (): JSX.Element => (
  <Button variant="success">Success</Button>
);

export const Danger: FC = (): JSX.Element => (
  <Button variant="danger">Danger</Button>
);

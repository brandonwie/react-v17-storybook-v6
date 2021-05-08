import { FC, ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  variant: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const { variant = 'primary', children, ...rest } = props;

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

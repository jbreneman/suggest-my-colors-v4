import { ReactNode } from 'react';
import styles from './Button.module.css';

const Button = ({
    children,
    color,
}: {
    children: ReactNode;
    color?: string;
}) => {
    return <button style={{ color }}>{children}</button>;
};

export default Button;

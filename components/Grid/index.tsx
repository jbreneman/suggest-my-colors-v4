import { ReactNode } from 'react';
import styles from './Grid.module.css';
import { buildClasses } from '../../util/classes';

const Grid = ({
    children,
    tag = 'div',
    className,
}: {
    children: ReactNode;
    tag?: string;
    className?: string;
}) => {
    const Tag = tag as keyof JSX.IntrinsicElements;
    return (
        <Tag className={buildClasses([styles.grid, className])}>{children}</Tag>
    );
};

export default Grid;

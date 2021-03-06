import { ReactNode } from 'react';
import styles from './Card.module.css';
import { buildClasses } from '../../util/classes';

const Card = ({
    children,
    tag = 'div',
    className,
    style = {},
}: {
    children: ReactNode;
    tag?: string;
    className?: string;
    style?: object;
}) => {
    const Tag = tag as keyof JSX.IntrinsicElements;
    return (
        <Tag style={style} className={buildClasses([styles.card, className])}>
            {children}
        </Tag>
    );
};

export default Card;

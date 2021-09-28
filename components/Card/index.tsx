import { ReactNode } from 'react';
import styles from './Card.module.css';
import { buildClasses } from '../../util/classes';

const Card = ({
    children,
    tag,
    className,
}: {
    children: ReactNode;
    tag?: string;
    className?: string;
}) => {
    const Tag = tag as keyof JSX.IntrinsicElements;
    return (
        <Tag className={buildClasses([styles.card, className])}>{children}</Tag>
    );
};

export default Card;

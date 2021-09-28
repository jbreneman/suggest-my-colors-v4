import { HexColorInput } from 'react-colorful';
import styles from './HexColorInput.module.css';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const Card = ({
    color,
    onChange,
    className,
}: {
    color: string;
    onChange?: (newColor: string) => void;
    className?: string;
}) => {
    const [id] = useState(uuid());
    return (
        <div className={className}>
            <label htmlFor={id} className={styles.label}>
                Hex
            </label>
            <HexColorInput
                id={id}
                className={styles.hexColorInput}
                color={color.toUpperCase()}
                onChange={onChange}
                prefixed={true}
            />
        </div>
    );
};

export default Card;

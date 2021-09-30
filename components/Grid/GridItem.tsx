import styles from './GridItem.module.css';
import { buildClasses } from '../../util/classes';
import Card from '../Card';
import { getContrast } from '../../util/getAccessibleTextColor';

const GridItem = ({
    className,
    color,
    onSelectColor,
}: {
    className?: string;
    color: string;
    onSelectColor: (color: string) => void;
}) => {
    const textColor = getContrast(color);
    return (
        <Card
            className={buildClasses([styles.gridItem, className])}
            style={{ backgroundColor: color, color: textColor }}
        >
            <button
                onClick={() => onSelectColor(color)}
                className={styles.colorPicker}
            >
                <svg
                    className={styles.colorPickerIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 66 82.5"
                >
                    <path
                        d="M57.1 23c-1.7 1.3-4.1.9-5.4-.8L42.5 9.7c-1.2-1.7-.9-4.1.8-5.4 1.7-1.3 4.1-.9 5.4.8l9.2 12.5c1.2 1.8.9 4.2-.8 5.4zM49.6 22.8l-20.3 15c-6.6 4.9-14.5 8.1-22.6 9.1h-.1c-.3 0-.6-.2-.8-.4-.2-.3-.3-.7-.1-1 3.5-7.5 8.8-14 15.4-18.9l20.3-15 8.2 11.2zM63.7 11.5l-5.1 3.8-7.5-10.1 5.1-3.8c1-.7 5.1-.8 7.4 2.4 2.2 2.9 1.4 6.7.1 7.7z"
                        fill={textColor}
                    />
                    <g>
                        <path
                            className={styles.colorDrop}
                            d="M12 59.1c0 3.3-2.5 6-5.5 6-3.1 0-5.5-2.7-5.5-6 0-3 4.3-8.5 4.7-9.1.2-.2.5-.4.8-.4.3 0 .6.1.8.4.5.6 4.7 6 4.7 9.1z"
                            fill={textColor}
                        />
                    </g>
                </svg>
                <span className="visually-hidden">Select color</span>
            </button>
            {color.toUpperCase()}
        </Card>
    );
};

export default GridItem;

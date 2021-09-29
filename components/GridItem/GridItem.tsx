import styles from './GridItem.module.css';
import { buildClasses } from '../../util/classes';
import Card from '../Card';

const GridItem = ({
    className,
    color,
}: {
    className?: string;
    color: string;
}) => {
    return (
        <Card
            tag="button"
            className={buildClasses([styles.gridItem, className])}
            style={{ backgroundColor: color }}
        >
            {color}
        </Card>
    );
};

export default GridItem;

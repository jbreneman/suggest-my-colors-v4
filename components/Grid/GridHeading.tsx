import styles from './GridHeading.module.css';
import { buildClasses } from '../../util/classes';

const GridHeading = ({
    className,
    text,
}: {
    className?: string;
    text: string;
}) => {
    return (
        <h2 className={buildClasses([styles.gridHeading, className])}>
            {text}
        </h2>
    );
};

export default GridHeading;

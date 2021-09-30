import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import { HexColorPicker } from 'react-colorful';
import HexColorInput from '../components/HexColorInput';
import Grid from '../components/Grid';
import { useThrottle } from '@react-hook/throttle';
import GridItem from '../components/GridItem/GridItem';
import {
    getBlueShift,
    getGreenShift,
    getHalfOpposites,
    getOpposites,
    getRedShift,
} from '../util/appColors';

const Home: NextPage = () => {
    const [color, setColor] = useThrottle('#aabbcc');

    const colors = [
        ...getOpposites(color),
        ...getHalfOpposites(color),
        ...getRedShift(color),
        ...getGreenShift(color),
        ...getBlueShift(color),
    ];

    return (
        <div className={styles.app}>
            <Head>
                <title>suggestmycolorsv4</title>
                <meta name="description" content="Colors and math and stuff" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.sidebar}>
                <Card className={styles.pickerSection} tag="article">
                    <div className={styles.picker}>
                        <HexColorPicker
                            className={styles.reactColorful}
                            color={color}
                            onChange={setColor}
                        />
                    </div>
                    <HexColorInput
                        className={styles.input}
                        color={color}
                        onChange={setColor}
                    />
                </Card>
                <Card className={styles.sidebar} tag="article">
                    Test
                </Card>
            </section>

            <Grid tag="main" className={styles.main}>
                {colors.map((item: { key: string; color: string }) => (
                    <GridItem
                        color={item.color}
                        key={item.key}
                        onSelectColor={setColor}
                    />
                ))}
            </Grid>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default Home;

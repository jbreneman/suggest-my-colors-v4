import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import { HexColorPicker } from 'react-colorful';
import HexColorInput from '../components/HexColorInput';
import Grid from '../components/Grid/Grid';
import { useThrottle } from '@react-hook/throttle';
import GridItem from '../components/Grid/GridItem';
import {
    getBlueShift,
    getGreenShift,
    getHalfOpposites,
    getOpposites,
    getRedShift,
} from '../util/appColors';
import GridHeading from '../components/Grid/GridHeading';

const Home: NextPage = () => {
    const [color, setColor] = useThrottle('#1FAAB6');

    const colors = [
        { text: 'Opposites', key: 'opposites' },
        ...getOpposites(color),
        { text: 'Half opposites', key: 'half-opposites' },
        ...getHalfOpposites(color),
        { text: 'Red shift', key: 'red-shift' },
        ...getRedShift(color),
        { text: 'Green shift', key: 'green-shift' },
        ...getGreenShift(color),
        { text: 'Blue shift', key: 'blue-shift' },
        ...getBlueShift(color),
    ];

    return (
        <div className={styles.app}>
            <Head>
                <title>suggestmycolorsv4</title>
                <meta name="description" content="Colors and math and stuff" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1 className={styles.logo}>
                    suggestmycolors<sup className={styles.logoSup}>v4</sup>
                </h1>
            </header>

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
                    <p>
                        This is a project I keep rewriting to learn new things.
                        It takes a single color as an input and applies some
                        math to the individual RGB channels to give you a set of
                        colors that are mathematically related.
                    </p>
                </Card>
            </section>

            <Grid tag="main" className={styles.main}>
                {colors.map(
                    (item: { key: string; color: string; text?: string }) => {
                        if (item.text) {
                            return <GridHeading text={item.text} />;
                        }

                        return (
                            <GridItem
                                color={item.color}
                                key={item.key}
                                onSelectColor={setColor}
                            />
                        );
                    },
                )}
            </Grid>

            <footer className={styles.footer}>
                Made by <a href="https://jessebreneman.com">Jesse Breneman</a>.{' '}
                <a href="https://github.com/jbreneman/suggest-my-colors-v4">
                    View on Github
                </a>
            </footer>
        </div>
    );
};

export default Home;

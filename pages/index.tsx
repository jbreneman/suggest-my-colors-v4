import type { NextPage } from 'next';
import Head from 'next/head';
import { HexColorPicker } from 'react-colorful';
import styles from '../styles/Home.module.css';
import Card from '../components/Card/index';
import HexColorInput from '../components/HexColorInput/index';
import { useState } from 'react';

const Home: NextPage = () => {
    const [color, setColor] = useState('#aabbcc');

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

            <main className={styles.main}>asdf</main>

            <footer className={styles.footer}></footer>
        </div>
    );
};

export default Home;

import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import cn from 'classnames';
import Link from 'next/link';

//  assets
import menu from "../../styles/img/menu.png";

const list = [
    {item: 'Home', url: "/"},
    {item: 'About', url: "#"},
    {item: "Github", url: "https://github.com"}
]

function ListElement({url, item}) {
    return (
        <li>
            <a href={url}>
                {item}
            </a>
        </li>
    )
}

export default function Header() {
    const [visible, setVisible] = React.useState(false);

    const listElement = list.map(list => <ListElement key={list.id} {...list} />)
    return (
        <>
            <div className={cn(styles.container, { [styles.shadow]: visible })}>
                    <div className={styles.navbar}>
                        <header className={styles.logo}>Next<span>JS</span></header>
                        <nav className={styles.menu}>
                            <ul className={styles.ul}>
                                {listElement}
                            </ul>
                        </nav>
                        {/* Toggling menu */}
                            <buton
                                className={cn(styles.img, { [styles.pushed]: visible })}
                                onClick={() => setVisible(!visible)}
                            >
                                <Image
                                    src={menu}
                                    alt="Menu IMG"
                                    width={50}
                                    height={50}
                                    className={styles.picture}
                                />
                            </buton>
                </div>
            </div>
            <nav className={cn(styles.box, { [styles.active]: visible })}>
                <ul className={styles.ul}>
                    {listElement}
                </ul>
            </nav>
        </>
    )
}

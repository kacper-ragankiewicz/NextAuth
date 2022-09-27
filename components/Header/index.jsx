import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from "prop-types";
import styles from './Header.module.scss';
import cn from 'classnames';
import { useRouter } from "next/router";

import { Link } from "components";
import { userService } from 'services';

//  assets
import menu from "../../styles/img/menu.png";


const list = [
    {item: 'Home', href: "/", exact: true, },
    {item: 'About', href: "#"},
    {item: "Github", href: "https://github.com"},
]

NavLink.PropTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ item, href, exact, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    return (
            <li>
                <Link href={href} {...props}>{item}</Link>
            </li>
        )
}

export default function Header() {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState(null)

    const listElement = list.map(list => <NavLink key={list.id} {...list} />)

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    return (
        <div>
            <div className={cn(styles.container, { [styles.shadow]: visible })}>
                    <div className={styles.navbar}>
                        <header className={styles.logo}>FindUr<span>URL</span></header>
                        <nav className={styles.menu}>
                            <ul className={styles.ul}>
                                {listElement}
                                {!user
                                    ?   <li><Link href='/account/login'><span>Log in</span></Link></li>
                                    :   <li onClick={logout}><span>Log out</span></li>
                                }
                            </ul>
                        </nav>
                        {/* Toggling menu */}
                        <div className={styles.control}>
                            <Link href='/account/login'><span className={styles.login}>Log in</span></Link>
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
                            {/* <button className={styles.button}>Scroll</button> */}
                        </div>
                    </div>
            </div>
            <nav className={cn(styles.box, { [styles.active]: visible })}>
                <ul className={styles.ul}>
                    {listElement}
                </ul>
            </nav>
        </div>
    )
}

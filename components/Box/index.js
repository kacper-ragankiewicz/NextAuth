import React from "react";
import Image from "next/image";
import styles from "./Box.module.scss";
import cn from "classnames";

const Box = ({
    className,
    title,
    buttonSpan,
    object,
    desc,
    url,
    children,
}) => {
    return (
        <section className={cn(styles.box, className)}>
            {title && (
                <header className={styles.title}>{title}</header>
            )
            }
            {desc &&
                <p className={styles.desc}>{desc}</p>
            }
            {object &&
                <ul className={styles.body}>
                    { object.map((item,index) => (
                            <li className={styles.li} key={index}>{item}</li>
                        ))
                    }
                </ul>
            }
            {url &&
                <button className={styles.button}>
                    <a href={url}>{buttonSpan ? buttonSpan : "Check out"}</a>
                </button>
            }
            {children}
        </section>
    );
};
export default Box;
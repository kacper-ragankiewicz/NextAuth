import React from 'react';
import Box from '../components/Box';
import axios from '../helpers/axios';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const box = [
    {title: 'hello1', desc: "desc"},
    {title: 'hello2'},
    {title: 'hello3'},
    {title: 'hello4'},
    {title: 'hello5'},
]

// const hero = [
//   {API: "hello"},
//   {API: "Hello2"}
// ]

function BoxList({ title, desc, Link}) {
    return (
        <Box
            title={title}
            desc={desc}
            url={Link}
        />
    )
}

function Api({ API, Description, Link, Category }) {
      return (
        <Box
            title={API}
            desc={Description}
            object={[Category]}
            url={Link}
        />
    )
  // return (
  //   <li className={styles.li}>
  //     <Link href={`/hero`}>
  //       <a>
  //         <p>{API}</p>
  //       </a>
  //     </Link>
  //   </li>
  // )
};

export default function Main({isRequestFailed, hero, count}) {
   if (isRequestFailed) {
    return <p>Oops something went wrong....</p>
    }


    const boxesArrey = box.map(box => <BoxList key={box.id} {...box}/>)
    const ApiElements = hero.map(hero => <Api key={hero.id} {...hero} /> )

    return (
      <div className={styles.container}>
        {ApiElements}
      </div>
    )
  }


  export async function getStaticProps() {
    const { data, status } = await axios.get('/entries');
    if (status !== 200 ) {
      return {
        props: {
          isRequestFailed: true,
        }
      }
    }
    const { count, entries } = data;
    const hero = entries?.map(({id, API, Description, Link, Category}) => ({ API, Description, Link, Category }));
    return {
      props: {
        count,
        hero,
        isRequestFailed: false,
        test: true,
      }
    }
  }

import Box from '../../components/Box';
import axios from '../../helpers/axios';
import Link from 'next/link';
import styles from './Home.module.scss';

const box = [
    {title: 'hello1', desc: "desc"},
    {title: 'hello2'},
    {title: 'hello3'},
    {title: 'hello4'},
    {title: 'hello5'},
]

function BoxList({ title, desc}) {
    return (
        <Box
            title={title}
            desc={desc}
        />
    )
}

function ApiElement({ id, API }) {
  return (
    <li className={styles.li}>
      <Link href={`/hero/${id}`}>
        <a>
          <p>{API}</p>
        </a>
      </Link>
    </li>
  )
};

export default function Home({ hero }) {
    const boxesArrey = box.map(box => <BoxList key={box.id} {...box}/>)
    // const ApiElements = hero.map(hero => <ApiElement key={hero.id} {...hero} /> )

    console.log(hero)
    return (
      <div className={styles.container}>
        {boxesArrey}
        {/* {ApiElements} */}
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
  const hero = entries?.map(({id, API}) => ({ API }));
  return {
    props: {
      count,
      hero,
      isRequestFailed: false,
      test: true,
    }
  }
}
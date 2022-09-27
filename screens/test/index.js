import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from '../../helpers/axios';
import styles from './Test.module.scss';

import Page from "../../components/Page";
import { setRevalidateHeaders } from 'next/dist/server/send-payload';
import React from 'react';


export default class test extends React.Component {


  ApiElements = this.props.hero.map(hero => <this.ApiElement key={hero.id} {...hero} /> )

  ApiElement({id, API}) {
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

  render () {
    return (
          <Page>
            <main className={styles.main}>
              <h1>Hero encykloperdia</h1>
              <ul>
                {this.ApiElements}
              </ul>
            </main>
          </Page>
    )
  }


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

import React from 'react';
import Box from '../../components/Box';
import styles from './Home.module.scss';

export default class Home extends React.Component {

  ApiElements = this.props.hero.map(hero => <this.ApiCall key={hero.id} {...hero} /> )

  ApiCall({ API, Description, Link, Category }) {
        return (
          <Box
              title={API}
              desc={Description}
              object={[Category]}
              url={Link}
          />
      )
  };

  render () {

    if (this.props.isRequestFailed) {
     return <p>Oops something went wrong....</p>
     }

     return (
       <div className={styles.container}>
         {this.ApiElements}
       </div>
     )
  }
}

// Api AXIOS

//   export async function getStaticProps() {
//     const { data, status } = await api.get('/entries');
//     if (status !== 200 ) {
//       return {
//         props: {
//           isRequestFailed: true,
//         }
//       }
//     }
//     const { count, entries } = data;
//     const hero = entries?.map(({id, API, Description, Link, Category}) => ({ API, Description, Link, Category }));
//     return {
//       props: {
//         count,
//         hero,
//         isRequestFailed: false,
//         test: true,
//       }
//     }
//   }
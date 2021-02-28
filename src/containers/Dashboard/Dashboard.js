import React from 'react';

import Layout from '../Layout/Layout'
import CurrentSectionUI from '../../components/CurrentSectionUI/CurrentSectionUI';

import { useBooks } from '../../hooks/useBooks'


const Dashboard = () => {

    const { data } = useBooks();

    console.log(data.books);

    return ( 
        <Layout>
            {data.books.length && <CurrentSectionUI books={data.books}/>}
        </Layout>
     );
}

export default Dashboard;

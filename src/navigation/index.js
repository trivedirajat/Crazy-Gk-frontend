import React from 'react'
import Routing from './routing';
import useLoader from '../utils/useLoader'
import Loader from '../components/Loader/Loader';

const Root = () => {
    const [loading] = useLoader();
    return (
        <>
            {loading && <Loader />}
            <Routing />
        </>
    )
}

export default Root
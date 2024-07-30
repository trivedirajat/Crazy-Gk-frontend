import React from 'react'
import { useSelector } from 'react-redux';

const useLoader = () => {
  const { loading } = useSelector((state) => state.loadingReducer);
  return [loading];
}

export default useLoader
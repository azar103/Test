import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getAuthors } from '../store/autherJoinSlice';

const Authors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthors({FromDate:"2022-04-18",ToDate:"2022-04-25",RequesterType: 1}))
  }, [])
  return (
    <div>Authors</div>
  )
}

export default Authors
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchSubject } from '../../reduxx/action/SubjectAction';

function OtherTopics() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { getsubject } = useSelector(state => state.subject)
  useEffect(() => {
    dispatch(fetchSubject({
      offset: 0,
      limit: 100
    }))
  }, [])
  const handleOnpress = (name) => {
    navigate(`/trending-on-youtube`, { state: { subject: name } })
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div className='other-sub'>
        <h4 className="inner-head">Other Topics</h4>
        <ul>
          {getsubject?.data?.length > 0 && getsubject?.data.map((item) => (<li onClick={() => handleOnpress(item)}>{item?.subject_name}</li>))}
          {/* <li onClick={() => handleOnpress('History')}>History</li>
          <li onClick={() => handleOnpress('Geography')}>Geography</li>
          <li onClick={() => handleOnpress('Economics')}>Economics</li>
          <li onClick={() => handleOnpress('Science')}>Science</li>
          <li onClick={() => handleOnpress('Agriculture')}>Agriculture</li>
          <li onClick={() => handleOnpress('Anthropology')}>Anthropology</li>
          <li onClick={() => handleOnpress('Mathematics')}>Mathematics</li>
          <li onClick={() => handleOnpress('Philosophy')}>Philosophy</li> */}
        </ul>
      </div>
    </>
  )
}

export default OtherTopics
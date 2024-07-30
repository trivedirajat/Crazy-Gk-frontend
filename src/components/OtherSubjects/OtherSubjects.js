import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchSubject } from '../../reduxx/action/SubjectAction';
import { useDispatch, useSelector } from 'react-redux';

function OtherSubjects() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { getsubject } = useSelector(state => state.subject)
  console.log('getsubject', getsubject);
  useEffect(() => {
    dispatch(fetchSubject({
      offset: 0,
      limit: 100
    }))
  }, [])
  const handleOnpress = (data) => {
    navigate(`/science-and-technology`, { state: { subjectData: data } })
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div className='other-sub'>
        <h4 className="inner-head">Other Subjects</h4>
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
      </div >
    </>
  )
}

export default OtherSubjects
import React from 'react'
import { Accordion } from 'react-bootstrap'
import "../ScienceAndTechnology/TopicList.css"
import { useNavigate } from 'react-router-dom'
function TopicList(props) {
  const navigate = useNavigate()
  return (
    <div className='topic-area'>
      <Accordion defaultActiveKey="0">
        {props?.topics.map(item =>
        (<Accordion.Item eventKey={item?._id}>
          <Accordion.Header onClick={() => {
            const index = props?.topics?.findIndex(el => el._id === item?._id)
            props.setCurrentIndex(index)
            navigate(`/science-technology-topic`, { state: { topicData: item } })
          }}>{item?.topic_name}</Accordion.Header>
          <Accordion.Body>
            <ul>
              {/* {item?.containt?.length > 0 && item?.containt.map(item => (<li>{item?.title}</li>))} */}
              {/* <li>Content Number 2</li>
              <li>Content Number 3</li>
              <li>Content Number 4</li>
              <li>Content Number 5</li> */}

            </ul>
          </Accordion.Body>
        </Accordion.Item>))
        }
        {/* <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Content Number 1</li>
            <li>Content Number 2</li>
            <li>Content Number 3</li>
            <li>Content Number 4</li>
            <li>Content Number 5</li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Content Number 1</li>
            <li>Content Number 2</li>
            <li>Content Number 3</li>
            <li>Content Number 4</li>
            <li>Content Number 5</li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Content Number 1</li>
            <li>Content Number 2</li>
            <li>Content Number 3</li>
            <li>Content Number 4</li>
            <li>Content Number 5</li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Content Number 1</li>
            <li>Content Number 2</li>
            <li>Content Number 3</li>
            <li>Content Number 4</li>
            <li>Content Number 5</li>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         <ul>
            <li>Content Number 1</li>
            <li>Content Number 2</li>
            <li>Content Number 3</li>
            <li>Content Number 4</li>
            <li>Content Number 5</li>

          </ul>
        </Accordion.Body>
      </Accordion.Item> */}
      </Accordion>
    </div>
  )
}

export default TopicList
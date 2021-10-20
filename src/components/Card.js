import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const task = props.data;
  return (
    <Link to={`/view/${task._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ task.title }</h5>
          <span className="badge bg-primary">{ task.description }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
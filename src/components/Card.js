import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
  const task = props.data;
  return (
    <Link style={{ textDecoration: 'none' }} to={`/view/${task._id}`} className="col">
      <div className="">
        <div className="card-body notes">
          <h5 className="nt">{ task.title }</h5>
          <span>Descrição: { task.description }</span><br/>
          <span>Prioridade: { task.priority }</span><br/>
          <span>Status: { task.status }</span><br/>
          <span>Prazo: { task.deadline }</span>
          
        </div>
      </div>
    </Link>
  )
}

export default Card
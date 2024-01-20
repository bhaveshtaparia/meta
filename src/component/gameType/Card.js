import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <>
    <div className="card text-center">
  <div className="card-header">
    {props.level}
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <Link to="/demo" className="btn btn-primary">Play</Link>
  </div>
  <div className="card-footer text-muted">
  Last Updated- 2 days ago
  </div>
</div>
    </>
  )
}

export default Card
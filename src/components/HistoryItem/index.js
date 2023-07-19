import React from 'react'
import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-type">
      <div className="list-card">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="img-url" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem

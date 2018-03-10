import React, { Component } from 'react'

class ListContacts extends Component {
  render () {
    return (
      <ol className="contact-list">
        {
          this.props.contacts.map(
            ({ id, name, email, avatarURL }) => (
              <li key={id} className="contact-list-item">
                <div
                  className="contact-avatar"
                  style={{ 'background-image': `url(${avatarURL})` }}
                  title={name}
                ></div>
                <div className="contact-details">
                  <p>{name}</p>
                  <p>{email}</p>
                </div>
                <button className="contact-remove">Remove</button>
              </li>
            )
          )
        }
      </ol>
    )
  }
}

export default ListContacts

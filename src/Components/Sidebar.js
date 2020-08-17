import React, { Component } from 'react'
import './Sidebar.scss'

class Sidebar extends Component {
  render() {
    let { items } = this.props
    let list = items.map((item, idx) => {
      return (
        <li key={idx} className='Activity'>
          Task: {item.task}, [x:{item.x},y:{item.y}]
        </li>
      )
    })

    return (
      <div className='Sidebar'>
        <div className='Sidebar-search mt-3'>
          <input type='text' placeholder='SEARCH' />
        </div>
        <div className='Sidebar-items mt-5'>
          <ul>{list}</ul>
        </div>
      </div>
    )
  }
}

export default Sidebar

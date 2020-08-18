import React, { Component } from 'react'
import './Sidebar.scss'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(evt) {
    this.setState({ searchText: evt.target.value })
  }
  render() {
    let list
    let { items } = this.props
    if (!items) {
      list = <div className='Placeholder'>Add an activity</div>
    } else {
      let filteredList = items.filter(
        (el) => el.task.indexOf(this.state.searchText.toLowerCase()) !== -1
      )
      if (filteredList.length === 0) {
        list = <div className='No-results'>No tasks found</div>
      } else {
        list = filteredList.map((item, idx) => {
          return (
            <li key={idx} className='Activity'>
              Task: {item.task}, [x:{item.x},y:{item.y}]
            </li>
          )
        })
      }
    }

    return (
      <div className='Sidebar'>
        <div className='Sidebar-search mt-4'>
          <input
            onChange={this.handleChange}
            value={this.state.searchText}
            type='text'
            placeholder='SEARCH'
          />
        </div>
        <div className='Sidebar-items mt-5'>
          <ul>{list}</ul>
        </div>
      </div>
    )
  }
}

export default Sidebar

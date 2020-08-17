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
    let { items } = this.props
    let filteredList = items.filter((el) => el.task.indexOf(this.state.searchText) !== -1)
    console.log(filteredList)
    let list = filteredList.map((item, idx) => {
      return (
        <li key={idx} className='Activity'>
          Task: {item.task}, [x:{item.x},y:{item.y}]
        </li>
      )
    })

    return (
      <div className='Sidebar'>
        <div className='Sidebar-search mt-3'>
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

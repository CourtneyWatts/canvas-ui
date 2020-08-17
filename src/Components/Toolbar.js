import React, { Component } from 'react'
import './Toolbar.scss'

class Toolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
    }
    this.handleActivityClick = this.handleActivityClick.bind(this)
    this.handleDecisionClick = this.handleDecisionClick.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }
  handleActivityClick(e) {
    this.props.addActivity()
  }
  handleDecisionClick(e) {
    this.props.addDecision()
  }
  handleRemove(e) {
    this.props.remove()
  }
  handleSave(e) {
    this.props.save()
  }

  render() {
    if (true) {
      return (
        <div className='Toolbar'>
          <div className='Toolbar-add-options'>
            <div onClick={this.handleActivityClick} className='btn special'>
              Add Activity
            </div>
            <div
              onClick={
                this.props.decisionEnabled ? this.handleDecisionClick : null
              }
              className='btn special'
            >
              Add Decision
            </div>
          </div>
          <div className='Toolbar-edit-options'>
            <div onClick={this.handleRemove} className='btn'>
              Undo
            </div>
            <div onClick={this.handleSave} className='btn mr-0'>
              Save
            </div>
          </div>
        </div>
      )
    } else {
      return <div>test</div>
    }
  }
}

export default Toolbar

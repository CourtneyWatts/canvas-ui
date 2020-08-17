import React, { Component } from 'react'
import './App.css'
import Toolbar from './Components/Toolbar'
import Sidebar from './Components/Sidebar'

const WIDTH_ACTIVITY_BOX = 120
const HEIGHT_ACTIVITY_BOX = 60
const ACTIVITY_BOX_COLOR = 'blue'
const WIDTH_DESICION_BOX = 60
const HEIGHT_DESICION_BOX = 60
const DESICION_BOX_COLOR = 'green'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      decisionOption: true,
      items: [
        {
          x: 10,
          y: 100,
          width: WIDTH_ACTIVITY_BOX,
          height: HEIGHT_ACTIVITY_BOX,
          task: 'activity',
          color: ACTIVITY_BOX_COLOR,
        },
      ],
      lines: [
        {
          startPoint: [130, 130],
          lineTo: [130, 130],
        },
      ],
    }
    this.draw = this.draw.bind(this)
    this.addActivity = this.addActivity.bind(this)
    this.addDecision = this.addDecision.bind(this)
    this.remove = this.remove.bind(this)
    this.save = this.save.bind(this)
  }
  draw() {
    const canvas = document.getElementById('myCanvas')
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      //draw boxes
      for (let shape of this.state.items) {
        ctx.fillStyle = shape.color
        ctx.fillRect(shape.x, shape.y, shape.width, shape.height)
      }
      //draw lines
      for (let i = 0; i < this.state.lines.length; i++) {
        let { startPoint, lineTo } = this.state.lines[i]
        ctx.beginPath()
        ctx.moveTo(...startPoint)
        ctx.lineTo(...lineTo)
        ctx.stroke()
      }
    }
  }
  addActivity() {
    let { items, lines } = this.state
    let refIndex = this.state.items.length - 1
    let { x, y, task } = this.state.items[refIndex]
    let spacing = task === 'decision' ? 50 : 100
    let length = task === 'decision' ? 60 : 120
    let newItem = {
      x: x + length + spacing,
      y: 100,
      width: WIDTH_ACTIVITY_BOX,
      height: HEIGHT_ACTIVITY_BOX,
      task: 'activity',
      color: ACTIVITY_BOX_COLOR,
    }
    let newLine = {
      startPoint: [x + length, 100 + 30],
      lineTo: [x + spacing + length, 100 + 30],
    }
    this.setState(
      {
        items: [...items, newItem],
        lines: [...lines, newLine],
        decisionOption: true,
      },
      () => {
        this.draw()
      }
    )
  }

  addDecision() {
    let { items, lines } = this.state
    let refIndex = this.state.items.length - 1
    let { x, y, width, height, task } = this.state.items[refIndex]
    //bug catch
    if (task === 'decision') {
      return
    }
    let spacing = 100
    let newItem = {
      x: x + 60 + spacing,
      y: 100,
      width: WIDTH_DESICION_BOX,
      height: HEIGHT_DESICION_BOX,
      task: 'decision',
      color: DESICION_BOX_COLOR,
    }
    let newLine = {
      startPoint: [x + 120, 100 + 30],
      lineTo: [x + spacing + 60, 100 + 30],
    }
    this.setState(
      {
        items: [...items, newItem],
        lines: [...lines, newLine],
        decisionOption: false,
      },
      () => {
        this.draw()
      }
    )
  }
  remove() {
    if (this.state.items.length <= 1) {
      return
    }
    let newItems = [...this.state.items]
    let newLines = [...this.state.lines]
    newItems.pop()
    console.log(newItems)
    newLines.pop()
    this.setState(
      {
        items: [...newItems],
        lines: [...newLines],
        decisionOption: true,
      },
      () => {
        console.log('now')
        this.draw()
      }
    )
  }

  save() {
    console.log('save firing')
  }

  componentDidMount() {
    this.draw()

    window.addEventListener('click', function (event) {
      console.log(event)
    })
  }
  render() {
    return (
      <div className='App container mt-5'>
        <div className='small-screen-text d-flex-col text-center p-5'>
          <p>Browser window is too small</p>
          <p className='pt-4'>Please open on a desktop browser</p>
          <p className='pt-4'>
            {' '}
            If you are using a desktop browser, please resize your browser
            window
          </p>
        </div>
        <div className='row main mb-5'>
          <div className='col-9'>
            <Toolbar
              decisionEnabled={this.state.decisionOption}
              addDecision={this.addDecision}
              addActivity={this.addActivity}
              remove={this.remove}
              save={this.save}
            />
            <canvas
              id='myCanvas'
              width='800'
              height='500'
              style={{ border: '1px solid' }}
            ></canvas>
          </div>
          <div className='main col-3'>
            <Sidebar items={this.state.items} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
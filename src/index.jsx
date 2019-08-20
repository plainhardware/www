import React from 'react'
import { render } from 'react-dom'
import './index.scss'

render(<div>Welcome to {process.env.NAME}</div>, document.getElementById('app'))
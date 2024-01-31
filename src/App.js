import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_API_KEY;
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<News key='general' pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'general'} />} />
            <Route path="/technology" element={<News key='technology' pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'technology'} />} />
            <Route path="/business" element={<News key='business' pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'business'} />} />
            <Route path="/entertainment" element={<News key='entertainment' pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'entertainment'} />} />
            <Route path="/general" element={<News key='general' pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'general'} />} />
            <Route path="/health" element={<News key='health' pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'health'} />} />
            <Route path="/science" element={<News key='science' pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'science'} />} />
            <Route path="/sports" element={<News key='sports' pageSize={this.pageSize} apiKey={this.apiKey} country={'us'} category={'sports'} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}


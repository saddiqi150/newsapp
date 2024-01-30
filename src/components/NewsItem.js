import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newUrl, auther, date,source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:1}}>
             {source}
        </span>
          <img src={!imageUrl ? "https://ktla.com/wp-content/uploads/sites/4/2024/01/GettyImages-1236020768.jpg?w=1280" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className='text-muted'>By {!auther ? "UnKnown" : auther} at {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

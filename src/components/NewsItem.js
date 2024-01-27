import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl, newUrl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
            <img src={!imageUrl?"https://ktla.com/wp-content/uploads/sites/4/2024/01/GettyImages-1236020768.jpg?w=1280":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
     </div>
    )
  }
}

export default NewsItem

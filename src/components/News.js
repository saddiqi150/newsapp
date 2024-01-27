import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    console.log('Hello i am a constructor form News Components.')
    this.state={
     articles: [],
     loading:false,
     page:1
    }
  }
 async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=86c9d7772ae74f06b2cc847d0a116229&page=1&pageSize=6';
    let data= await fetch(url);
    let parseData=await data.json(data);
    console.log(parseData.articles);
    this.setState({articles:parseData.articles, totalCount:parseData.totalResults});
  }
  handleNextClick = async()=>{
    if(this.state.page +1 >Math.ceil(this.state.totalCount/6)){

    }
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=86c9d7772ae74f06b2cc847d0a116229&page=${this.state.page}&pageSize=6`;
    let data= await fetch(url);
    let parseData=await data.json(data);
    this.setState({
      page:this.state.page+1,
      articles:parseData.articles
    })
  }
  handlePreviousClick = async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=86c9d7772ae74f06b2cc847d0a116229&page=${this.state.page}&pageSize=6`;
      let data= await fetch(url);
      let parseData=await data.json(data);
      this.setState({
        page:this.state.page-1,
        articles:parseData.articles
      })
    
  }
    render() {
        return (
            <div className='container my-3'>
                <h2>SkyNews - Top Headlines </h2>
                <div className='row'>
                  {this.state.articles.map((element)=>{
                    return   <div key={element.url} className='col-md-4'>
                    <NewsItem   title={element.title?element.title.slice(0,40):""} 
                    description={element.description?element.description.slice(0,80):""} 
                    imageUrl={element.urlToImage}
                    newUrl={element.url} />
                </div>
                  })}
                  <div className="container d-flex justify-content-between">
                      <button disabled={this.state.page<=1} type="button" onClick={this.handlePreviousClick} className="btn btn-dark">&laquo; Previous</button>
                      <button type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &raquo;</button>
                  </div>
                </div>
            </div>
        )
    }
}

export default News

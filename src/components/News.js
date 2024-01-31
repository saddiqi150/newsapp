import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propsType = {
    country: PropTypes.string,
    pageSize: PropTypes.int,
    category: PropTypes.string
  }
   capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    console.log('Hello i am a constructor form News Components.')
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      //apiKey:86c9d7772ae74f06b2cc847d0a116229
    }
    document.title= `${this.capitalizeFirstLetter(this.props.category)} - SkyNews`
  }
  async UpdateData() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json(data);
    console.log(parseData.articles);
    this.setState({ articles: parseData.articles, totalCount: parseData.totalResults, loading: false });
  }
  async componentDidMount() {
    this.UpdateData();
  }
  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1
    });
    this.UpdateData();
  }
  handlePreviousClick = async () => {
    this.setState({
      page: this.state.page - 1
    });
    this.UpdateData();
  }
  render() {
    return (

      <div className='container my-3'>
        {this.state.loading && <Spinner />}
        <h2 className='text-center' style={{ margin: '40px 0px' }} >SkyNews - {this.capitalizeFirstLetter(this.props.category)} Top Headlines </h2>
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div key={element.url} className='col-md-4'>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ""}
                description={element.description ? element.description.slice(0, 80) : ""}
                imageUrl={element.urlToImage}
                newUrl={element.url}
                auther={element.auther}
                date={element.publishedAt}
                source={element.source.name} />
            </div>
          })}
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" onClick={this.handlePreviousClick} className="btn btn-dark">&laquo; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalCount / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &raquo;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News

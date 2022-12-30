import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { indexArt } from '../api/article-api.js'
import apiUrl from '../apiConfig'
import axios from 'axios'

class IndexArticles extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: null
    }
  }
  componentDidMount () {
    const { msgAlert } = this.props
    indexArt()
      .then(res => this.setState({ articles: res.data.articles }))
      // .then(res => console.log(`RESPONSE: ${res.data}`))
      .catch(error => {
        msgAlert({
          heading: 'Error',
          message: error.message,
          variant: 'danger'
        })
      })
  }

  loadBatch = () => {
    axios({
      url: `${apiUrl}/second14`,
      method: 'GET'
    })
      .then(res => this.setState({ articles: [...this.state.articles, res.data.articles] }))
      .then(() => console.log(`STATE: ${this.state.articles}`))
      .catch(console.error)
  }

  render () {
    const { articles } = this.state
    if (!articles) {
      return (
        <p>Coming soon ...</p>
      )
    }
    if (articles.length === 0) {
      return (
        <p>0 Live Articles</p>
      )
    }
    const articleArray = articles

    const indexJSX = articleArray.map(article => (
      <Link to={`/article/${article._id}`} key={article._id}>
        <article>
          <h3>{article.title}</h3>
        </article>
      </Link>
    ))

    return (
      <Fragment>
        <div className='content'>
          {indexJSX}
        </div>
      </Fragment>
    )
  }
}

// <button onClick={this.loadBatch}>Load More!</button>

export default IndexArticles

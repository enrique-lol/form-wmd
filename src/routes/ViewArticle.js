import React, { Fragment, Component } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap/'
import apiUrl from '../apiConfig'
import axios from 'axios'
import { getArticle } from './../api/article-api.js'

class ViewArticle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      article: null,
      deleted: false
    }
  }
  componentDidMount () {
    const { match, msgAlert } = this.props
    getArticle(match.params.id)
      .then(res => this.setState({ article: res.data.article }))
      .catch(error => {
        msgAlert({
          heading: 'Try Again',
          message: 'ERROR: ' + error.message,
          variant: 'danger'
        })
      })
  }
  deleteArticle = () => {
    const { match, msgAlert } = this.props
    axios({
      url: `${apiUrl}/articles/${match.params.id}`,
      method: 'delete'
    })
      .then(() => this.setState({ deleted: true }))
      .then(msgAlert({
        heading: 'Success!',
        message: 'Your article has been deleted ',
        variant: 'primary'
      }))
      .catch(console.error)
  }

  render () {
    let articleJsx
    const { article, deleted } = this.state
    if (!article) {
      articleJsx = 'Loading...'
      return articleJsx
    }
    if (article) {
      articleJsx = (
        <Fragment>
          <div>
            <h1>{article.title}</h1>
            <p>{article.author}</p>
            <p>{article.date}</p>
            <p>thumbnail: {article.thumbnailUrl}</p>
            <p>{article.intro}</p>
            <h2>{article.heading1}</h2>
            <p>image: {article.imageUrl1}</p>
            <p>{article.body1}</p>
            <h2>{article.heading2}</h2>
            <p>image: {article.imageUrl2}</p>
            <p>{article.body2}</p>
            <h2>{article.heading3}</h2>
            <p>image: {article.imageUrl3}</p>
            <p>{article.body3}</p>
            <h2>{article.heading4}</h2>
            <p>image: {article.imageUrl4}</p>
            <p>{article.body4}</p>
            <h2>{article.heading5}</h2>
            <p>image: {article.imageUrl5}</p>
            <p>{article.body5}</p>
            <h2>{article.heading6}</h2>
            <p>image: {article.imageUrl6}</p>
            <p>{article.body6}</p>
            <h2>{article.heading7}</h2>
            <p>image: {article.imageUrl7}</p>
            <p>{article.body7}</p>
            <h2>{article.heading8}</h2>
            <p>image: {article.imageUrl8}</p>
            <p>{article.body8}</p>
            <h2>{article.heading9}</h2>
            <p>image: {article.imageUrl9}</p>
            <p>{article.body9}</p>
            <h2>{article.heading10}</h2>
            <p>image: {article.imageUrl10}</p>
            <p>{article.body10}</p>
            <h3>{article.outro}</h3>
            <button onClick={this.deleteArticle}>Delete 1</button>
            <button><Link to={`/article/${article._id}/update/`}>Update</Link></button>
          </div>

        </Fragment>
      )
    }

    return (
      <Fragment>
        {deleted ? <Redirect to="/"/> : articleJsx}
      </Fragment>
    )
  }
}

// <img className='article-image' src={article.thumbnail}/>
// <button onClick={this.saveArticle} key={article.id} >Save</button>
// <p className='art-text'>By {article.authorName} on {article.publishDate} -- {article.intro}</p>
// {article.img2 ? <img className='article-image' src={article.img2}/> : null }
// {article.heading2 ? <h6 className='head-text'>{article.heading2}</h6> : null }
// {article.paragraph2 ? <p className='art-text'>{article.paragraph2}</p> : null }
// {article.img3 ? <img className='article-image' src={article.img3}/> : null }
// {article.heading3 ? <h6 className='head-text'>{article.heading3}</h6> : null }
// {article.paragraph3 ? <p className='art-text'>{article.paragraph3}</p> : null }
// {article.img4 ? <img className='article-image' src={article.img4}/> : null }
// {article.heading4 ? <h6 className='head-text'>{article.heading4}</h6> : null }
// {article.paragraph4 ? <p className='art-text'>{article.paragraph4}</p> : null }

export default withRouter(ViewArticle)

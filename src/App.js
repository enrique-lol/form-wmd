import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import IndexArticles from './routes/IndexArticles.js'
import NewArticle from './routes/NewArticle.js'
import ViewArticle from './routes/ViewArticle.js'
import UpdateArticle from './routes/UpdateArticle.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msgAlerts: []
    }
  }

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts } = this.state

    return (
      <Fragment>
        <Header />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <IndexArticles msgAlert={this.msgAlert} />
          )} />
          <Route exact path='/new-article' render={() => (
            <NewArticle msgAlert={this.msgAlert} />
          )} />
          <Route exact path='/article/:id' render={() => (
            <ViewArticle msgAlert={this.msgAlert} />
          )} />
          <Route exact path='/article/:id/update' render={() => (
            <UpdateArticle msgAlert={this.msgAlert} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App

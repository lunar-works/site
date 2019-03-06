import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Landing from './views/Landing'
import Products from './views/Products'
import About from './views/About'
import Blog from './views/Blog'
import Contact from './views/Contact'
import Layout from './layout'
class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" exact component={Landing} />
          <Route path="/products" exact component={Products} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
        </Layout>
      </Router>
    )
  }
}

export default App;

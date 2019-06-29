import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Hero from './Hero.jsx';

const path = '/';
const action = () => <Layout hero={<Hero />}><Home /></Layout>;

class Home extends Component {
  handleClick(event) {
    event.preventDefault();
    window.location = event.currentTarget.pathname;
  }
  render() {
    return (
      <div>
        <h2>Popular things to rent</h2>
        <div>
          <a href="/s/Tools" onClick={this.handleClick}>
            <span>Tools</span>
          </a>
          <a href="/s/Books" onClick={this.handleClick}>
            <span>Books</span>
          </a>
          ...
        </div>
      </div>
    );
  }
}

/**
 * As you can see, this component exports a path variable, which is just a string (or, it can be a regular
 * expression) which is going to be used by the Router component when it needs to find a corresponding
 * component to render for any given URL path. If the router found a matching component (or, route in our
 * terminology), it will try to execute its action method in order to get the actual instance of a React
 * component to render. (p. 43)
 */
export default { path, action };

import React, { Component } from 'react';
import Layout from '../../components/Layout';

const path = '/NotFound';
const action = () => <Layout><NotFound /></Layout>;

class NotFound extends Component {

  render() {
    return (
      <div>
        <h2>Four, Oh Four</h2>
        <div>
          That which you are seeking, it ain't here.
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

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { WebSocket } from 'nextjs-websocket';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewers: 'Loading...',
    };
  }

  handleData(data) {
    const result = JSON.parse(data);
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ viewers: result });
  }

  render() {
    return (
      <div>
        Viewers:
        {' '}
        <strong>{this.state.viewers}</strong>
        <WebSocket
          url={`ws${process.env.NEXT_PUBLIC_VIEWERS_DOMAIN_SECURE === 'true' ? 's' : ''}://${process.env.NEXT_PUBLIC_VIEWERS_DOMAIN}/`}
          onMessage={this.handleData.bind(this)}
          reconnect
          debug
        />
      </div>
    );
  }
}

export default ProductDetail;

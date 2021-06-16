/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import type { ComponentPropsWithRef, ElementType } from 'react';
import { WebSocket } from 'nextjs-websocket';
import { generateURL } from '../helpers/urls';
import config from '../other/config';

export default class LiveViewers extends Component<{}, {viewers:string}> {
  constructor(props: ComponentPropsWithRef<ElementType>) {
    super(props);
    this.state = {
      viewers: 'Loading...',
    };
  }

  handleData(data: string) {
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
          url={
            generateURL(
              'ws',
              config.live_viewers.domain.name,
              config.live_viewers.domain.secure,
              '/',
            )
          }
          // eslint-disable-next-line react/jsx-no-bind
          onMessage={this.handleData.bind(this)}
          onClose={() => this.handleData('"Reconnecting..."')}
          reconnect
          debug
        />
      </div>
    );
  }
}

/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import type { ComponentPropsWithRef, ElementType } from 'react';
import { WebSocket } from 'nextjs-websocket';
import { generateURL } from '../helpers/urls';

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
              process.env.NEXT_PUBLIC_VIEWERS_DOMAIN,
              process.env.NEXT_PUBLIC_VIEWERS_DOMAIN_SECURE === 'true',
              '/',
            )
          }
          onMessage={this.handleData}
          onClose={() => this.handleData('"Reconnecting..."')}
          reconnect
          debug
        />
      </div>
    );
  }
}

import { Component } from '@stencil/core';

@Component({
  tag: 'disco-error',
  styleUrl: 'error.scss'
})
export class DiscoError {
  render() {
    return (
      <slot></slot>
    );
  }
}

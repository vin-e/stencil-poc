import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'disco-game-card',
  styleUrl: 'game-card.scss'
})
export class DiscoList {
  @Prop() selected: boolean
  @Prop() game: any

  @Event() discoGameCardSelected: EventEmitter;

  render() {
    const createdDate = new Date(this.game.created_at)
    const releaseDate = `${createdDate.getMonth() + 1}-${createdDate.getDate()}-${createdDate.getFullYear()}`

    return (
      <disco-card
        selected={this.selected}
        onClick={_ => this.discoGameCardSelected.emit(this.game)}>
        <disco-header
          slot="header"
          title={this.game.name}
          release-date={releaseDate}
          percent={this.game.rating}
          count={this.game.rating_count}
          hearts={this.game.popularity} />
        <p>
          {this.game.summary}
        </p>
      </disco-card>
    )
  }
}

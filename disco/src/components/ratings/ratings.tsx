import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'disco-ratings',
  styleUrl: 'ratings.scss'
})
export class DiscoRatings {

  @Prop({ mutable: false }) hearts: string
  
  @Prop({ mutable: false }) percent: string

  @Prop({ mutable: false }) count: string

  render() {
    return [
      <div>
        <span class="disco-ratings__hearts-count">{this.hearts}</span> <span class="disco-ratings__heart">&#10084;</span> | <span class="disco-ratings__percentage">{this.percent}% ({this.count})</span>
      </div>
    ]
  }
}

import { Component, Event, EventEmitter, Prop } from '@stencil/core'

@Component({
  tag: 'disco-option',
  styleUrl: 'option.scss'
})
export class DiscoDropDown {
  @Prop() selected: boolean

  @Prop() value: string

  @Prop() label: string

  @Event() discoDropDownOptionSelected: EventEmitter;
  private onOptionSelected() {
    this.discoDropDownOptionSelected.emit({ value: this.value, label: this.label})
  }

  render() {
    const classes = [
      'disco-dropdown__list-option',
      this.selected ? 'disco-dropdown__list-option--selected' : undefined
    ]
    return [
      <li class={classes.join(' ')} onClick={_ => this.onOptionSelected()}>{this.label}</li>
    ]
  }
}
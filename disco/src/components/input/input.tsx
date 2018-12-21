import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core'

@Component({
  tag: 'disco-input',
  styleUrl: 'input.scss'
})
export class DiscoInput {

  @Element() el!: HTMLElement;

  @Prop({ mutable: true }) value: string = ''

  @Prop() type: string = 'text'

  @Prop() width: string = '240'

  @Prop() maxlength: string = ''

  @Prop() minlength: string = ''

  @Prop() placeholder: string = ''

  @Prop() label: string

  @Prop() error: string

  @Event() discoInput: EventEmitter

  private onInput(ev: KeyboardEvent) {
    const input = ev.target as HTMLInputElement | null
    if (input) {
      this.value = input.value || ''
    }
    this.discoInput.emit(this.value)
  }

  render() {
    const label = this.label 
      ? <disco-label>{this.label}</disco-label>
      : undefined

    const error = this.error
      ? <disco-error>{this.error}</disco-error>
      : undefined

    return [
      label,
      <input
        value={this.value}
        style={{ width: `${this.width}px` }}
        type={this.type}
        placeholder={this.placeholder}
        maxlength={this.maxlength}
        minlength={this.minlength}
        onInput={this.onInput.bind(this)}
      />,
      error
    ]
  }
}

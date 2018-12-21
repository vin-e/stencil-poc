import { Component, Element, Event, EventEmitter, Listen, Prop, State } from '@stencil/core'

@Component({
  tag: 'disco-dropdown',
  styleUrl: 'dropdown.scss'
})
export class DiscoDropDown {

  @Element() el!: HTMLElement;

  @Prop({ mutable: true }) value: string = ''
  @Prop({ mutable: true }) valueLabel: string = ''

  @Prop() width: string = '192'

  @Prop() options: object[] // [{ value: undefined, label: 'Please pass in the options' }]

  @Prop() maxlength: string = ''

  @Prop() minlength: string = ''

  @Prop() placeholder: string = ''

  @Prop() label: string

  @Prop() error: string

  @State() show: boolean

  componentWillLoad() {
    if (this.value && this.options && this.options.length > 0) {
      const option: any = this.options.find((opt: any) => opt.value === this.value)
      if (option) {
        this.valueLabel = option.label
      }
    }
  }

  @Event() discoDropDownSelected: EventEmitter;

  @Listen('discoDropDownOptionSelected')
  discoDropDownOptionSelectedHandler(event: CustomEvent) {
    this.value = event.detail.value || ''
    this.valueLabel = event.detail.label || ''

    this.discoDropDownSelected.emit({value: this.value, label: this.valueLabel})
    this.onInputClickAway()
  }

  private onInputClick(ev) {
    const parent = this
    document.addEventListener('click', function dropdownClicked(e) {
      if (!ev.target.parentElement.contains(e.target) || ev.target.className === 'disco-dropdown__list-option') {
        parent.show = false
        this.removeEventListener('click', dropdownClicked)
      }
    })
    this.show = true
  }

  private onInputClickAway() {
    this.show = false
  }

  render() {
    const label = this.label 
      ? <disco-label>{this.label}</disco-label>
      : undefined

    const error = this.error
      ? <disco-error>{this.error}</disco-error>
      : undefined

    const classes = [
      'disco-dropdown__list',
      this.show ? 'disco-dropdown__list--show' : undefined
    ]

    return [
      label,
      <div
        class="disco-dropdown__value-container"
        style={{ width: `${this.width}px` }}
        onClick={ev => this.onInputClick(ev)}
        onBlur={this.onInputClickAway.bind(this)}>
        {this.value
          ? <div class="disco-dropdown__value">{this.valueLabel}</div>
          : <div class="disco-dropdown__placeholder">{this.placeholder}</div>}
          
        <div class={classes.join(' ')}>
          <ul class="disco-dropdown__list-ul">
            {this.show && this.options && this.options.map((option: any) => {
              return <disco-option selected={this.value === option.value} value={option.value} label={option.label} />
            })}
          </ul>
        </div>
      </div>,
      error
    ]
  }
}

import { Component, Event, EventEmitter, Listen, State } from '@stencil/core';
import igdb from 'igdb-api'

@Component({
  tag: 'disco-list',
  styleUrl: 'list.scss'
})
export class DiscoList {
  @State() isLoading: boolean = true
  @State() games: any[]
  @State() releaseEndYear: string
  @State() releaseStartYear: string
  @State() searchField: string
  @State() selectedId: number
  @State() sortBy: string = 'name:asc'

  componentWillLoad() {
    this.fetchData()
  }

  @Event() discoGameSelected: EventEmitter;

  @Listen('discoGameCardSelected')
  onDiscoGameSelected(e: any) {
    // stop propagation and re-emit a new event with the correct data
    e.preventDefault()
    const data = e.detail
    if (this.selectedId === data.id) {
      this.selectedId = undefined
      this.discoGameSelected.emit(undefined)
    } else {
      this.selectedId = data.id
      this.discoGameSelected.emit(data)
    }
  }

  @Listen('discoInput')
  onDiscoInput(e: any) {
    this.searchField = e.detail
    this.fetchData()
  }

  @Listen('discoDropDownSelected')
  onDiscoDropDownSelected(e: any) {
    this.sortBy = e.detail.value
    this.fetchData()
  }

  @Listen('discoReleaseYears')
  onDiscoReleaseYears(e: any) {
    this.releaseEndYear = e.detail.endYear ? `${e.detail.endYear}-12-31` : undefined
    this.releaseStartYear = e.detail.startYear ? `${e.detail.startYear}-01-01` : undefined
    this.fetchData()
  }

  sortOptions: object[] = [
    { value: 'name:asc', label: 'Game title (A to Z)' },
    { value: 'release_dates.date:desc', label: 'Recently released' }
  ]

  fetchData() {
    this.games = []
    this.isLoading = true

    igdb
      .list(this.searchField, this.releaseStartYear, this.releaseEndYear, '*', this.sortBy)
      .then(result => {
        const x = result.map(element => igdb.get(element.id))
        this.games = []
        Promise.all(x).then(res => {
          res.forEach((game: any) => {
            game.popularity = game.popularity
              ? +parseFloat(game.popularity).toFixed(2)
              : 0
            this.games.push(game)
          })
          this.isLoading = false
        })
      })
      .catch(_ => {
        this.isLoading = false
      })
  }

  render() {
    return (
      <div class="disco-list">
        <div class="disco-list__filter">
          <disco-input placeholder="Find games by title" label=" "></disco-input>
        </div>
        <div class="disco-list__release-year">
          <disco-release-years />
        </div>
        <div class="disco-list__sort">
          <disco-dropdown value={this.sortBy} placeholder="" label="Sort By" options={this.sortOptions} />
        </div>
        <div class="disco-list__main">
          {this.games && this.games.length > 0
            ? this.games.map(game => (
               <disco-game-card
                selected={game.id === this.selectedId}
                game={game}
                />
              ))
            : <disco-label>
                {this.isLoading
                  ? 'Please be patient while I load these games for you.'
                  : 'Is this the apocalypse because there are no games'
                }
              </disco-label>
          }
        </div>
      </div>
    )
  }
}

export interface IPaganationEvent {
    selected: number
  }

export interface IDeleteFavoriteEvent {
  target: {
    dataset: {
      id: number
    }
  }
}
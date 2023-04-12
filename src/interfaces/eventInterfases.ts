export interface IPaginationEvent {
    selected: number
  }

export interface IFavoriteEvent {
  target: {
    dataset: {
      id: number
    }
  }
}
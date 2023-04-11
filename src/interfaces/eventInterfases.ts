export interface IPaginationEvent {
    selected: number
  }

export interface IDeleteFavoriteEvent {
  target: {
    dataset: {
      id: number
    }
  }
}
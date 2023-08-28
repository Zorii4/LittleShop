export interface IProducts {
  id: string
  name: string
  cover: string
  price: number
  description: string
}

export interface ICartProducts extends IProducts{
  qty: number
}
export interface ICommonLink {
  text: string
  url: string
  blank: boolean
}

export type ICtaVariant = 'green' | 'green-inverted' | 'orange' | 'orange-inverted' | 'black' | 'black-inverted'

export interface ICta {
  variant: ICtaVariant
  text: string
}

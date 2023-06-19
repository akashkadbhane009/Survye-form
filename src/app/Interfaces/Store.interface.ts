export interface Store {
  status: boolean
  message: string
  data: Daum[]
  tracingId: string
  device_uuid: string
}

export interface Daum {
  external_links: ExternalLinks
  sales: Sales
  store_timing: StoreTiming
  address: Address
  map_link: string
  longitude: number
  latitude: number
  store_name: string
  store_code: string
  id: string
  store_email: string
  State: State
  City: City
  MediaMaster: MediaMaster
}

export interface ExternalLinks {
  swiggy_link: any
  zomato_link: any
}

export interface Sales {
  type: string[]
}

export interface StoreTiming {
  open: string
  close: string
}

export interface Address {
  pin: number
  address1: string
  address2: string
}

export interface State {
  id: string
  state_name: string
}

export interface City {
  id: string
  city_name: string
}

export interface MediaMaster {
  id: string
  media_url: string
}



export interface Res{
  status: boolean
  message : string
}

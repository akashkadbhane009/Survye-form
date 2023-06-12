export interface City {
  status: boolean
  message: string
  data: Data
  tracingId: string
  device_uuid: string
}

export interface Data {
  NumberOfPages: any
  data: Daum[]
}

export interface Daum {
  city_name: string
  id: string
  StateId: string
}

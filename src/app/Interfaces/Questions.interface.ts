export interface Questions {
  status: boolean
  message: string
  data: Data
  tracingId: string
  device_uuid: string
}

export interface Data {
  NumberOfPages: any
  data: Que[]
}

export interface Que {
  thru_date: string
  start_date: string
  sequence: number
  question_data: string
  question_code: string
  id: string
  type: string
  placholder?: string
  Input_heading?: string
  heading?: string
  category: string
}

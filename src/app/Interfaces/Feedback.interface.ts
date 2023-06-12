export interface Feedback {
  SurveyId: string
  Feedback_date: string
  Date_of_visit: string
  store_location: string
  city: string
  survey_response: SurveyResponse[]
  Offer_Communication: boolean
  email: string
  fullname: string
}

export interface SurveyResponse {
  QuestionId: string
  data: string
  type: string
  Response: string
}

export interface RegistrationBase {
  attachment: string
  comment: string
  date: firebase.firestore.Timestamp
  email: string
  name: string
  tel: string
}

export interface Registration extends RegistrationBase {
  id: string
  ref: firebase.firestore.DocumentReference
}

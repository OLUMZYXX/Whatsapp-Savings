export type User = {
  _id: string
  username: string
  email: string
  whatsapp?: string
}

export type Contribution = {
  amount: number
  date: string
  userId: string
}

export type PayoutScheduleItem = {
  date: string
  amount: number
  recipientId: string
}

export type Group = {
  _id: string
  members: User[]
  contributions: Contribution[]
  payoutSchedule: PayoutScheduleItem[]
}

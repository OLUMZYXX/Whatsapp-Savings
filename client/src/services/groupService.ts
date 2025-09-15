import api from './api'

interface GroupData {
  name: string
  description?: string
  members: string[]
  // Add other fields as needed
}

export const createGroup = async (groupData: GroupData) => {
  return api.post('/groups/create', groupData)
}

interface ContributionData {
  groupId: string
  amount: number
  memberId: string
  // Add other fields as needed
}

export const contributeToGroup = async (contributionData: ContributionData) => {
  return api.post('/groups/contribute', contributionData)
}

export const getGroupBalances = async (groupId: string) => {
  return api.get(`/groups/${groupId}/balances`)
}

'use client'

import { useState } from 'react'

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('7d')

  // Mock data
  const userData = {
    name: 'Sarah Johnson',
    totalBalance: 3240,
    totalGroups: 4,
    nextPayout: {
      amount: 850,
      date: '2024-02-15',
      groupName: 'Family Vacation Fund',
    },
    pendingContributions: 2,
  }

  const groups = [
    {
      id: 1,
      name: 'Family Vacation Fund',
      progress: 64,
      currentAmount: 3200,
      targetAmount: 5000,
      nextPayout: '2024-02-15',
      nextAmount: 850,
      members: 6,
      yourContribution: 400,
      status: 'active',
    },
    {
      id: 2,
      name: 'Emergency Fund',
      progress: 28,
      currentAmount: 1400,
      targetAmount: 5000,
      nextPayout: '2024-02-28',
      nextAmount: 200,
      members: 4,
      yourContribution: 500,
      status: 'active',
    },
    {
      id: 3,
      name: 'Friends Weekend Trip',
      progress: 85,
      currentAmount: 1700,
      targetAmount: 2000,
      nextPayout: '2024-02-10',
      nextAmount: 150,
      members: 8,
      yourContribution: 250,
      status: 'ending',
    },
  ]

  const recentActivity: Activity[] = [
    {
      id: 1,
      type: 'contribution',
      user: 'Mike Chen',
      amount: 200,
      group: 'Family Vacation Fund',
      time: '2 hours ago',
      avatar: '👨‍🎓',
    },
    {
      id: 2,
      type: 'payout',
      amount: 150,
      group: 'Friends Weekend Trip',
      time: '5 hours ago',
      avatar: '💰',
    },
    {
      id: 3,
      type: 'joined',
      user: 'Lisa Rodriguez',
      group: 'Emergency Fund',
      time: '1 day ago',
      avatar: '👩‍👧‍👦',
    },
    {
      id: 4,
      type: 'contribution',
      user: 'You',
      amount: 300,
      group: 'Emergency Fund',
      time: '2 days ago',
      avatar: '👤',
    },
    {
      id: 5,
      type: 'created',
      group: 'Business Team Lunch',
      time: '3 days ago',
      avatar: '🎯',
    },
  ]

  const chartData = {
    '7d': [100, 150, 200, 180, 220, 300, 250],
    '30d': [
      1200, 1500, 1800, 2100, 1900, 2300, 2800, 2600, 3000, 2700, 3200, 2900,
    ],
    '90d': [
      3000, 3500, 3200, 3800, 4100, 3900, 4200, 3800, 4000, 4300, 4100, 3900,
    ],
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'contribution':
        return '💰'
      case 'payout':
        return '📤'
      case 'joined':
        return '👋'
      case 'created':
        return '🎯'
      default:
        return '📊'
    }
  }

  type Activity = {
    id: number
    type: 'contribution' | 'payout' | 'joined' | 'created'
    user?: string
    amount?: number
    group: string
    time: string
    avatar: string
  }

  const getActivityText = (activity: Activity) => {
    switch (activity.type) {
      case 'contribution':
        return `${activity.user} contributed ₦${activity.amount} to ${activity.group}`
      case 'payout':
        return `Payout of ₦${activity.amount} from ${activity.group}`
      case 'joined':
        return `${activity.user} joined ${activity.group}`
      case 'created':
        return `You created ${activity.group}`
      default:
        return 'Unknown activity'
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-[1200px] mx-auto space-y-8'>
        {/* Welcome Message */}
        <div className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-3xl font-bold mb-2'>
                Welcome back, {userData.name}! 👋
              </h1>
              <p className='text-blue-100 text-lg'>
                You&#39;re doing great with your savings journey. Keep it up!
              </p>
            </div>
            <div className='hidden md:flex items-center space-x-4'>
              <div className='text-right'>
                <p className='text-blue-100 text-sm'>Total Saved</p>
                <p className='text-2xl font-bold'>
                  ₦{userData.totalBalance.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow'>
            <div className='flex items-center justify-between mb-4'>
              <div className='p-3 bg-blue-100 rounded-lg'>
                <span className='text-2xl'>💰</span>
              </div>
              <span className='text-sm text-gray-500'>Total Balance</span>
            </div>
            <div className='space-y-1'>
              <p className='text-2xl font-bold text-gray-900'>
                ₦{userData.totalBalance.toLocaleString()}
              </p>
              <p className='text-sm text-green-600'>+12% from last month</p>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow'>
            <div className='flex items-center justify-between mb-4'>
              <div className='p-3 bg-green-100 rounded-lg'>
                <span className='text-2xl'>👥</span>
              </div>
              <span className='text-sm text-gray-500'>Active Groups</span>
            </div>
            <div className='space-y-1'>
              <p className='text-2xl font-bold text-gray-900'>
                {userData.totalGroups}
              </p>
              <p className='text-sm text-blue-600'>2 nearing goals</p>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow'>
            <div className='flex items-center justify-between mb-4'>
              <div className='p-3 bg-purple-100 rounded-lg'>
                <span className='text-2xl'>📅</span>
              </div>
              <span className='text-sm text-gray-500'>Next Payout</span>
            </div>
            <div className='space-y-1'>
              <p className='text-2xl font-bold text-gray-900'>
                ₦{userData.nextPayout.amount}
              </p>
              <p className='text-sm text-gray-600'>
                {userData.nextPayout.date}
              </p>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow'>
            <div className='flex items-center justify-between mb-4'>
              <div className='p-3 bg-yellow-100 rounded-lg'>
                <span className='text-2xl'>⏳</span>
              </div>
              <span className='text-sm text-gray-500'>Pending</span>
            </div>
            <div className='space-y-1'>
              <p className='text-2xl font-bold text-gray-900'>
                {userData.pendingContributions}
              </p>
              <p className='text-sm text-orange-600'>Contributions due</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 gap-8'>
          {/* My Groups Section */}
          <div className='xl:col-span-2 space-y-6'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-gray-900'>
                My Savings Groups
              </h2>
              <button className='text-blue-600 hover:text-blue-700 font-medium text-sm'>
                View All
              </button>
            </div>

            <div className='space-y-4'>
              {groups.map((group) => (
                <div
                  key={group.id}
                  className='bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow'
                >
                  <div className='flex items-start justify-between mb-4'>
                    <div className='flex-1'>
                      <div className='flex items-center space-x-3 mb-2'>
                        <h3 className='text-lg font-semibold text-gray-900'>
                          {group.name}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            group.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : group.status === 'ending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {group.status}
                        </span>
                      </div>
                      <p className='text-sm text-gray-600 mb-4'>
                        {group.members} members • Your contribution: ₦
                        {group.yourContribution}
                      </p>

                      {/* Progress Bar */}
                      <div className='mb-4'>
                        <div className='flex justify-between text-sm text-gray-600 mb-2'>
                          <span>₦{group.currentAmount.toLocaleString()}</span>
                          <span>₦{group.targetAmount.toLocaleString()}</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-3'>
                          <div
                            className='bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500'
                            style={{ width: `${group.progress}%` }}
                          ></div>
                        </div>
                        <p className='text-sm text-blue-600 font-medium mt-2'>
                          {group.progress}% complete
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                    <div className='text-sm'>
                      <p className='text-gray-600'>
                        Next payout:{' '}
                        <span className='font-medium text-gray-900'>
                          ₦{group.nextAmount}
                        </span>
                      </p>
                      <p className='text-gray-500'>{group.nextPayout}</p>
                    </div>
                    <div className='flex space-x-2'>
                      <button className='px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors'>
                        Contribute
                      </button>
                      <button className='px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors'>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Timeline */}
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Recent Activity
            </h2>

            <div className='bg-white rounded-xl p-6 shadow-md border border-gray-200'>
              <div className='space-y-4'>
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className='flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0'
                  >
                    <div className='p-2 bg-gray-100 rounded-lg flex-shrink-0'>
                      <span className='text-lg'>
                        {getActivityIcon(activity.type)}
                      </span>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='text-sm text-gray-900 font-medium'>
                        {getActivityText(activity)}
                      </p>
                      <p className='text-xs text-gray-500 mt-1'>
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className='bg-white rounded-xl p-6 shadow-md border border-gray-200'>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                Quick Actions
              </h3>
              <div className='space-y-3'>
                <button className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg py-3 px-4 font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105'>
                  Create New Group
                </button>
                <button className='w-full border-2 border-blue-600 text-blue-600 rounded-lg py-3 px-4 font-medium hover:bg-blue-50 transition-colors'>
                  Join Existing Group
                </button>
                <button className='w-full bg-green-600 text-white rounded-lg py-3 px-4 font-medium hover:bg-green-700 transition-colors'>
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className='bg-white rounded-xl p-6 shadow-md border border-gray-200'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Contributions Trend
            </h2>
            <div className='flex space-x-2'>
              {['7d', '30d', '90d'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedPeriod === period
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {period === '7d'
                    ? '7 Days'
                    : period === '30d'
                    ? '30 Days'
                    : '90 Days'}
                </button>
              ))}
            </div>
          </div>

          {/* Simple Chart Visualization */}
          <div className='h-64 flex items-end space-x-2'>
            {chartData[selectedPeriod as keyof typeof chartData].map(
              (value, index) => {
                const maxValue = Math.max(
                  ...chartData[selectedPeriod as keyof typeof chartData]
                )
                const height = (value / maxValue) * 100
                return (
                  <div
                    key={index}
                    className='flex-1 flex flex-col items-center'
                  >
                    <div className='flex items-center justify-center mb-2'>
                      <span className='text-xs text-gray-600 font-medium'>
                        ₦{value}
                      </span>
                    </div>
                    <div
                      className='w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-600 hover:to-blue-500'
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className='mt-2 text-xs text-gray-500'>
                      {selectedPeriod === '7d'
                        ? `Day ${index + 1}`
                        : selectedPeriod === '30d'
                        ? `Week ${index + 1}`
                        : `Month ${index + 1}`}
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

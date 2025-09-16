'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setErrors({ email: 'Email is required' })
      return
    }

    if (!validateEmail(email)) {
      setErrors({ email: 'Please enter a valid email address' })
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
      // TODO: Implement API call to send reset code
      console.log('Sending reset code to:', email)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsCodeSent(true)
    } catch {
      setErrors({ email: 'Failed to send reset code. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  if (isCodeSent) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-4'>
        <div className='max-w-md w-full'>
          <div className='text-center mb-6'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4'>
              <span className='text-green-600 text-2xl'>✓</span>
            </div>
            <h1 className='text-3xl font-bold text-gray-900 mb-1'>
              Check Your Email
            </h1>
            <p className='text-sm text-gray-600'>
              We&apos;ve sent a reset code to {email}
            </p>
          </div>

          <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6'>
            <div className='text-center space-y-4'>
              <p className='text-gray-700 text-sm'>
                Click the link in the email to reset your password. The link
                will expire in 15 minutes.
              </p>

              <div className='bg-blue-50 rounded-lg p-4 border border-blue-200'>
                <p className='text-blue-800 text-sm'>
                  Didn&apos;t receive the email? Check your spam folder or{' '}
                  <button
                    onClick={() => setIsCodeSent(false)}
                    className='text-blue-600 hover:text-blue-700 font-medium underline'
                  >
                    try again
                  </button>
                </p>
              </div>

              <Link
                href='/login'
                className='inline-block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg text-center'
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-4'>
      <div className='max-w-md w-full'>
        <div className='text-center mb-6'>
          <h1 className='text-3xl font-bold text-gray-900 mb-1'>
            Reset Password
          </h1>
          <p className='text-sm text-gray-600'>
            Enter your email to receive a reset code
          </p>
        </div>

        <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-3 py-2.5 border rounded-lg transition-all duration-200 text-sm ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                } bg-gray-50 focus:bg-white`}
                placeholder='your.email@example.com'
              />
              {errors.email && (
                <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
              )}
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6'
            >
              {isLoading ? (
                <div className='flex items-center justify-center'>
                  <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                  Sending Code...
                </div>
              ) : (
                <>Send Reset Code</>
              )}
            </button>
          </form>

          <div className='mt-4 text-center'>
            <Link
              href='/login'
              className='text-blue-600 hover:text-blue-700 font-medium text-sm'
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ResetPasswordForm() {
  const [formData, setFormData] = useState({
    code: '',
    password: '',
    confirmPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.code.trim()) {
      newErrors.code = 'Reset code is required'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // TODO: Implement API call to reset password
      console.log('Resetting password with code:', formData.code)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSuccess(true)
    } catch {
      setErrors({ code: 'Invalid or expired reset code' })
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-4'>
        <div className='max-w-md w-full'>
          <div className='text-center mb-6'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4'>
              <span className='text-green-600 text-2xl'>✓</span>
            </div>
            <h1 className='text-3xl font-bold text-gray-900 mb-1'>
              Password Reset Successful
            </h1>
            <p className='text-sm text-gray-600'>
              Your password has been updated successfully
            </p>
          </div>

          <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6'>
            <div className='text-center space-y-4'>
              <p className='text-gray-700 text-sm'>
                You can now sign in with your new password.
              </p>

              <Link
                href='/login'
                className='inline-block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg text-center'
              >
                Sign In Now
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
            Reset Your Password
          </h1>
          <p className='text-sm text-gray-600'>
            Enter the code from your email and your new password
          </p>
        </div>

        <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='code'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Reset Code
              </label>
              <input
                type='text'
                id='code'
                name='code'
                value={formData.code}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 border rounded-lg transition-all duration-200 text-sm ${
                  errors.code
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                } bg-gray-50 focus:bg-white`}
                placeholder='Enter reset code'
              />
              {errors.code && (
                <p className='text-red-500 text-xs mt-1'>{errors.code}</p>
              )}
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                New Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 border rounded-lg transition-all duration-200 text-sm ${
                  errors.password
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                } bg-gray-50 focus:bg-white`}
                placeholder='Enter new password'
              />
              {errors.password && (
                <p className='text-red-500 text-xs mt-1'>{errors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Confirm New Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 border rounded-lg transition-all duration-200 text-sm ${
                  errors.confirmPassword
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                } bg-gray-50 focus:bg-white`}
                placeholder='Confirm new password'
              />
              {errors.confirmPassword && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.confirmPassword}
                </p>
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
                  Resetting Password...
                </div>
              ) : (
                <>Reset Password</>
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

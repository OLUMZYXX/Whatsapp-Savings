'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }))
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // TODO: Implement login logic
    console.log('Login attempt:', { email, password, rememberMe })

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-4'>
      <div className='max-w-md w-full'>
        {/* Header Section */}
        <div className='text-center mb-6'>
          <h1 className='text-3xl font-bold text-gray-900 mb-1'>
            Welcome Back
          </h1>
          <p className='text-sm text-gray-600'>Sign in to your account</p>
        </div>

        {/* Login Card */}
        <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Email Field */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email
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

            {/* Password Field */}
            <div>
              <div className='flex justify-between items-center mb-1'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <Link
                  href='/forgot-password'
                  className='text-xs text-blue-600 hover:text-blue-700 font-medium'
                >
                  Forgot?
                </Link>
              </div>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full px-3 py-2.5 pr-10 border rounded-lg transition-all duration-200 text-sm ${
                    errors.password
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  } bg-gray-50 focus:bg-white`}
                  placeholder='Enter password'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm'
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && (
                <p className='text-red-500 text-xs mt-1'>{errors.password}</p>
              )}
            </div>

            {/* Remember Me */}
            <div className='flex items-center'>
              <input
                type='checkbox'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
              />
              <span className='ml-2 text-sm text-gray-700'>Remember me</span>
            </div>

            {/* Login Button */}
            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6'
            >
              {isLoading ? (
                <div className='flex items-center justify-center'>
                  <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                  Signing In...
                </div>
              ) : (
                <>Sign In</>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className='mt-4 text-center'>
            <p className='text-gray-600 text-sm'>
              Don&apos;t have an account?{' '}
              <Link
                href='/signup'
                className='text-blue-600 hover:text-blue-700 font-medium'
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

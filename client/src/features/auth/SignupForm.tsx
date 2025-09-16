'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    whatsapp: '',
    password: '',
    confirmPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
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

    if (
      formData.whatsapp &&
      !/^\+?[\d\s\-\(\)]{10,}$/.test(formData.whatsapp)
    ) {
      newErrors.whatsapp = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // TODO: Implement signup logic
    console.log('Signup attempt:', formData)

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
            Join SavingsHub
          </h1>
          <p className='text-sm text-gray-600'>Start your savings journey</p>
        </div>

        {/* Form Card */}
        <div className='bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Username Field */}
            <div>
              <label
                htmlFor='username'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Username
              </label>
              <div className='relative'>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 pl-10 border rounded-lg transition-all duration-200 text-sm ${
                    errors.username
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  } bg-gray-50 focus:bg-white`}
                  placeholder='Choose username'
                />
                <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm'>
                  👤
                </div>
              </div>
              {errors.username && (
                <p className='text-red-500 text-xs mt-1'>{errors.username}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email
              </label>
              <div className='relative'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 pl-10 border rounded-lg transition-all duration-200 text-sm ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  } bg-gray-50 focus:bg-white`}
                  placeholder='your.email@example.com'
                />
                <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm'>
                  📧
                </div>
              </div>
              {errors.email && (
                <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
              )}
            </div>

            {/* WhatsApp Field */}
            <div>
              <label
                htmlFor='whatsapp'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                WhatsApp
                <span className='text-blue-600 text-xs ml-1'>(Optional)</span>
              </label>
              <div className='relative'>
                <input
                  type='tel'
                  id='whatsapp'
                  name='whatsapp'
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 pl-10 border rounded-lg transition-all duration-200 text-sm ${
                    errors.whatsapp
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  } bg-gray-50 focus:bg-white`}
                  placeholder='+1234567890'
                />
                <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm'>
                  💬
                </div>
              </div>
              {errors.whatsapp && (
                <p className='text-red-500 text-xs mt-1'>{errors.whatsapp}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 pl-10 pr-10 border rounded-lg transition-all duration-200 text-sm ${
                    errors.password
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  } bg-gray-50 focus:bg-white`}
                  placeholder='Create password'
                />
                <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm'>
                  🔒
                </div>
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

            {/* Confirm Password Field */}
            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Confirm Password
              </label>
              <div className='relative'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 pl-10 pr-10 border rounded-lg transition-all duration-200 text-sm ${
                    errors.confirmPassword
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  } bg-gray-50 focus:bg-white`}
                  placeholder='Confirm password'
                />
                <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm'>
                  🔒
                </div>
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm'
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6'
            >
              {isLoading ? (
                <div className='flex items-center justify-center'>
                  <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                  Creating Account...
                </div>
              ) : (
                <>Create Account</>
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <div className='mt-4 text-center'>
            <p className='text-gray-600 text-sm'>
              Already have an account?{' '}
              <Link
                href='/login'
                className='text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200'
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

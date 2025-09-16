'use client'
import { useState, useRef, useMemo, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

export default function HomePage() {
  // Scroll to Top button state
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const [activeCase, setActiveCase] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)
  // const [activeTestimonial, setActiveTestimonial] = useState(0)
  // Scroll hooks for parallax effects
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), {
    stiffness: 100,
    damping: 30,
  })
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), {
    stiffness: 100,
    damping: 30,
  })
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0.8]), {
    stiffness: 100,
    damping: 30,
  })

  // iPhone animation hooks
  const phoneRef = useRef(null)
  const phoneScroll = useScroll({
    target: phoneRef,
    offset: ['start end', 'end start'],
  })

  const phoneY = useSpring(
    useTransform(phoneScroll.scrollYProgress, [0, 1], [100, -100]),
    { stiffness: 100, damping: 30 }
  )
  const phoneScale = useSpring(
    useTransform(phoneScroll.scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]),
    { stiffness: 100, damping: 30 }
  )

  // Features section scroll hooks
  const featuresRef = useRef(null)
  const featuresScroll = useScroll({
    target: featuresRef,
    offset: ['start end', 'end start'],
  })

  const featuresY = useSpring(
    useTransform(featuresScroll.scrollYProgress, [0, 1], [50, -50]),
    { stiffness: 100, damping: 30 }
  )
  const featuresOpacity = useSpring(
    useTransform(
      featuresScroll.scrollYProgress,
      [0, 0.3, 0.7, 1],
      [0, 1, 1, 0.8]
    ),
    { stiffness: 100, damping: 30 }
  )

  // How It Works section scroll hooks
  const howItWorksRef = useRef(null)
  const howItWorksScroll = useScroll({
    target: howItWorksRef,
    offset: ['start end', 'end start'],
  })

  const howItWorksY = useSpring(
    useTransform(howItWorksScroll.scrollYProgress, [0, 1], [30, -30]),
    { stiffness: 100, damping: 30 }
  )
  const howItWorksScale = useSpring(
    useTransform(
      howItWorksScroll.scrollYProgress,
      [0, 0.5, 1],
      [0.95, 1.02, 0.98]
    ),
    { stiffness: 100, damping: 30 }
  )

  // Testimonials section scroll hooks
  const testimonialsRef = useRef(null)
  const testimonialsScroll = useScroll({
    target: testimonialsRef,
    offset: ['start end', 'end start'],
  })

  const testimonialsY = useSpring(
    useTransform(testimonialsScroll.scrollYProgress, [0, 1], [40, -40]),
    { stiffness: 100, damping: 30 }
  )
  const testimonialsRotate = useSpring(
    useTransform(testimonialsScroll.scrollYProgress, [0, 0.5, 1], [-2, 0, 2]),
    { stiffness: 100, damping: 30 }
  )

  // FAQ section scroll hooks
  const faqRef = useRef(null)
  const faqScroll = useScroll({
    target: faqRef,
    offset: ['start end', 'end start'],
  })

  const faqY = useSpring(
    useTransform(faqScroll.scrollYProgress, [0, 1], [25, -25]),
    { stiffness: 100, damping: 30 }
  )
  const faqOpacity = useSpring(
    useTransform(faqScroll.scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]),
    { stiffness: 100, damping: 30 }
  )

  // CTA section scroll hooks
  const ctaRef = useRef(null)
  const ctaScroll = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  })

  const ctaY = useSpring(
    useTransform(ctaScroll.scrollYProgress, [0, 1], [60, -60]),
    { stiffness: 100, damping: 30 }
  )
  const ctaScale = useSpring(
    useTransform(ctaScroll.scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]),
    { stiffness: 100, damping: 30 }
  )

  const features = [
    {
      icon: '💬',
      title: 'WhatsApp Integration',
      description:
        'Manage your savings directly through WhatsApp without downloading extra apps.',
      detail:
        'Send commands, check balances, and receive notifications all within WhatsApp.',
    },
    {
      icon: '👥',
      title: 'Group Savings',
      description: 'Create and join savings groups with friends and family.',
      detail:
        'Set group goals, invite members, and save together towards common objectives.',
    },
    {
      icon: '📊',
      title: 'Real-time Tracking',
      description: 'Monitor contributions and payouts with live updates.',
      detail:
        'View detailed analytics, contribution history, and payout schedules.',
    },
    {
      icon: '🔒',
      title: 'WhatsApp-Level Security',
      description: "Secured with WhatsApp's built-in privacy protections.",
      detail:
        "Your savings data benefits from WhatsApp's end-to-end encryption and proven security infrastructure.",
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content:
        'SavingsHub helped our team save for our company retreat. The WhatsApp integration made it so easy!',
      avatar: '👩‍💼',
    },
    {
      name: 'Mike Chen',
      role: 'College Student',
      content:
        'Perfect for saving with roommates for rent and utilities. No more awkward money conversations!',
      avatar: '👨‍🎓',
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Family Organizer',
      content:
        'Our family vacation fund grew faster than ever. The kids loved tracking our progress together.',
      avatar: '👩‍👧‍👦',
    },
  ]

  const useCases = [
    {
      id: 'family',
      title: 'Family Savings',
      subtitle: 'Build your future together',
      description:
        'Save for family vacations, emergencies, or future goals with your loved ones. Create lasting memories while building financial security.',
      image: '/iPhone 16 Plus Light.png',
      alt: 'Family using SavingsHub on WhatsApp',
      stats: { users: '2.5K+', saved: '$485K' },
      features: [
        'Emergency funds',
        'Vacation planning',
        'Education savings',
        'Home improvements',
      ],
      color: 'from-purple-500 to-purple-700',
      bgGradient: 'from-purple-50 to-purple-100',
    },
    {
      id: 'friends',
      title: 'Friends Group',
      subtitle: 'Share experiences, share savings',
      description:
        'Pool money with friends for events, gifts, or shared experiences. Make group planning effortless and transparent.',
      image: '/iPhone 16 Plus Light.png',
      alt: 'Friends group saving together',
      stats: { users: '4.2K+', saved: '$320K' },
      features: [
        'Event planning',
        'Gift pooling',
        'Travel adventures',
        'Group purchases',
      ],
      color: 'from-green-500 to-green-700',
      bgGradient: 'from-green-50 to-green-100',
    },
    {
      id: 'business',
      title: 'Business Team',
      subtitle: "Invest in your team's success",
      description:
        'Team up for company outings, training, or group investments. Strengthen team bonds while achieving business goals.',
      image: '/iPhone 16 Plus Light.png',
      alt: 'Business team saving for company goals',
      stats: { users: '1.8K+', saved: '$750K' },
      features: [
        'Team building',
        'Training funds',
        'Equipment purchases',
        'Company events',
      ],
      color: 'from-blue-500 to-blue-700',
      bgGradient: 'from-blue-50 to-blue-100',
    },
  ]
  // Precompute random values for hero particles to avoid hydration mismatch
  const heroParticles = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      x: Math.random() * 50 - 25,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
  }, [])

  return (
    <div className='min-h-screen flex flex-col bg-gray-50 overflow-x-hidden overflow-y-hidden'>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 z-50 bg-blue-600 text-white rounded-full shadow-lg p-3 hover:bg-blue-700 transition-all duration-200 flex items-center justify-center'
          aria-label='Scroll to top'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 15l7-7 7 7'
            />
          </svg>
        </button>
      )}
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className='h-screen px-4 sm:px-6 py-6 sm:py-8 lg:py-20 bg-gradient-to-br from-white via-blue-50 to-gray-100 relative overflow-hidden'
        style={{ y, opacity }}
      >
        {/* Animated Background Particles */}
        <div className='absolute inset-0 overflow-hidden'>
          {heroParticles.map((particle, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-blue-400 rounded-full opacity-20'
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, particle.x, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        <motion.div
          className='max-w-7xl mx-auto relative z-10'
          style={{ scale }}
        >
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left side - Text content */}
            <motion.div
              className='text-center lg:text-left order-1 lg:order-1'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span
                  className='animate-text-reveal'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Save Smarter, Together –{' '}
                </motion.span>
                <motion.span
                  className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 animate-gradient-shift'
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2, type: 'spring' }}
                >
                  SavingsHub
                </motion.span>
              </motion.h1>

              <motion.p
                className='text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 px-4 lg:px-0'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                Create savings groups with friends, manage contributions, and
                chat directly on WhatsApp. A simple way to reach your financial
                goals faster.
              </motion.p>

              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 px-4 lg:px-0'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <motion.button
                  className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse-glow text-sm sm:text-base'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                >
                  Start Saving Today
                </motion.button>
                <motion.button
                  className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-100 hover:border-blue-300 transition-all duration-200 animate-bounce-in text-sm sm:text-base'
                  whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 2.8 }}
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right side - iPhone Mockup */}
            <motion.div
              ref={phoneRef}
              className='flex justify-center lg:justify-end relative order-2 lg:order-2'
              style={{ y: phoneY, scale: phoneScale }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.0, type: 'spring' }}
            >
              {/* iPhone Container */}
              <motion.div
                className='relative mt-4 lg:mt-8'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src='/iPhone 16 Plus Light.png'
                  alt='SavingsHub iPhone mockup showing WhatsApp integration'
                  width={200}
                  height={432}
                  className='w-48 h-auto sm:w-56 md:w-64 lg:w-60 xl:w-72 shadow-2xl'
                  priority
                />

                {/* Animated Border Glow */}
                <motion.div
                  className='absolute inset-0 rounded-3xl border-2 border-blue-400 opacity-0'
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Use Cases Section */}
      <section
        id='usecases'
        className='py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden'
      >
        {/* Background Decorations */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-20'></div>
          <div className='absolute -bottom-32 -left-32 w-80 h-80 bg-purple-100 rounded-full opacity-20'></div>
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          {/* Header */}
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className='inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4'
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
              viewport={{ once: true }}
            >
              Perfect for Every Group
            </motion.div>

            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Tailored for Your{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
                Savings Goals
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Whether you&#39;re saving with family, friends, or colleagues,
              SavingsHub adapts to your unique needs and goals.
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div
            className='flex justify-center mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='bg-white rounded-2xl p-2 shadow-lg border border-gray-200'>
              <div className='flex space-x-2'>
                {useCases.map((useCase, index) => (
                  <button
                    key={useCase.id}
                    onClick={() => setActiveCase(index)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeCase === index
                        ? `bg-gradient-to-r ${useCase.color} text-white shadow-lg transform scale-105`
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {useCase.title}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Active Use Case Display */}
          <motion.div
            key={activeCase}
            className={`bg-gradient-to-br ${useCases[activeCase].bgGradient} rounded-3xl p-8 md:p-12 shadow-xl border border-white/50`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className='mb-6'>
                  <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                    {useCases[activeCase].title}
                  </h3>
                  <p className='text-lg text-gray-700 font-medium mb-4'>
                    {useCases[activeCase].subtitle}
                  </p>
                  <p className='text-gray-600 text-lg leading-relaxed'>
                    {useCases[activeCase].description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-2 gap-3'>
                  {useCases[activeCase].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className='flex items-center space-x-2 bg-white/60 rounded-lg p-3'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCases[activeCase].color}`}
                      ></div>
                      <span className='text-sm text-gray-700 font-medium'>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Content - Phone Mockup */}
              <motion.div
                className='flex justify-center lg:justify-end'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className='relative'>
                  {/* Main Phone */}
                  <motion.div
                    className='relative z-10'
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Image
                      src={useCases[activeCase].image}
                      alt={useCases[activeCase].alt}
                      width={280}
                      height={560}
                      className='w-64 h-auto shadow-2xl rounded-3xl'
                      priority
                    />
                  </motion.div>

                  {/* Background Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${useCases[activeCase].color} rounded-3xl opacity-20 blur-xl scale-110`}
                  ></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <motion.section
        ref={featuresRef}
        className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white'
        style={{ y: featuresY, opacity: featuresOpacity }}
      >
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose SavingsHub?
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Discover the features that make saving with friends easier and
              more engaging than ever before.
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center'>
            <motion.div
              className='space-y-6'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 hover-lift transform hover:scale-105 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className='flex items-start space-x-4'>
                    <span className='text-2xl flex-shrink-0'>
                      {feature.icon}
                    </span>
                    <div className='min-w-0 flex-1'>
                      <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-2'>
                        {feature.title}
                      </h3>
                      <p className='text-sm sm:text-base text-gray-600'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className='hidden lg:block bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-8 text-white shadow-2xl'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className='text-center'>
                <span className='text-3xl sm:text-4xl mb-4 block'>
                  {features[activeFeature].icon}
                </span>
                <h3 className='text-xl sm:text-2xl font-bold mb-4'>
                  {features[activeFeature].title}
                </h3>
                <p className='text-blue-100 text-base sm:text-lg'>
                  {features[activeFeature].detail}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        ref={howItWorksRef}
        className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white'
        style={{ y: howItWorksY, scale: howItWorksScale }}
      >
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              How It Works
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Get started with SavingsHub in just three simple steps
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {[
              {
                step: '01',
                title: 'Create Your Group',
                desc: 'Set up a savings group and invite your friends via WhatsApp',
              },
              {
                step: '02',
                title: 'Set Goals & Rules',
                desc: 'Define your savings target, contribution schedule, and group rules',
              },
              {
                step: '03',
                title: 'Start Saving',
                desc: 'Members contribute through secure payments and track progress together',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className='text-center relative'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className='w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold mx-auto mb-4 sm:mb-6'
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.step}
                </motion.div>
                <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4'>
                  {item.title}
                </h3>
                <p className='text-sm sm:text-base text-gray-600 px-2'>
                  {item.desc}
                </p>
                {index < 2 && (
                  <motion.div
                    className='hidden lg:block absolute top-6 sm:top-8 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-8'
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white'
        style={{ y: testimonialsY, rotate: testimonialsRotate }}
      >
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              What Our Users Say
            </h2>
            <p className='text-lg text-gray-600'>
              Join thousands of happy savers who&#39;ve achieved their goals
              with SavingsHub
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className='bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift transform hover:scale-105 hover:rotate-1'
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 * index,
                  type: 'spring',
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <motion.div
                  className='text-center mb-4 sm:mb-6'
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className='text-3xl sm:text-4xl'>
                    {testimonial.avatar}
                  </span>
                </motion.div>
                <blockquote className='text-base sm:text-lg text-gray-700 text-center mb-4 sm:mb-6 italic'>
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <div className='text-center'>
                  <div className='font-semibold text-gray-900 text-sm sm:text-base'>
                    {testimonial.name}
                  </div>
                  <div className='text-xs sm:text-sm text-gray-600'>
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={faqRef}
        id='faq'
        className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white'
        style={{ y: faqY, opacity: faqOpacity }}
      >
        <div className='max-w-4xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-lg text-gray-600'>
              Get answers to common questions about SavingsHub
            </p>
          </motion.div>

          <div className='space-y-4 sm:space-y-6'>
            {[
              {
                question: 'How does SavingsHub work with WhatsApp?',
                answer:
                  'SavingsHub integrates directly with WhatsApp through our secure bot. You can create groups, make contributions, check balances, and receive notifications all within your existing WhatsApp app. No need to download additional apps or switch platforms.',
              },
              {
                question: 'Is my money safe with SavingsHub?',
                answer:
                  "Absolutely. Your funds are protected by bank-level security and WhatsApp's built-in privacy protections. We use end-to-end encryption and partner with licensed financial institutions to ensure your money is always secure and accessible.",
              },
              {
                question: 'How many people can join a savings group?',
                answer:
                  "You can invite as many friends and family members as you need for your savings goal. Whether it's a small group of 3 friends saving for a weekend trip or a large family group planning a reunion, SavingsHub scales to fit your needs.",
              },
              {
                question: 'Can I withdraw my money anytime?',
                answer:
                  "Yes, you have access to your contributions at any time. However, group administrators can set withdrawal rules and notice periods to help everyone stay committed to their savings goals. You'll always know the terms before joining any group.",
              },
              {
                question: 'What happens if someone leaves the group?',
                answer:
                  "If a member leaves, they can withdraw their contributions according to the group's rules. The remaining members can continue saving towards their goal, and new members can be invited to join at any time.",
              },
              {
                question: 'Are there any fees to use SavingsHub?',
                answer:
                  'SavingsHub is free to use for basic savings groups. We only charge minimal processing fees for transactions, which are clearly disclosed before any payment. No hidden fees, no monthly subscriptions.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300'
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <details className='group'>
                  <summary className='flex justify-between items-center cursor-pointer p-4 sm:p-6 font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200'>
                    <span className='text-sm sm:text-base pr-2'>
                      {faq.question}
                    </span>
                    <motion.span
                      className='text-blue-600 group-open:rotate-180 transition-transform duration-300 flex-shrink-0'
                      whileHover={{ scale: 1.2 }}
                    >
                      ↓
                    </motion.span>
                  </summary>
                  <motion.div
                    className='px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 leading-relaxed'
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className='text-sm sm:text-base'>{faq.answer}</p>
                  </motion.div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-blue-800'
        style={{ y: ctaY, scale: ctaScale }}
      >
        <motion.div
          className='max-w-4xl mx-auto text-center text-white px-4 sm:px-6'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Start Saving Together?
          </motion.h2>
          <motion.p
            className='text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            Join thousands of users who are already achieving their financial
            goals with SavingsHub.
          </motion.p>
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your First Group
            </motion.button>
            <motion.button
              className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-200 text-sm sm:text-base'
              whileHover={{
                scale: 1.1,
                backgroundColor: '#ffffff',
                color: '#2563eb',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

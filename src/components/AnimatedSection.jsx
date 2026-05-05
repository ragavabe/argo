import { useInView } from 'react-intersection-observer'

/**
 * Wrapper component that animates children when they scroll into view.
 * Uses the global .animate-in / .visible CSS classes.
 */
function AnimatedSection({ children, className = '', delay = 0, threshold = 0.15, as: Tag = 'div' }) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  return (
    <Tag
      ref={ref}
      className={`animate-in ${inView ? 'visible' : ''} ${delay ? `delay-${delay}` : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}

export default AnimatedSection

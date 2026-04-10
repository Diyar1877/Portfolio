import './RocketBg.css'

export default function RocketBg() {
  return (
    <div
      className="rocket-bg"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        className="rocket-svg"
        viewBox="0 0 200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 0 C100 0 130 80 130 160 L70 160 C70 80 100 0 100 0Z"
          fill="rgba(255, 26, 26, 0.3)"
          stroke="rgba(255, 26, 26, 0.6)"
          strokeWidth="1.5"
        />
        <rect
          x="70" y="160" width="60" height="280"
          fill="rgba(255, 26, 26, 0.2)"
          stroke="rgba(255, 26, 26, 0.5)"
          strokeWidth="1.5"
        />
        <rect x="70" y="200" width="60" height="3" fill="rgba(255, 26, 26, 0.5)" />
        <rect x="70" y="340" width="60" height="3" fill="rgba(255, 26, 26, 0.5)" />
        <circle
          cx="100" cy="240" r="14"
          fill="rgba(255, 26, 26, 0.15)"
          stroke="rgba(255, 26, 26, 0.6)"
          strokeWidth="1.5"
        />
        <circle cx="100" cy="240" r="8" fill="rgba(255, 26, 26, 0.3)" />
        <text
          x="100" y="310"
          textAnchor="middle"
          fill="rgba(255, 26, 26, 0.4)"
          fontSize="14"
          fontFamily="'Share Tech Mono', monospace"
          letterSpacing="4"
        >
          1877
        </text>
        <path
          d="M70 380 L70 440 L30 480 L30 440 C30 420 50 400 70 380Z"
          fill="rgba(255, 26, 26, 0.25)"
          stroke="rgba(255, 26, 26, 0.5)"
          strokeWidth="1.5"
        />
        <path
          d="M130 380 L130 440 L170 480 L170 440 C170 420 150 400 130 380Z"
          fill="rgba(255, 26, 26, 0.25)"
          stroke="rgba(255, 26, 26, 0.5)"
          strokeWidth="1.5"
        />
        <path
          d="M80 440 L75 480 L125 480 L120 440Z"
          fill="rgba(255, 26, 26, 0.25)"
          stroke="rgba(255, 26, 26, 0.5)"
          strokeWidth="1.5"
        />
        <path
          className="flame-outer"
          d="M82 480 C82 480 90 540 100 580 C110 540 118 480 118 480"
          fill="rgba(255, 26, 26, 0.25)"
          stroke="rgba(255, 26, 26, 0.4)"
          strokeWidth="1"
        />
        <path
          className="flame-inner"
          d="M90 480 C90 480 95 520 100 550 C105 520 110 480 110 480"
          fill="rgba(255, 26, 26, 0.35)"
        />
      </svg>
    </div>
  )
}

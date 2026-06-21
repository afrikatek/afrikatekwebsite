import { Link } from 'react-router-dom'

/* The Afrikatek mark — keystone "A" in white + copper, ported verbatim from the prototype. */
export function BrandMark({ width = 28 }) {
  return (
    <svg width={width} viewBox="0 0 667 691" aria-hidden="true">
      <path d="M300 24L357.508 184.2L146.986 543.615H0L300 24Z" fill="#fff" />
      <rect width="150" height="400" transform="matrix(1 0 0.5 0.866025 148 24)" fill="#fff" />
      <rect width="150" height="169.741" transform="matrix(1 0 0.5 0.866025 432 544)" fill="#C45A23" />
      <rect width="150" height="350.679" transform="matrix(0.493095 -0.869976 0.999968 -0.00795532 213 500.678)" fill="#fff" />
    </svg>
  )
}

export default function Brand({ width = 28, wmStyle }) {
  return (
    <Link className="brand" to="/" aria-label="Afrikatek home" style={wmStyle ? { textDecoration: 'none' } : undefined}>
      <BrandMark width={width} />
      <span className="wm" style={wmStyle}>Afrikatek<span className="dot">.</span></span>
    </Link>
  )
}

/* The signature hero artwork: dot-matrix Africa + an animated node network.
   Lines are drawn in by usePageMotion via the #netlines id. */
export default function AfricaNetwork() {
  return (
    <div className="hero-africa" aria-hidden="true">
      <div className="frame">
        <img className="dots" src="/assets/africa-dots-dark.svg" alt="" />
        <svg className="net" viewBox="0 0 600 630">
          <g id="netlines">
            <line x1="398.5" y1="551.3" x2="424.8" y2="61.3" />
            <line x1="398.5" y1="551.3" x2="183.1" y2="266.9" />
            <line x1="398.5" y1="551.3" x2="475.6" y2="335.1" />
            <line x1="398.5" y1="551.3" x2="14" y2="196" />
            <line x1="398.5" y1="551.3" x2="320" y2="612" />
            <line x1="398.5" y1="551.3" x2="151.5" y2="274.8" />
            <line x1="183.1" y1="266.9" x2="424.8" y2="61.3" />
            <line x1="475.6" y1="335.1" x2="424.8" y2="61.3" />
          </g>
          <circle className="ring" cx="424.8" cy="61.3" r="6" />
          <circle className="ring" cx="183.1" cy="266.9" r="6" />
          <circle className="ring" cx="475.6" cy="335.1" r="6" />
          <circle className="ring hub" cx="398.5" cy="551.3" r="6" />
          <circle className="node" cx="424.8" cy="61.3" r="4.5" />
          <circle className="node" cx="183.1" cy="266.9" r="4.5" />
          <circle className="node" cx="475.6" cy="335.1" r="4.5" />
          <circle className="node" cx="14" cy="196" r="4.5" />
          <circle className="node" cx="320" cy="612" r="4.5" />
          <circle className="node" cx="151.5" cy="274.8" r="4.5" />
          <circle className="node hub" cx="398.5" cy="551.3" r="7" />
        </svg>
      </div>
    </div>
  )
}

/* Section drawings for the DMV Chimney & Airduct page. One line weight, one
   palette (see chimney.css tokens). All decorative: the text beside each
   drawing carries the content. */

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  focusable: false,
} as const;

function Bond({ id }: { id: string }) {
  return (
    <pattern id={id} width="36" height="18" patternUnits="userSpaceOnUse">
      <path d="M0 .5H36M0 9.5H36M.5 0V9M18.5 9V18" className="dca-d-joint" />
    </pattern>
  );
}

/** Wordmark glyph: a chimney stack with its cap. */
export function Mark() {
  return (
    <svg {...svgProps} viewBox="0 0 24 28" className="dca-mark">
      <path d="M4 3h16l-2.5-3h-11z" fill="currentColor" />
      <path d="M8 3v4M12 3v4M16 3v4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 7h18v4H3z" fill="currentColor" />
      <path d="M5.5 11h13v17h-13z" fill="currentColor" opacity=".55" />
    </svg>
  );
}

/** The cap and flue tile that sit on top of the page-height chimney stack. */
export function StackCap() {
  return (
    <svg {...svgProps} viewBox="0 0 100 46" className="dca-cap" preserveAspectRatio="xMidYMax meet">
      <path d="M22 9h56l-7-9H29z" className="dca-d-metal" />
      <path d="M33 9v15M44.5 9v15M55.5 9v15M67 9v15" className="dca-d-line" />
      <path d="M2 46l6-10h84l6 10z" className="dca-d-mortar" />
      <path d="M30 24h40v22H30z" className="dca-d-air" />
    </svg>
  );
}

/** A row of neighbouring rooftops behind the hero. */
export function Skyline() {
  return (
    <svg {...svgProps} viewBox="0 0 1200 120" preserveAspectRatio="none" className="dca-skyline">
      <path d="M0 120V70h150V52h18v18h70V40h190v24h60V30h22v34h130V58h210V36h20v22h90V48h150V26h20v22h70v72z" />
    </svg>
  );
}

/** Roof: the top of a stack with cap, crown, flue tile, joints and flashing. */
export function StackDetail() {
  return (
    <svg {...svgProps} viewBox="0 0 320 300" className="dca-drawing">
      <defs>
        <Bond id="dca-bond-a" />
      </defs>
      <path d="M0 252h320v48H0z" className="dca-d-slab" />
      <path d="M0 252h320" className="dca-d-line" />
      <path d="M104 86h112v166H104z" className="dca-d-brick" />
      <path d="M104 86h112v166H104z" fill="url(#dca-bond-a)" />
      <path d="M138 44h44v208h-44z" className="dca-d-air" />
      <path d="M92 86l10-16h116l10 16z" className="dca-d-mortar" />
      <path d="M144 44V24M160 44V24M176 44V24" className="dca-d-line" />
      <path d="M126 24h68l-9-12h-50z" className="dca-d-metal" />
      <path d="M104 226l-26 26h26zM216 226l26 26h-26z" className="dca-d-metal" />
      <path d="M104 86v166M216 86v166" className="dca-d-line" />
    </svg>
  );
}

/** Upper floor: a duct trunk under the ceiling with three registers. */
export function DuctRun() {
  const boots = [120, 360, 600];
  return (
    <svg {...svgProps} viewBox="0 0 720 132" className="dca-drawing dca-drawing-wide">
      <path d="M0 22h720v40H0z" className="dca-d-air-soft" />
      <path d="M0 22h720M0 62h98M142 62h196M382 62h196M622 62h98" className="dca-d-line" />
      {boots.map((x) => (
        <g key={x}>
          <path d={`M${x - 22} 62v30h44V62`} className="dca-d-air-soft" />
          <path d={`M${x - 22} 62v30M${x + 22} 62v30`} className="dca-d-line" />
          <path d={`M${x - 36} 92h72v8h-72z`} className="dca-d-metal" />
          <path d={`M${x - 14} 110v14M${x} 108v20M${x + 14} 110v14`} className="dca-d-flow" />
        </g>
      ))}
      {[40, 200, 280, 440, 520, 680].map((x) => (
        <path key={x} d={`M${x - 7} 34l8 8-8 8`} className="dca-d-flow" />
      ))}
    </svg>
  );
}

/** Ground floor: a flue tile seen from above, half lined with creosote, half swept. */
export function FlueTile() {
  return (
    <svg {...svgProps} viewBox="0 0 300 300" className="dca-drawing">
      <defs>
        <Bond id="dca-bond-c" />
        <clipPath id="dca-tile-left">
          <path d="M0 0h150v300H0z" />
        </clipPath>
      </defs>
      <path d="M20 20h260v260H20z" className="dca-d-brick" />
      <path d="M20 20h260v260H20z" fill="url(#dca-bond-c)" />
      <rect x="62" y="62" width="176" height="176" rx="22" className="dca-d-air" />
      <g clipPath="url(#dca-tile-left)">
        <rect x="62" y="62" width="176" height="176" rx="22" className="dca-d-creosote" />
        <rect x="104" y="100" width="92" height="100" rx="30" className="dca-d-air" />
      </g>
      <rect x="62" y="62" width="176" height="176" rx="22" className="dca-d-line" fill="none" />
      <path d="M150 34v232" className="dca-d-dim" />
    </svg>
  );
}

/** Basement: a dryer and its vent line, running out through the house wall. */
export function DryerVent() {
  return (
    <svg {...svgProps} viewBox="0 0 300 260" className="dca-drawing">
      <path d="M0 232h300" className="dca-d-line" />
      <path d="M150 150H232V76H312" className="dca-d-hose" />
      <path d="M150 150H232V76H312" className="dca-d-hose-ribs" />
      <rect x="36" y="112" width="116" height="120" rx="8" className="dca-d-body" />
      <path d="M36 134h116" className="dca-d-line" />
      <circle cx="94" cy="186" r="32" className="dca-d-line" fill="none" />
      <circle cx="94" cy="186" r="22" className="dca-d-void" />
      <circle cx="132" cy="123" r="4" className="dca-d-metal" />
    </svg>
  );
}

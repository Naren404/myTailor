import { useState } from "react";

interface TooltipProps {
  measurementKey: string,
  tip: string,
}
const Tooltip = (props: TooltipProps) => {
  const {measurementKey, tip} = props

  const [showTooltip, setState] = useState(false)

  return ( 
    <a 
      role="link" 
      aria-label={measurementKey} 
      className="focus:outline-none focus:ring-gray-300 rounded-full focus:ring-offset-2 focus:ring-2 focus:bg-gray-200" 
      onMouseOver={() => setState(true)} 
      onFocus={() => setState(true)}  
      onMouseOut={() => setState(false)}
      >
        <div className="cursor-pointer">
            <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A0AEC0" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
                <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
        </div>

        {showTooltip && 
          <div 
            id={measurementKey} 
            role="tooltip" 
            className="absolute z-20 transition duration-150 ease-in-out shadow-lg bg-white p-4 rounded">
            <p className="text-xs leading-4 text-gray-600 pb-3 italic">{tip}</p>
        </div>
        }
    </a>
   );
}
 
export default Tooltip;
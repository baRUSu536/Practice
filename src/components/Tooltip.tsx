import { ReactNode } from "react";
import '../Tooltip.css';

type TooltipProps = {
    children: ReactNode;
    tooltipText: string;
}

const Tooltip = ({children, tooltipText}: TooltipProps) => {
    return(    
    <div className="tooltip-container w-[300px] md:w-[575px]">
        {children}
        <div className="tooltip">
          {tooltipText}
        </div>
    </div>
    );
};
export default Tooltip
interface TooltipProps {
    visibleText: string;
    tooltipText: string;
}

const Tooltip: React.FC<TooltipProps> = ({visibleText, tooltipText}) => {
    return(    
    <div className="relative group w-[300px] md:w-[575px]">
        <span className="text-gray-800 font-bold text-[14px] md:text-[20px]">{visibleText}</span>
        <div className="absolute transform -translate-x-1 bottom-1/2 mb-2 hidden group-hover:block p-2 text-white bg-blue-700/70 rounded text-[8px] md:text-[14px]">
          {tooltipText}
        </div>
    </div>)
}
export default Tooltip
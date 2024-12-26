import React from "react";
import Tooltip from "./Tooltip";

interface AttributeProps {
    name: string;
    value: string | number;
    tooltip: string;
};

interface ObjectCardProps {
    object: ObjectData;
}

const Attribute: React.FC<AttributeProps> = ({ name, value , tooltip}) => (
    <li className="flex justify-between">
        <Tooltip
            visibleText={name}
            tooltipText={tooltip}
        />
        <span className="text-blue-600 text-[14px] md:text-[20px]">{value}</span>
    </li>
)


const ObjectCard: React.FC<ObjectCardProps> = ({object}) => {
    return(
        <article className="w-[300px] md:w-[575px] rounded-xl bg-blue-100 shadow-lg shadow-blue-200 p-2">
            <div className="flex justify-between">
                <h2 className="text-[14px] md:text-[20px] pl-3 font-mono">{object.MAIN_ID}</h2>
                <h2 className="text-[14px] md:text-[20px] pr-3 text-gray-500 font-mono">{object.IUE_bibcode}</h2>
            </div>
            <ul className="pl-3 pr-3 font-mono">
                <Attribute
                    name="RA_d"
                    value={object.RA_d}
                    tooltip="Right ascension (RA) is the celestial equivalent of longitude."
                />
                <Attribute
                    name="DEC_d"
                    value={object.DEC_d}
                    tooltip="Declination (DEC) is the celestial sphere's equivalent of latitude and it is expressed in degrees, as is latitude."
                />
                <Attribute
                    name="Z_Value"
                    value={object.Z_VALUE}
                    tooltip="The value of a redshift"
                />
            </ul>
        </article>
    )
}
export default ObjectCard;
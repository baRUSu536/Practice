import Tooltip from "./Tooltip";

type AttributeProps = {
  name: string;
  value: string | number;
  tooltip: string;
};

type ObjectCardProps = {
  object: ObjectData;
};

const Attribute = ({ name, value, tooltip }: AttributeProps) => {
  return (
    <li className="flex justify-between">
      <Tooltip tooltipText={`${tooltip}`}>
        <span>{name}</span>
      </Tooltip>
      <span className="text-blue-600 text-[14px] md:text-[20px]">{value}</span>
    </li>
  );
};

const ObjectCard = ({ object }: ObjectCardProps) => {
  return (
    <article className="w-[300px] md:w-[575px] rounded-xl bg-blue-100 shadow-lg shadow-blue-200 py-2 px-5 border-none">
      <div className="flex justify-between text-[14px] md:text-[20px]">
        <h2>{object.MAIN_ID}</h2>
        <h2 className="text-gray-500">{object.IUE_bibcode}</h2>
      </div>
      <ul>
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
          tooltip="The value of a redshift."
        />
      </ul>
    </article>
  );
};

export default ObjectCard;

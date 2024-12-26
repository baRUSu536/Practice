import { useState } from "react";
import { useGetObjectsByQuery } from "../api/SimbadQuery";
import InputField from "./InputField";
import ObjectCard from "./ObjectCard";

const CardList = () => {
    const intialQuery = new URLSearchParams(window.location.search).get("query") || "";
    const [query, setQuery] = useState(intialQuery);

    const { data, isLoading, error } = useGetObjectsByQuery(query);

    return (
        <div className="flex flex-col items-center gap-4 md:gap-10">
            <InputField
                value={query}
                onChange={setQuery}
            />
            {isLoading && <p className="text-[14px] md:text-[20px]">Loading...</p>}
            {error instanceof Error && <p className="text-[14px] md:text-[20px]">Error: {error.message}</p>}
            {!isLoading && data && data.length === 0 && <p className="text-[14px] md:text-[20px]">No data found</p>}
            {data && data.length > 0 && (
                <div>
                    {data.map(card => (
                        <ObjectCard
                            object={card}
                        />
                    ))}
                </div>
            )}
        </div>
    )
};
export default CardList
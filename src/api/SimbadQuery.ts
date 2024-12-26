import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://d5d98rv4f1bq6dlolenq.i99u1wfk.apigw.yandexcloud.net";

const getObjectsByQuery = async (query: string, fields: (keyof ObjectData)[]): Promise<ObjectData[]> =>
    (
        await axios.get(`${BASE_URL}/search?query=${query}`, {
            params: {
                fields: fields.join(","),
            },
        })
    ).data;

export const useGetObjectsByQuery = (query: string) =>
    useQuery({
        queryKey: ["objects", query],
        queryFn: () => getObjectsByQuery(query, ["MAIN_ID", "IUE_bibcode", "RA_d", "DEC_d", "Z_VALUE"]),
        enabled: !!query,
    });
import { useState } from 'react';
import IPContext from '../Context/IPContext';
import isIp from '../helpers/isIp';
const DEFAULT_RESULT = {}
export default function IPProvider({/* defaultValue = "", defaultAmount = 0,*/ children } :React.PropsWithChildren<{}>) {
    const apiKey: string = import.meta.env.VITE_API_KEY || "";
    const [IP, setIP] = useState<string>("");
    const [searchResult, setSearchResult] = useState<IpfyResponse | {}>(DEFAULT_RESULT);
    /**
     * Performs fetch to https://geo.ipify.org
     */
    function searchIP() {
        console.log("search ip");
        const param = getParam();
        console.log(param);
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${param}`)
            .then(res => {
                if (res.status == 200) {
                   return res.json();
                } else throw new Error()
            })
            .then(json => {
                console.log(json);
                setSearchResult(json);
            })
            .catch(er => {
                alert(er); 
                // TODO it would be nice to alert the user if there was an error
                setSearchResult(DEFAULT_RESULT);
            })
    }
    /**
     * Checks whether or not the search text is a valid IP Address
     * @returns {string} [ipAddress] if the search text is a valid IP Address. Otherwise [domain]
     */

    function getParam(): string {
        let param = "";
        if (IP == "") {
            throw new Error("IP is empty");
        }
        param = isIp(IP) ? "ipAddress" : "domain";
        return `${param}=${IP}`
    }

    return <IPContext.Provider value={{ IP, searchResult, setIP, searchIP }}>
        {children}
    </IPContext.Provider>
}

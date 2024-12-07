declare type IpfyResponse = {
    "ip": string,
    "location": IpfyLocation,
    "domains": string[],
    "as": IpfyAs,
    "isp": string
}

declare type IpfyLocation = {
    "country": string,
    "region": string,
    "timezone": string,
    "lat"?: string,
    "lng"?: string,
    "postalCode"?: string
}
declare type IpfyAs = {
    "asn": number,
    "name": string,
    "route": string,
    "domain": string,
    "type": string
}
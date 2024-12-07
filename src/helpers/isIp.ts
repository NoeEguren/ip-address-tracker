/**
 * 
 * @param ip 
 * @returns {boolean} true if the given IP is a valid IPv4
 */
export default function isIp(ip : string) : boolean{
    const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
    const regex = new RegExp(v4);
    const result = regex.test(ip);
    return result;
} 
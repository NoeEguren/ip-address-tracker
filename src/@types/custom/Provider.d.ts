declare type IPContextType = {
    IP: string,
    searchResult: IpfyResponse,
    setIP: Dispatch<SetStateAction<string>>,
    searchIP: ()=>void
  }
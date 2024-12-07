import { useContext } from 'react';
import IPContext from '../../Context/IPContext';
import './Result.css';

function Result() {
    const { searchResult } = useContext(IPContext);
    return (
        <div className="result-container">
            <div className="result-info">
                <h5 className="result-title">
                    IP Address
                </h5>
                <p className="result-value">
                    {searchResult.ip || "-"}
                </p>
            </div>
            <div className="result-info">
                <h5 className="result-title">
                    Location
                </h5>
                <p className="result-value">

                    {searchResult.location
                        ? `${searchResult.location.region}, ${searchResult.location.country}`
                        : "-"
                    }
                    <br />
                    {searchResult?.location?.postalCode}
                </p>
            </div>
            <div className="result-info">
                <h5 className="result-title">
                    Timezone
                </h5>
                <p className="result-value">
                    {searchResult?.location?.timezone
                        ? `UTC ${searchResult.location.timezone}`
                        : "-"}
                </p>
            </div>
            <div className="result-info">
                <h5 className="result-title">
                    ISP
                </h5>
                <p className="result-value">
                    {searchResult?.isp || "-"
                    }
                </p>
            </div>
        </div>
    )
}

export default Result

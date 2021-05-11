import React, { useEffect, useState } from "react";
import {
  GetCountryStateData,
  GetDeathsGlobalData,
  GetRecoveredGlobalData,
} from "../data";
import CountryLookupTable from "../assets/countriesLookupTable";

function CountryDetails(props) {
  const [totalCases, setTotalCases] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalRecoveries, setTotalRecoveries] = useState(0);

  useEffect(() => {
    GetCountryStateData().then((res) => {
      let actives = res.filter((elem) => {
        return elem.countryName === CountryLookupTable[props.CountryName];
      });

      let totalCases = 0;
      actives.forEach((active) => {
        totalCases += active.totalCase;
      });

      setTotalCases(totalCases);
    });

    GetRecoveredGlobalData().then((res) => {
      let actives = res.filter((elem) => {
        return elem.countryName === CountryLookupTable[props.CountryName];
      });

      let totalRecovered = 0;
      actives.forEach((active) => {
        totalRecovered += active.totalCase;
      });

      setTotalRecoveries(totalRecovered);
    });

    GetDeathsGlobalData().then((res) => {
      let actives = res.filter((elem) => {
        return elem.countryName === CountryLookupTable[props.CountryName];
      });
      let totalDeaths = 0;
      actives.forEach((active) => {
        totalDeaths += active.totalCase;
      });

      setTotalDeaths(totalDeaths);
    });
  }, [props.CountryName]);

  return (
    <div className="h-100 countryDetails">
      <div className="text-center">{props.CountryName}</div>
      <div className="table-responsive">
        <table className="table">
          <tbody className="w-100">
            <tr>
              <td>
                <div>Total Cases</div>
                <div className="badge badge-primary">{totalCases}</div>
              </td>
              <td>
                <div>Recovered</div>
                <div className="badge badge-primary">{totalRecoveries}</div>
              </td>
              <td>
                <div>Deaths</div>
                <div className="badge badge-primary">{totalDeaths}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;

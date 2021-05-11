import React, { useState, useEffect } from "react";
import axios from "axios";
// get exported javascript functions
import { getTotalRepoCount } from "../githubData";
import { useCookies } from "react-cookie";

// 5 miniutes
const cookieExpire = 300;

function Github() {
  const [cookies, setCookie, removeCookie] = useCookies([
    "totalRepoCount",
    "monthlyRepoCount",
  ]);

  const [totalRepo, setTotalRepo] = useState(0);
  useEffect(() => {
    if (cookies.totalRepoCount) {
      // use cookie to prevent api request frequently
      setTotalRepo(cookies.totalRepoCount);
    } else {
      // api requests
      getTotalRepoCount().then((response) => {
        setTotalRepo(response);

        // store it in cookie
        // set cookie with expire seconds - maxAge
        setCookie("totalRepoCount", JSON.stringify(response), {
          path: "/",
          maxAge: cookieExpire,
        });
      });
    }
  }, [cookies.totalRepoCount, setCookie, removeCookie]);

  return (
    <table className="table table-borderless">
      <tbody>
        <tr>
          <td>
            <i>Total number of COVID related repositories on Github</i>
          </td>
          <td>
            <i>{totalRepo}</i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Github;

import React, { useState, useEffect } from "react";
import axios from "axios";
// get exported javascript functions
import { getTotalRepoCount, getRepoCounts } from "../githubData";
import { useCookies } from "react-cookie";

// 5 miniutes
const cookieExpire = 300;

const initialValueCountByMonth = [
  { id: 0, value: 0 },
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];
const months = ["January", "February", "March", "April"];

function Github() {
  const [cookies, setCookie, removeCookie] = useCookies([
    "totalRepoCount",
    "monthlyRepoCount",
  ]);

  const [totalRepo, setTotalRepo] = useState(0);
  const [countByMonths, setCountByMonths] = useState(initialValueCountByMonth);
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

    if (cookies.monthlyRepoCount) {
      if (!cookies.monthlyRepoCount.monthlyData) {
        //something is wrong with the cookie. Delete it
        removeCookie("monthlyRepoCount");
      } else {
        setCountByMonths(cookies.monthlyRepoCount.monthlyData);
      }
    } else {
      getRepoCounts()
        .then(
          axios.spread((...res) => {
            var [...temp] = [...res];
            const fetchedCountByMonth = temp.map((val, index) => {
              return { id: index, value: val.data.total_count };
            });
            setCountByMonths(fetchedCountByMonth);

            // store it in cookie
            let cookieObject = {
              monthlyData: fetchedCountByMonth,
            };
            // set cookie with expire seconds - maxAge
            setCookie("monthlyRepoCount", JSON.stringify(cookieObject), {
              path: "/",
              maxAge: cookieExpire,
            });
          })
        )
        .catch((err) => {
          console.log("error on getRepoCounts(): " + err);
        });
    }
  }, [
    cookies.totalRepoCount,
    cookies.monthlyRepoCount,
    setCookie,
    removeCookie,
  ]);

  return (
    <table className="table table-secondary table-hover">
      <tbody>
        <tr>
          <td>Total number of COVID related repositories on Github</td>
          <td>{totalRepo}</td>
        </tr>
        {countByMonths &&
          countByMonths.map((countByMonth, index) => (
            <tr key={index}>
              <td>Repo Counts on {months[index]}</td>
              <td>{countByMonth.value}</td>
              {/* <div key={countByMonth.id}> */}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Github;

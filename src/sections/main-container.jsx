import React, { useState, useEffect } from "react";

import { getAllPrices } from "../store/actions/app.action";
import { useAppDispatch, useAppSelector } from "../hook/useReduxState";

const cryptoCurrenccy = [
  {
    value: "BTC",
  },
  {
    value: "ETH",
  },
  {
    value: "USDT",
  },
  {
    value: "XRP",
  },
  {
    value: "BNB",
  },
  {
    value: "USDC",
  },
  {
    value: "ADA",
  },
  {
    value: "SOL",
  },
  {
    value: "DOGE",
  },
  {
    value: "TRX",
  },
];
export const MainContainer = () => {
  const [data, loading] = useAppSelector((state) => [
    state.app.data,
    state.app.loading,
  ]);

  const [currency, setCurrency] = useState("BTC");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!currency) return;
    dispatch(getAllPrices(currency));
  }, [currency, dispatch]);

  return (
    <>
      <div className="mainContainer">
        <div className="cryptoContainer">
          <h3>Select Currency</h3>
          <select
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          >
            {cryptoCurrenccy.map((crypto) => (
              <option value={crypto.value} key={crypto.value}>
                {crypto.value}
              </option>
            ))}
          </select>
        </div>
        {loading ? (
          <div>
            <p className="loading">Getting Price list for {currency}</p>
          </div>
        ) : (
          <div className="priceList">
            <h3>Price Lists</h3>
            <div className="currency">
              <h5>NGN</h5>
              <p>
                {parseFloat(data?.rates?.NGN).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="currency">
              <h5>KES</h5>
              <p>
                {parseFloat(data?.rates?.KES).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="currency">
              <h5>GHS</h5>
              <p>
                {parseFloat(data?.rates?.GHS).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="currency">
              <h5>EUR</h5>
              <p>
                {parseFloat(data?.rates?.EUR).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="currency">
              <h5>USD</h5>
              <p>
                {parseFloat(data?.rates?.USD).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

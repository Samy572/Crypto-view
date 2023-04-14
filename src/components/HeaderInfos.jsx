import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PercentChange from './PercentChange';
import TableFilters from './TableFilters';

const HeaderInfos = () => {
	const [headerData, setHeaderData] = useState([]);
	useEffect(() => {
		axios.get('https://api.coingecko.com/api/v3/global').then((res) => setHeaderData(res.data.data));
	}, []);
	console.log(headerData);
	return (
		<div className="header-container">
			<ul className="title">
				<li>
					<h1>
						<img src="./vite.svg" alt="logo" />
						Crypto view
					</h1>
				</li>
				<li>
					Crypto-monnaies:
					{headerData.active_cryptocurrencie && headerData.active_cryptocurrencies.toLocaleString()}
				</li>
				<li>Marchés : {headerData.markets && headerData.markets}</li>
			</ul>
			<ul className="infos-mkt">
				<li className="global-mkt">
					Global Market Cap :
					<PercentChange percent={headerData.market_cap_change_percentage_24h_usd} />
				</li>
				<li>
					BTC dominance {headerData.market_cap_percentage && headerData.market_cap_percentage.btc.toFixed(1) + '%'}
				</li>
				<li>
					XRP dominance {headerData.market_cap_percentage && headerData.market_cap_percentage.xrp.toFixed(1) + '%'}
				</li>
			</ul>
			<TableFilters />
		</div>
	);
};

export default HeaderInfos;
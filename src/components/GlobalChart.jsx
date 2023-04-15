import React, { useEffect, useState } from 'react';
import { Treemap, Tooltip } from 'recharts';

const GlobalChart = ({ coinsData }) => {
	const [dataArray, setDataArray] = useState([]);

	const colorPicker = (number) => {
		if (number >= 20) {
			return '#00b7b3';
		} else if (number >= 5) {
			return '#69D453';
		} else if (number >= 0) {
			return '#6AC657';
		} else if (number >= -5) {
			return '#F35550';
		} else if (number >= -15) {
			return '#E21913';
		} else {
			return '#444040';
		}
	};

	useEffect(() => {
		let chartData = [];

		if (coinsData.length > 0) {
			for (let i = 0; i < 45; i++) {
				chartData.push({
					name:
						coinsData[i].symbol.toUpperCase() + ' ' + coinsData[i].market_cap_change_percentage_24h.toFixed(1) + '%',
					size: coinsData[i].market_cap,
					fill: colorPicker(coinsData[i].market_cap_change_percentage_24h),
				});
			}
		}
		setDataArray(chartData);
	}, [coinsData]);

	const TreemapToolTip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p className="label">{payload[0].payload.name}</p>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="global-chart">
			<Treemap width={730} height={181} data={dataArray} dataKey="size" stroke="white" fill="black" aspectRatio="1">
				<Tooltip content={TreemapToolTip} />
			</Treemap>
		</div>
	);
};

export default GlobalChart;

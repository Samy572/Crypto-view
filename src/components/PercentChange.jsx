import React, { useEffect, useState } from 'react';

const PercentChange = ({ percent }) => {
	const [color, setColor] = useState();

	useEffect(() => {
		if (percent) {
			if (percent >= 0) {
				setColor('green');
			} else {
				setColor('red');
			}
		} else {
			setColor('white');
		}    
	}, [percent]);

	return (
		<p className="percent-change-container" style={{ color }}>
			{percent ? percent.toFixed(1) + '%' : '-'}
		</p>
	);
};

export default PercentChange;

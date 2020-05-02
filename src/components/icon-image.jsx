import React from 'react';

const IconImage = (props) => {
	return (
		<React.Fragment>
			<img
				src={props.src}
				width={props.width} 
				height={props.height} 
				alt={props.alt} 
			/>
		</React.Fragment>
	);
};

export default IconImage;

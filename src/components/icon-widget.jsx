import React from 'react';
import IconImage from '../components/icon-image';
import * as cfg from '../components/config';
import * as util from '../components/util';

const IconWidget = (props) => {
	const name = props.icon;
	const path = cfg.ICON_DIR + name + '.svg';
	const size = cfg.ICON_SIZE.toString();

	return (
		<React.Fragment>
			<div 
				className='icon-widget' 
				onClick={() => util.copyTextToClipboard(name)}
			>
				<div className='icon-widget-img'>
					<IconImage
						src={path}
						width={size} 
						height={size} 
						alt={name} 
					/>
				</div>
				<div className='icon-widget-foot'>
					{name}
				</div>
			</div>
		</React.Fragment>
	);
};

export default IconWidget;

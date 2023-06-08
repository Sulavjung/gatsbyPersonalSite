import React from 'react';

const QuoteBlock = (props) => {
	const classname = `${props.type} text-bold p-0 pb-2 m-0`
	return (
		<div className='quote-div'>
			<p className={classname}>{props.title}</p>
			<p>{props.message}</p>
		</div>
	);
}

export default QuoteBlock;

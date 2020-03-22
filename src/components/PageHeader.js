import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title, subheading, image }) => {
	return (
		<div
			className='full-width-image margin-top-0'
			style={{
				backgroundImage: `url(${
					!!image.childImageSharp ? image.childImageSharp.fluid.src : image
				})`,
				backgroundPosition: `top left`,
				backgroundAttachment: `fixed`
			}}
		>
			<div
				className='index-title-wrap'
				style={{
					display: 'flex',
					height: '150px',
					lineHeight: '1',
					justifyContent: 'space-around',
					alignItems: 'left',
					flexDirection: 'column'
				}}
			>
				<h1 className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'>
					{title}
				</h1>
				<h2 className='has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen'>
					{subheading}
				</h2>
			</div>
		</div>
	);
};

PageHeader.propTypes = {
	title: PropTypes.string,
	subheading: PropTypes.string,
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
export default PageHeader;

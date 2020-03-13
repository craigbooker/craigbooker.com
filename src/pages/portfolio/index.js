import React from 'react';
import Layout from '../../components/Layout';
import Portfolio from '../../components/Portfolio';

export default class PortfolioIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<div
					className='full-width-image-container margin-top-0'
					style={{
						backgroundImage: `url('/img/blog-index.jpg')`
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
							Projects
						</h1>
					</div>
				</div>
				<section className='section'>
					<div className='container'>
						<div className='content'>
							<Portfolio />
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}

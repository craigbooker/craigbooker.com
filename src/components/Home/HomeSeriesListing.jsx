import React, { Component } from 'react';
import { Link } from 'gatsby';
import BlogCard from '../Blog/BlogCard';
import styles from '../../css/blog.module.css';

class HomeSeriesListing extends React.Component {
	render() {
		const { seriesEdges } = this.props;
		return (
			<div className={styles.center}>
				{seriesEdges.map(({ node }, index) => {
					return <BlogCard key={index} blog={node} />;
				})}
			</div>
		);
	}
}

export default HomeSeriesListing;

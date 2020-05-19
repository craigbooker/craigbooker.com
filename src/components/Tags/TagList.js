import React, { Component } from 'react';
import styles from '../../css/items.module.css';

import Title from '../Title';
import { useStaticQuery } from 'gatsby';

const getTags = graphql`
	query {
		allMarkdownRemark(limit: 1000) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`;

const TagList = () => {
	const { tags } = useStaticQuery(getTags);

	return (
		<section className={styles.tags}>
			<Title title='My' subtitle='Tags' />
			<div className={styles.center}>{tags.edges.map({})}</div>
		</section>
	);
};

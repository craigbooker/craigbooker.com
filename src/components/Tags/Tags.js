import React from 'react';
import TagList from './TagList';
import { useStaticQuery, graphql } from 'gatsby';

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

const Tags = () => {
	const { tags } = useStaticQuery(getTags);

	return <div></div>;
};

export default Tags;

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/blog.module.css';
import Title from '../Title';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const getArticles = graphql`
	query {
		featuredArticles: allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
			limit: 3
		) {
			edges {
				node {
					excerpt(pruneLength: 200)
					id
					fields {
						slug
						readingTime {
							text
							words
						}
					}
					frontmatter {
						title
						templateKey
						date(formatString: "MMMM DD, YYYY")
						featuredpost
						featuredimage {
							childImageSharp {
								fluid(maxWidth: 2048, quality: 75) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;

const FeaturedArticles = () => {
	const response = useStaticQuery(getArticles);
	const articles = response.featuredArticles.edges;
};

export default FeaturedArticles;

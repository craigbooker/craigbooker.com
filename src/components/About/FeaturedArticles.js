import React from 'react';
import Tour from '../Tours/Tour';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Title';
import styles from '../../css/items.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const getArticles = graphql`
	query FeaturedPostsQuery {
		allMarkdownRemark(
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

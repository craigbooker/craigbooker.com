const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const blogPostTemplate = path.resolve('./src/templates/blog-list.js');
	const tagTemplate = path.resolve('src/templates/tags.js');

	const result = await graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							tags
							templateKey
						}
					}
				}
			}
			tagsGroup: allMarkdownRemark(limit: 2000) {
				group(field: frontmatter___tags) {
					fieldValue
				}
			}
		}
	`);
	if (result.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return;
	}
	// Create blog-list pages
	const posts = result.data.allMarkdownRemark.edges;
	// Set how many pages to show per page
	const postsPerPage = 4;
	// Calculate the number of pages
	const numPages = Math.ceil(posts.length / postsPerPage);
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/blog` : `/blog/${i + 1}`,
			//tags: edge.node.frontmatter.tags,
			component: blogPostTemplate,
			// additional data can be passed via context
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		});
	});
	// Tag pages:
	//let tags = [];
	// Extract tag data from query
	const tags = result.data.tagsGroup.group;
	// Make through tag pages
	tags.forEach((tag) => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
			component: tagTemplate,
			context: {
				tag: tag.fieldValue,
			},
		});
	});
};
exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	fmImagesToRelative(node); // convert image paths for gatsby images

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};

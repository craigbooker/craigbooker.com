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

	const postsPerPage = 4;
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

		// Tag pages:
		//let tags = [];
		// Extract tag data from query
		const tags = result.data.tagsGroup.group;

		// Eliminate duplicate tags
		//tags = _.uniq(tags);

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

		// Iterate through each post, putting all found tags into `tags`
		/* posts.forEach((edge) => {
			if (_.get(edge, `node.frontmatter.tags`)) {
				tags = tags.concat(edge.node.frontmatter.tags);
			}
		}) */
		// Eliminate duplicate tags
		//tags = _.uniq(tags);

		// Make tag pages
		/* 		tags.forEach((tag) => {
			const tagPath = `/tags/${_.kebabCase(tag)}/`;

			createPage({
				path: tagPath,
				component: path.resolve(`src/templates/tags.js`),
				context: {
					tag,
				},
			});
		}); */
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

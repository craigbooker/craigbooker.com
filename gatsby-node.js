const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	const blogPost = path.resolve('./src/templates/blog-post.js');
	const result = await graphql(
		`
			{
				allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 1000
				) {
					edges {
						node {
							fields {
								slug
							}
							frontmatter {
								title
								tags
								templateKey
							}
						}
					}
				}
			}
		`
	);
	if (result.errors) {
		throw result.errors;
	}

	// Crate blog posts pages
	const posts = result.data.allMarkdownRemark.edges;

	posts.forEach((post, index) => {
		const previous = index === posts.length - 1 ? null : posts[index + 1].node;
		const next = index === 0 ? null : posts[index - 1].node;

		createPage({
			path: edge.node.fields.slug,
			tags: edge.node.frontmatter.tags,
			component: blogPost,
			context: {
				slug: post.node.fields.slug,
				previous,
				next,
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

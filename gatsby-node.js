const siteConfig = require('./data/SiteConfig');
const _ = require('lodash');
const path = require('path');
const moment = require('moment');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	fmImagesToRelative(node); // convert image paths for gatsby images

	//let slug; // Create Smart Slugs

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			node,
			name: 'slug',
			value: value,
		});

		if (_.get(node.frontmatter, 'date')) {
			const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
			if (!date.isValid)
				console.warn(`WARNING: Invalid date.`, node.frontmatter);

			createNodeField({
				node,
				name: 'date',
				value: date.toISOString(),
			});
		}
	}
};

const query = `
	{
		blog: allMarkdownRemark(limit: 1000) {
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
	}
`;

const blogPost = path.resolve(`./src/templates/blog-post.js`);

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	const response = await graphql(query);

	if (response.errors) {
		console.error(query.errors);
		throw new Error(query.errors);
	}

	const postsEdges = response.data.blog.edges;
	const { blog } = response.data;

	//const posts = result.data.allMarkdownRemark.edges;
	// Number of posts per page
	const { postsPerPage } = siteConfig;
	// Number of pages
	//const numPages = Math.ceil(posts.length / postsPerPage);
	const numPages = Math.ceil(blog.edges.length / postsPerPage);

	blog.edges.forEach(({ node }, index, arr) => {
		const slug = node.frontmatter.slug;
		const next = index === 0 ? `` : arr[index - 1].node;
		const prev = index === arr.length - 1 ? `` : arr[index + 1].node;
		const id = node.id;

		createPage({
			path: node.fields.slug,
			tags: node.frontmatter.tags,
			component: path.resolve(
				`src/templates/${String(node.frontmatter.templateKey)}.js`
			),
			// additional data can be passed via context
			context: {
				id,
			},
		});
	});

	// Tag pages:
	const tageSet = new Set();

	blog.edges.forEach((edge) => {
		if (edge.node.frontmatter.tags) {
			edge.node.frontmatter.tags.forEach((tag) => {
				tageSet.add(tag);
			});
		}

		tageSet.forEach((tag) => {
			const tagPath = `/tags/${_.kebabCase(tag)}/`;

			createPage({
				path: tagPath,
				component: path.resolve(`src/templates/tags.js`),
				context: {
					tag,
				},
			});
		});
		// Insert project.edges.forEach loop here.
	});
};

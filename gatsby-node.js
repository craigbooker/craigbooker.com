const path = require('path');
const _ = require('lodash');
const siteConfig = require("./data/siteConfig");

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;
	const mdxQueryResult = await graphql(`
		{
			allMdx {
				edges {
					node {
						frontmatter {
							slug
						}
						fields {
							slug
							contentType
						}
					}
				}
			}
		}
	`)

	if (mdxQueryResult.errors) {
		console.error(mdxQueryResult.errors);
		throw mdxQueryResult.errors;
	}

	// Grab the mdx files
	const posts = mdxQueryResult.data.allMdx.edges;
	const tagSet = new Set();
	const categorySet = new Set();

	posts.forEach(({ node }) => {
		if (node.frontmatter.tags) {
			node.frontmatter.tags.forEach(tag => {
				tagSet.add(tag);
			});
		}

		const { slug } = node.frontmatter
		createPage({
			path: `blog/${slug}`,
			component: require.resolve("./src/templates/post-template.js"),
			context: {
				slug: slug,
			},
		})
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	let slug // Create Smart Slugs
	if (node.internal.type === "Mdx") {
		const fileNode = getNode(node.parent)
		const parsedFilePath = path.parse(fileNode.relativePath)

		if (
			(_.get(node, 'frontmatter')) &&
			(_.get(node, 'frontmatter.title'))
		) {
			slug = `/${_.kebabCase(node.frontmatter.title)}`
		} else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
			slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
		} else if (parsedFilePath.dir === '') { // If no dir, then use the title only.
			slug = `/${parsedFilePath.name}/`
		} else {
			slug = `/${parsedFilePath.dir}/`
		}

		// Adds the slug value to each node retrived
		createNodeField({
			node,
			name: 'slug',
			value: slug
		})

		// Add content type based on directory within content dir.
		createNodeField({
			node,
			name: 'contentType',
			value: parsedFilePath.dir
		})
	}
}
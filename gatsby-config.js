const config = require('./src/data/config');

module.exports = {
	siteMetadata: {
		title: 'Craig Booker | The Official site of Craig Booker.',
		author: config.author,
		description: config.defaultDescription,
		twitterUsername: '@craigbooker',
		image: '/og-image.jpg',
		siteUrl: config.url,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/images`,
				name: 'uploads',
			},
		},

		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/images`,
				name: 'images',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/content/posts/`,
			},
		},
		`gatsby-remark-images`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
					},
				],
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					`gatsby-remark-reading-time`,
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
				],
			},
		},
		'gatsby-plugin-robots-txt',
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: 'UA-127519592-2',
				host: 'https://www.craigbooker.com',
				sitemap: 'https://www.craigbooker.com/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-plugin-playground`,
		'gatsby-plugin-sass',
		`gatsby-plugin-styled-components`,
		'gatsby-plugin-transition-link',
		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
			},
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
};

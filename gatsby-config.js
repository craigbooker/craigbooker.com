const config = require('./data/siteConfig');

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
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/images/`,
				name: 'images',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/content/`,
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
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: "https://www.craigbooker.com",
				sitemap: "https://www.craigbooker.com/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
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
	],
};

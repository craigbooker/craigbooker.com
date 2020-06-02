const config = {
	siteTitle: 'Craig Booker | The Official site of Craig Booker.', // Site title.
	siteTitleShort: 'craigbooker.com', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: 'Official Site of Craig Booker', // Alternative site title for SEO.
	siteLogo: 'https://craigbooker.com/img/favicon.png', // Logo used for SEO and manifest.
	logo: 'https://craigbooker.com/img/favicon.png',
	siteUrl: 'https://craigbooker.com', // Domain of your website without pathPrefix.
	url: 'https://craigbooker.com',
	//pathPrefix: '/gatsby-advanced-starter', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription: 'My name is Craig Booker. I am a writer.', // Website description used for RSS feeds/meta description tag.
	defaultDescription: 'My name is Craig Booker. I am a writer.',
	siteRss: '/rss.xml', // Path to the RSS file.
	siteFBAppID: '568731150501550', // FB Application ID for using app insights
	googleAnalyticsID: 'UA-127519592-2', // GA tracking ID.
	disqusShortname: 'https://craigbooker.disqus.com/', // Disqus shortname.
	postDefaultCategoryID: 'Tech', // Default category for posts.
	dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
	dateFormat: 'DD/MM/YYYY', // Date format for display.
	author: 'Craig Booker',
	userName: 'Craig Booker', // Username to display in the author segment.
	userEmail: 'arcadiaswx@gmail.com', // Email used for RSS feed's author segment
	userTwitter: '@craigbooker', // Optionally renders "Follow Me" in the UserInfo segment.
	userLocation: 'Oklahoma City, OK', // User location to display in the author segment.
	userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
	userDescription:
		"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
	// Links to social profiles/projects you want to display in the author segment/navigation bar.
	userLinks: [
		{
			label: 'GitHub',
			url: 'https://github.com/craigbooker',
			iconClassName: 'fa fa-github',
		},
		{
			label: 'Twitter',
			url: 'https://twitter.com/craigbooker',
			iconClassName: 'fa fa-twitter',
		},
		{
			label: 'Email',
			url: 'mailto:arcadiaswx@gmail.com',
			iconClassName: 'fa fa-envelope',
		},
	],
	socialLinks: {
		twitter: 'https://twitter.com/craigbooker',
		facebook: 'https://facebook.com/craigbooker',
		instagram: 'https://instagram.com/craigbooker',
		vimeo: 'https://vimeo.com/craigbooker',
	},
	copyright: 'Copyright © 2020. Craig Booker', // Copyright string for the footer of the website and RSS feed.
	themeColor: '#c62828', // Used for setting manifest and progress theme colors.
	backgroundColor: '#e0e0e0', // Used for setting manifest background color.
	postsPerPage: 5,
};

module.exports = config;

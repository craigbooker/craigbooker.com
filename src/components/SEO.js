import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';

const getData = graphql`
	query {
		site {
			siteMetadata {
				siteTitle: title
				siteDesc: description
				author: author
				siteUrl
				image
				twitterUsername
			}
		}
	}
`;

const SEO = ({ title, description }) => {
	const { site } = useStaticQuery(getData);

	const {
		siteDesc,
		siteTitle,
		siteUrl,
		image,
		twitterUsername,
	} = site.siteMetadata;

	return (
		<Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
			<meta name='description' content={description || siteDesc} />
			<meta name='image' content={image} />
			{/* facebook card */}
			<meta property='og:url' content={siteUrl} />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={siteTitle} />
			<meta property='og:description' content={siteDesc} />
			<meta property='og:image' content={`${siteUrl}${image}`} />
			<meta property='og:image:width' content='400' />
			<meta property='og:image:height' content='300' />

			{/* twitter card */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:creator' content={twitterUsername} />
			<meta name='twitter:title' content={siteTitle} />
			<meta name='twitter:description' content={siteDesc} />
			<meta name='twitter:image' content={`${siteUrl}${image}`} />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href={`${withPrefix('/')}img/apple-touch-icon.png`}
			/>
			<link
				rel='icon'
				type='image/png'
				href={`${withPrefix('/')}img/favicon-32x32.png`}
				sizes='32x32'
			/>
			<link
				rel='icon'
				type='image/png'
				href={`${withPrefix('/')}img/favicon-16x16.png`}
				sizes='16x16'
			/>

			<link
				rel='mask-icon'
				href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
				//color="#ff4400"
				color='#00BABB'
			/>
		</Helmet>
	);
};

export default SEO;

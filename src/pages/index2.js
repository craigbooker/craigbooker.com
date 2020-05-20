import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import PageHeader from '../components/PageHeader';
import FeaturedPosts from '../components/FeaturedPosts';

import SEO from '../components/SEO';

export default ({ data }) => (
	<Layout>
		<SEO title='Home' description='this is description' />
		<StyledHero home='true'>
			<Banner
				title='continue exploring'
				info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rem.'
			></Banner>
		</StyledHero>

		<FeaturedPosts />
	</Layout>
);

export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import AboutHeader from '../components/About/AboutHeader';

const AboutPage = ({ data }) => {
	return (
		<Layout title='About'>
			<StyledHero>
				<Banner title='about' info='' />
			</StyledHero>

			<AboutHeader />
		</Layout>
	);
};

export default AboutPage;

export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "images/defaultBcg.jpg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

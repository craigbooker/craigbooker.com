import React, { Component } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import FeaturedPosts from '../components/FeaturedPosts';
import FeaturedPortfolio from '../components/FeaturedPortfolio';
import { graphql } from 'gatsby';

export default class about extends Component {
	render() {
		return (
			<Layout>
				<StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid}>
					<Banner
						title='Start Here'
						info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rem.'
					></Banner>
				</StyledHero>
				<div className='column is-12'>
					<h3 className='has-text-weight-semibold is-size-2'>
						Recent Articles
					</h3>
					<FeaturedPosts />
					<div className='column is-12 has-text-centered'>
						<AniLink fade to='/blog' className='btn'>
							Read more
						</AniLink>
					</div>
				</div>
			</Layout>
		);
	}
}

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

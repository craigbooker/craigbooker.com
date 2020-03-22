import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FeaturedPosts from '../components/FeaturedPosts';
import FeaturedPortfolio from '../components/FeaturedPortfolio';

export const IndexPageTemplate = ({
	image,
	title,
	heading,
	subheading,
	description
}) => (
	<div>
		<PageHeader title={title} subheading={subheading} image={image} />
		<section className='section section--gradient'>
			<div className='container'>
				<div className='section'>
					<div className='columns'>
						<div className='column is-10 is-offset-1'>
							<div className='content'>
								<div className='columns'>
									<div className='column is-12'>
										<h3 className='has-text-weight-semibold is-size-2'>
											{heading}
										</h3>
										<p>{description}</p>
									</div>
								</div>

								<div className='column is-12'>
									<h3 className='has-text-weight-semibold is-size-2'>
										Recent Articles
									</h3>
									<FeaturedPosts />
									<div className='column is-12 has-text-centered'>
										<Link className='btn' to='/blog'>
											Read more
										</Link>
									</div>
								</div>
								<div className='column is-12'>
									<h3 className='has-text-weight-semibold is-size-2'>
										Recent Projects
									</h3>
									<FeaturedPortfolio />
									<div className='column is-12 has-text-centered'>
										<Link className='btn' to='/portfolio'>
											See more projects
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
			}
		}
	}
`;

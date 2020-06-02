import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Content, { HTMLContent } from '../components/Content';
import FeaturedPortfolio from '../components/FeaturedPortfolio';

export const AboutPageTemplate = ({
	content,
	contentComponent,
	image,
	title,
	heading,
	subheading,
	description,
}) => {
	const PostContent = contentComponent || Content;

	return (
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
											Recent Projects
										</h3>
										<FeaturedPortfolio />
										<div className='column is-12 has-text-centered'>
											<Link className='btn' to='/portfolio'>
												See more projects
											</Link>
										</div>
									</div>
									<div className='column is-12'>
										<br />
										<br />
										<h3 className='has-text-weight-semibold is-size-2'>Apps</h3>
										<PostContent content={content} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

AboutPageTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	description: PropTypes.string,
};

const AboutPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;
	const { markdownRemark: aboutPost } = data;
	return (
		<Layout>
			<AboutPageTemplate
				content={aboutPost.html}
				contentComponent={HTMLContent}
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				description={frontmatter.description}
			/>
		</Layout>
	);
};

AboutPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
			html
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
				description
			}
		}
	}
`;

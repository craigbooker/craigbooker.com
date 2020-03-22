import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import Features from '../components/Features';
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const AboutPageTemplate = ({
	image,
	title,
	heading,
	subheading,
	description
}) => (
	<div className='content'>
		<PageHeader title={title} subheading={subheading} image={image} />

		<section className='section section--gradient'>
			<div className='container'>
				<div className='section'>
					<div className='columns'>
						<div className='column is-7 is-offset-1'>
							<h3 className='has-text-weight-semibold is-size-2'>{heading}</h3>
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

AboutPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	description: PropTypes.string
};

const AboutPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<AboutPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				description={frontmatter.description}
			/>
		</Layout>
	);
};

AboutPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
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

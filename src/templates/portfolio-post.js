import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import PortfolioPageHeader from '../components/PortfolioPageHeader';

import Content, { HTMLContent } from '../components/Content';
import craigAvatar from '../../static/img/craig-booker.jpg';
import tagsSVG from '../img/fa-tags.svg';

export const PortfolioPostTemplate = ({
	content,
	contentComponent,
	description,
	image,
	readingtime,
	wordcount,
	slug,
	date,
	tags,
	title,
	frontmatter,
	helmet
}) => {
	const PortfolioContent = contentComponent || Content;

	return (
		<div className='portfolio-post'>
			{helmet || ''}
			<PortfolioPageHeader title={title} date={date} image={image} />
			<div className='container content article'>
				<div className='columns'>
					<div className='column is-10 is-offset-1'>
						<article className='article-body column is-8 is-child'>
							<PortfolioContent content={content} />
						</article>
						<aside className='column is-child'>
							<div className='aside-wrap'>
								<div className='author-card--sidebar box'>
									<div className='author-card-image'>
										<img src={craigAvatar} alt='Craig Booker' />
									</div>
									<div className='author-card-desc'>
										<strong>About the Author</strong>
										<p>
											<a href='https://zerotodev.net/about/' rel='me'>
												Craig Booker
											</a>{' '}
											is an iOS Developer and Writer .
										</p>
									</div>
								</div>
								{tags && tags.length ? (
									<div
										className='blog-categories box'
										style={{ marginTop: `2rem` }}
									>
										<h4>Categories</h4>
										<ul className='taglist'>
											{tags.map(tag => (
												<li key={tag + `tag`}>
													<Link to={`/tags/${kebabCase(tag)}/`}>
														<span>
															<object
																type='image/svg+xml'
																aria-label='Post Tag'
																className='social-svg'
																data={tagsSVG}
															/>
														</span>{' '}
														{tag}
													</Link>
												</li>
											))}
										</ul>
									</div>
								) : null}
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	);
};

PortfolioPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	description: PropTypes.string,
	frontmatter: PropTypes.object,
	title: PropTypes.string,
	date: PropTypes.string,
	helmet: PropTypes.object
};

const PortfolioPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<PortfolioPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				date={post.frontmatter.date}
				description={post.frontmatter.description}
				frontmatter={post.frontmatter}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
				image={post.frontmatter.featuredimage}
				wordcount={post.fields.readingTime.words}
				slug={post.fields.slug}
				readingtime={post.fields.readingTime.text}
				helmet={
					<Helmet titleTemplate='%s | Blog'>
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name='description'
							content={`${post.frontmatter.description}`}
						/>
						<meta name='og:title' content={`${post.frontmatter.title}`} />
						<meta
							name='og:description'
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
			/>
		</Layout>
	);
};

PortfolioPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default PortfolioPost;

export const pageQuery = graphql`
	query PortfolioPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			fields {
				slug
				readingTime {
					text
					words
				}
			}
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				featuredimage {
					publicURL
					childImageSharp {
						fluid(maxWidth: 1280, quality: 75) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}

				title
				description
				tags
			}
		}
	}
`;
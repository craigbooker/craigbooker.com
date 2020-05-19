import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import StyledHero from '../../components/StyledHero';
import SEO from '../../components/SEO';

const TagsPage = ({
	data: {
		allMarkdownRemark: { group },
	},
}) => (
	<Layout>
		<SEO
			title='Tags'
			description='A list of all of the tags use in my articles.'
		/>
		<StyledHero home='false'>
			<Banner
				title='Tags'
				info='This is a list of all of the tags used in my articles.'
			></Banner>
		</StyledHero>
		<section className='section'>
			<div className='container content'>
				<div className='columns'>
					<div
						className='column is-10 is-offset-1'
						style={{ marginBottom: '6rem' }}
					>
						<h1 className='title is-size-2 is-bold-light'>Tags</h1>
						<ul className='taglist'>
							{group.map((tag) => (
								<li key={tag.fieldValue}>
									<Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
										{tag.fieldValue} ({tag.totalCount})
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
	query TagsQuery {
		allMarkdownRemark(limit: 1000) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`;

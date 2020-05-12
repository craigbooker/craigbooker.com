import React from 'react';
import Image from 'gatsby-image';
import styles from '../../css/tour.module.css';
import { FaMap } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const getImage = graphql`
	query {
		file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
const Article = ({ tour }) => {
	const data = useStaticQuery(getImage);
	const img = data.file.childImageSharp.fluid;
	const { name, price, country, days, slug, images } = tour;
	console.log(data);

	let mainImage = images ? images[0].fluid : img;

	return (
		<article className={styles.tour}>
			<div className={styles.imgContainer}>
				<Image fluid={mainImage} className={styles.img} alt='single tour' />
				<AniLink fade className={styles.link} to={`/tours/${slug}`}>
					details
				</AniLink>
			</div>
			<div className={styles.footer}>
				<h3>{name || 'default name'}</h3>
				<div className={styles.info}>
					<h4 className={styles.country}>
						<FaMap className={styles.icon} />
						{country || 'default country'}
					</h4>
					<div className={styles.details}>
						<h6>{days || '000'} days</h6>
						<h6>from ${price || '9999'}</h6>
					</div>
				</div>
			</div>
		</article>
	);
};

Tour.propTypes = {
	tour: PropTypes.shape({
		name: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		days: PropTypes.number.isRequired,
		images: PropTypes.arrayOf(PropTypes.object).isRequired,
	}),
};

import React from 'react';
import Image from 'gatsby-image';
import styles from '../../css/tag.module.css';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const Tag = ({ tag }) => {
	const { fieldValue, totalCount } = tag;

	return (
		<article className={styles.tag}>
			<div className={styles.footer}>
				<h3>{fieldValue || 'default name'}</h3>
				<div className={styles.info}>
					<div className={styles.details}>
						<h6>{totalCount || '000'} count</h6>
					</div>
				</div>
			</div>
		</article>
	);
};

Tag.propTypes = {
	tag: PropTypes.shape({
		fieldValue: PropTypes.string.isRequired,
		totalCount: PropTypes.number.isRequired,
	}),
};

export default Tag;

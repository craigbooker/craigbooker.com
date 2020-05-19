import React from 'react';
import styles from '../../css/blog-card.module.css';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const TagCard = ({ tag }) => {
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

export default TagCard;

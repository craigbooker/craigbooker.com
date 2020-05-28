import React from 'react';
import Image from 'gatsby-image';
import styles from '../../css/blog-card.module.css';
import { Link } from 'gatsby';

const BlogCard = ({ post }) => {
	const { title, date, slug } = post.frontmatter;
	const img = post.frontmatter.image.childImageSharp.fluid

	return (
		<article className={styles.blog}>
			<div className={styles.imgContainer}>
				<Image fluid={img} className={styles.img} alt='single post' />

				<Link className={styles.link} to={`/blog/${slug}`}>
					read more
				</Link>
				<h6 className={styles.date}>{date}</h6>
			</div>
			<div className={styles.footer}>
				<h4>{title}</h4>

				{post.excerpt}
			</div>
		</article>
	);
};

export default BlogCard;

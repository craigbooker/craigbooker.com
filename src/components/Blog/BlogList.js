import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Title"
import styles from "../../css/blog.module.css"

const BlogList = ({ posts }) => {
  return (
    <section className={styles.blog}>
      <Title title="blog" subtitle="" />
      <div className={styles.center}>
        {posts.map(({ node }, index) => {
          return <BlogCard key={index} post={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
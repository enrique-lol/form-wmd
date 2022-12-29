import React from 'react'

const ArticleForm = ({ article, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <div className ='required'>
      <h2>Required</h2>
      <input
        required
        name="title"
        type="text"
        placeholder="Title"
        value={article.title}
        onChange={handleChange}
      />
      <input
        required
        name="text"
        type="text"
        placeholder="body"
        value={article.text}
        onChange={handleChange}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
)

export default ArticleForm

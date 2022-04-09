import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords, author }) => {
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<meta name='author' content={author} />
			</Helmet>
		</>
	)
}

Meta.defaultProps = {
	title: 'React E-Commerce | Home',
	description: 'Best products at a price you can afford ',
	keywords: 'buy, apple, electronics, United States',
	author: 'Kane Whiteside',
}

export default Meta

import React from 'react'
import PropTypes from 'prop-types'
import { AppsPageTemplate } from '../../templates/apps-page'

const AppsPagePreview = ({ entry, widgetFor }) => (
	<AppsPageTemplate
		title={entry.getIn(['data', 'title'])}
		content={widgetFor('body')}
	/>
)

AppsPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
}

export default AppsPagePreview

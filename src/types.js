import PropTypes from 'prop-types'

export const bookTypes = PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    shelf: PropTypes.string,
    imageLinks: PropTypes.shape({
		thumbnail: PropTypes.string
	})
  })
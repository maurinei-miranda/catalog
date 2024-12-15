import PropTypes from 'prop-types'

const PageTitle = function({valor}) {
    return (
        <h2 className='m-5 text-center font-bold font-mono sm:text-2xl'>
            {valor}
        </h2>
    )
}

PageTitle.propTypes = {
    valor: PropTypes.string.isRequired
}

export default PageTitle;
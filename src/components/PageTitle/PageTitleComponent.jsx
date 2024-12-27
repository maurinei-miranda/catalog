import PropTypes from 'prop-types'

const PageTitle = function({valor}) {
    return (
        <div className='p-5  border-b-4 border-orange-500' id='page-title'>
        <h2 className='text-center font-bold font-mono sm:text-2xl'>
            {valor}
        </h2>
        </div>
    )
}

PageTitle.propTypes = {
    valor: PropTypes.string.isRequired
}

export default PageTitle;
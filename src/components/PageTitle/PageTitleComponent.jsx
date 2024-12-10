import PropTypes from 'prop-types'

const PageTitle = function({valor}) {
    // let value = props.valor
    console.log("Renderizando Title")
    return (
        <h2 className='m-5 text-center'>
            {valor}
        </h2>
    )
}

PageTitle.propTypes = {
    valor: PropTypes.string.isRequired
}

export default PageTitle;
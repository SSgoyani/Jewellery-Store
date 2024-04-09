import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - Jewellery Store`}</title>
        </Helmet>
    )
}

export default MetaData
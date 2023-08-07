import { Helmet, HelmetProvider } from 'react-helmet-async';

const Relevance = () =>{
    return(
    <>
    <HelmetProvider>
        <Helmet>
            <title>TailMagic | Why?</title>
        </Helmet>
        <div>Why Indeed</div>
    </HelmetProvider>
    </>
        
    )
}

export default Relevance;
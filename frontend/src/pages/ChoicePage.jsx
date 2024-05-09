import { Link } from 'react-router-dom'
const ChoicePage = () => {
    return(
        <>
        <div>
        <Link to="/sign-up"><button>Representative</button></Link> 
        <Link to="/sign-up"><button>Citizen</button></Link>
        </div>
        </>
    )
}

export default ChoicePage
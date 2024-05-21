import { Link } from 'react-router-dom'
import { Flex, Text, Box, Grid, Container, Button } from '@radix-ui/themes';
import Img from '../Photo/PoliticsImg1.jpeg'
import { useContext } from 'react'
import UserContext from '../contexts/current-user-context'

const ChoicePage = () => {
    const { isRep, setIsRep} = useContext(UserContext)


    const helper2 = () => {
        setIsRep(false)
        console.log(isRep)
    }

    const helper1 = () => {
        setIsRep(true)
        console.log(isRep)
    }
    
   
    return(
        <>
        <Flex>
         <div style={{ position: "relative", width: "65%", height: "98vh" }}>
             <img src={Img} alt="sum" style={{ width: "100%", height: "100%", objectFit: "cover"}}/>
             <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.3)" }}></div>
             <div style={{ position: "absolute", lineHeight: "-2px", letterSpacing:"-2px", top: "50%", left: "50%", transform: "translate(-45%, -180%)", width:"900px"}}>
                <Text style={{ fontWeight: 'bold', fontSize:"7rem", color: "white", textAlign: "center"}}>Engage in Democracy:</Text>
                <br />
                <Text size= "2" style={{ color: "white", fontSize: "3rem", fontWeight: 'bold', textAlign: "center", marginTop:"4rem"}}>Choose Your Role.</Text>
            </div>
         </div>

       
        <Container>
        <Flex justify="center">
            <Text size="9" style={{margin: "8rem", marginTop:"20rem", fontWeight: 'bold'}}>Who Are You?</Text>
        </Flex>
        <Flex justify="center">
        <Link to="/sign-up" style={{textDecoration: "none"}}><Button size="4" variant="surface" onClick={helper1} style={{marginRight: "4rem"}}>Representative</Button></Link> 

        <Link to="/sign-up" style={{textDecoration: "none"}} ><Button size="4" variant="surface" onClick={helper2} style={{marginLeft: "2rem"}}>Citizen</Button></Link>
        </Flex>
        </Container>

        </Flex>
        </>
    )
}

export default ChoicePage
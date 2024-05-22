import { useContext, useState } from "react";
import { useNavigate, Navigate, Link} from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import { Text, Box, Flex } from "@radix-ui/themes";
import logInImage from "../Photo/LogIn.png";
import CurrentUserContext from "../contexts/current-user-context";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    const formData = new FormData(event.target);
    console.log(formData);
    console.log(Object.fromEntries(formData));
    const [user, error] = await logUserIn(Object.fromEntries(formData));
    if (error) return setErrorText(error.message);
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <>
      <img src={logInImage} alt="" style={{ width: "100%", height: "100dvh", position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", zIndex: "-1"}} />
      <div style={{ position: "absolute", letterSpacing: "-2px", top: "50%", left: "50%", transform: "translate(-75%, -120%)", width: "900px" }}>
        <Text style={{ fontWeight: 'bold', fontSize: "4rem", color: "Black", textAlign: "center" }}>Welcome to Ballot!</Text>
        <br />
        <Text size="2" style={{ color: "Black", fontSize: "3rem", fontWeight: 'bold', textAlign: "center", marginTop: "4rem" }}> Find Your Vote.</Text>
        <br />
        <br />
        <Text size="3" style={{ color: "Black", textAlign: "center", marginTop: "6rem" }}>Create an account to help guide your voting decisions! <Link to="/choose">Sign Up!</Link></Text>
      </div>
      <Flex justify="center">
        <Box style={{backgroundColor: "white", zIndex: "6", marginTop: "50px"}}>
      <form onSubmit={handleSubmit} aria-labelledby="login-heading">
        <h2 id="login-heading">Log back in!</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          autoComplete="username"
          id="username"
          name="username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          autoComplete="current-password"
          id="password"
          name="password"
        />

        <button>Log in!</button>
        {!!errorText && <p>{errorText}</p>}
      </form>
       </Box>
      </Flex>
       
       
     
    </>
  );
}

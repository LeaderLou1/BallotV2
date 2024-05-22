import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { Flex, Box, Grid, Card } from '@radix-ui/themes';
import signUpImg from "../Photo/signUpImg.jpeg"
import { createUser } from "../adapters/user-adapter";
import UserContext from '../contexts/current-user-context'
// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
    const { isRep } = useContext(UserContext)
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [errorText, setErrorText] = useState('');
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('')
    const [state, setState] = useState('');
    // We could also use a single state variable for the form data:e
    // const [formData, setFormData] = useState({ username: '', password: '' });
    // What would be the pros and cons of that?

    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
        "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];


    // if (currentUser) return <Navigate to="/" />;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorText('');
        if (!username || !password) return setErrorText('Missing username or password');

        const [user, error] = await createUser({ first_name: first, last_name: last, username, password, state, zipcode, is_rep: isRep });
        console.log({ first, last, username, password, isRep, state, zipcode })
        if (error) return setErrorText(error.message);

        setCurrentUser(user);
        navigate('/');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
        if (name === 'verifyPassword') setVerifyPassword(value)
        if (name === 'zipcode') setZipcode(value)
        if (name === 'first') setFirst(value);
        if (name === 'last') setLast(value);
        if (name === 'state') setState(value);
    };

    return (

        <div style={{ position: "relative" }}>
            <img src={signUpImg} alt="" style={{ width: "100%", height: "100dvh", position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", zIndex: -1 }} />
            <Flex justify="center">
                <Card style={{ width: "400px", height: "800px", top: 60 }}>
                    <center><h1>Sign Up</h1></center>
                    <br />
                    <form onSubmit={handleSubmit} onChange={handleChange} aria-labelledby="create-heading" style={{ zIndex: 1, background: "white" }}>
                        <h2 id="create-heading">Create New User</h2>

                        <label htmlFor="first">First name</label>
                        <input
                            autoComplete="off"
                            type="text"
                            id="first"
                            name="first"
                            onChange={handleChange}
                            value={first}
                        />

                        <label htmlFor="last">Last name</label>
                        <input
                            autoComplete="off"
                            type="text"
                            id="last"
                            name="last"
                            onChange={handleChange}
                            value={last}
                        />

                        <label htmlFor="username">Username</label>
                        <input
                            autoComplete="off"
                            type="text"
                            id="username"
                            name="username"
                            onChange={handleChange}
                            value={username}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            autoComplete="off"
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={password}
                        />

                        <label htmlFor="verifyPassword">Verify password</label>
                        <input
                            autoComplete="off"
                            type="password"
                            id="verifyPassword"
                            name="verifyPassword"
                            onChange={handleChange}
                            value={verifyPassword}
                        />
                        <label htmlFor="zipcode">Zipcode</label>
                        <input
                            autoComplete="off"
                            id="zipcode"
                            name="zipcode"
                            onChange={handleChange}
                            value={zipcode}
                        />

                        <label htmlFor="state">State:</label>
                        <select
                            id="state"
                            name="state"
                            value={state}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select state...</option>
                            {states.map(state => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                        <br />
                        {!!errorText && <p style={{ color: 'red', fontSize: '14px' }}>{errorText}</p>}
                        <br />
                        <button>Sign Up Now!</button>
                    </form>
                    <br />
                    <center><p>Already have an account with us? <Link to="/login">Log in!</Link></p></center>
                </Card>
            </Flex>
        </div>



    )
}

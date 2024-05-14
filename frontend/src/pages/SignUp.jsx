import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";

// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [county, setCounty] = useState('');
  // We could also use a single state variable for the form data:
  // const [formData, setFormData] = useState({ username: '', password: '' });
  // What would be the pros and cons of that?

  const counties = [
    'Albany', 'Allegany', 'Bronx', 'Broome', 'Cattaraugus',
    'Cayuga', 'Chautauqua', 'Chemung', 'Chenango', 'Clinton',
    'Columbia', 'Cortland', 'Delaware', 'Dutchess', 'Erie',
    'Essex', 'Franklin', 'Fulton', 'Genesee', 'Greene',
    'Hamilton', 'Herkimer', 'Jefferson', 'Kings (Brooklyn)', 'Lewis',
    'Livingston', 'Madison', 'Monroe', 'Montgomery', 'Nassau',
    'New York (Manhattan)', 'Niagara', 'Oneida', 'Onondaga', 'Ontario',
    'Orange', 'Orleans', 'Oswego', 'Otsego', 'Putnam',
    'Queens', 'Rensselaer', 'Richmond (Staten Island)', 'Rockland', 'Saratoga',
    'Schenectady', 'Schoharie', 'Schuyler', 'Seneca', 'Steuben',
    'Suffolk', 'Sullivan', 'Tioga', 'Tompkins', 'Ulster',
    'Warren', 'Washington', 'Wayne', 'Westchester', 'Wyoming',
    'Yates'
];

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password) return setErrorText('Missing username or password');

    const [user, error] = await createUser({ first, last, username, password, county});
    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return <>
   <center><h1>Sign Up</h1></center> 
      <br />
    
    <form onSubmit={handleSubmit} onChange={handleChange} aria-labelledby="create-heading">
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

       <label htmlFor="county">County:</label>
        <select
          id="county"
          name="county"
          value={county}
          onChange={handleChange}
          required
          >
            <option value="">Select county...</option>
             {counties.map(county => (
               <option key={county} value={county}>{county}</option>
               ))}
          </select>  
          <br />   
        { !!errorText && <p style={{ color: 'red', fontSize: '14px' }}>{errorText}</p> }
      {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}
    <br />
      <button>Sign Up Now!</button>
    </form>
     <br />
    <center><p>Already have an account with us? <Link to="/login">Log in!</Link></p></center>
  </>;
}

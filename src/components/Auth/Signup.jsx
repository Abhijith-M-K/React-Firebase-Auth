// import React, { useState } from 'react'
// import { auth } from "../../firebase";
// import { createUserWithEmailAndPassword } from 'firebase/auth'

// const Signup = () => {
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

//     const handleSubmit=(e)=>{
//       e.preventDefault()
//       createUserWithEmailAndPassword(auth,email,password).then((useCredantial)=>{
//         console.log(useCredantial);
        
//       }).catch((error)=>{
//         console.log(error);
//       })

//     }
    
//   return (
//     <div className='sign-in-container'>
//         <form onSubmit={handleSubmit}>
//             <h1>Creat a account</h1>
//             <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//             <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
//             <button type='submit'>SignUP</button>

//         </form>
//     </div>
//   )
// }

// export default Signup



import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredantial) => {
        console.log(useCredantial);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
        Create Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
          
        </Box>
      </Box>
    </Container>
  );
}

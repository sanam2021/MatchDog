// import React, { useState, useContext } from "react";
// import styled from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { UserContext } from "./UserContext";

// const SignUpContainer = styled.div`
//   background-color: #ef8172;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2rem;
// `;

// const SignUpHeading = styled.h2`
//   font-size: 2rem;
//   line-height: 1.5;
//   color: #fff;
//   margin-bottom: 1rem;
// `;


// const SignUpForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 2rem;
// `;

// const SignUpInput = styled.input`
//   width: 100%;
//   max-width: 300px;
//   height: 40px;
//   padding: 10px;
//   margin-bottom: 10px;
//   font-size: 1rem;
// `;

// const SignUpButton = styled.button`
//   display: inline-block;
//   padding: 10px 20px;
//   font-size: 1rem;
//   background-color: #fff;
//   color: #ef8172;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #ff4c68;
//     color: #fff;
//   }
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
// `;

// const MainLogoImage = styled.img`
//   width: 200px;
//   height: 200px;
// `;

// const HomeIcon = styled(FontAwesomeIcon)`
//   font-size: 3rem;
//   color: #ff4c68;
//   cursor: pointer;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #fff;
//   }
// `;

// const SignUpPage = () => {
//   const navigate = useNavigate();
//   const { setUser } = useContext(UserContext); // Access the setUser function from UserContext
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);

//   const handleClick = () => {
//     navigate("/dogprofile");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform sign-up logic with the collected data

//     // Clear input fields after sign-up
//     setUsername("");
//     setEmail("");
//     setPassword("");

//     // Set the sign-up success status
//     setIsSignUpSuccessful(true);

//     // Update the user in the UserContext
//     setUser({ username, email });

//     // Redirect to the DogProfile page after successful sign-up
//     navigate("/dogprofile");
//   };

//   return (
//     <SignUpContainer>
//       <LogoContainer>
//         <MainLogoImage src="./images/logoname.png" alt="Main Logo" />
//         <HomeIcon icon={faHome} onClick={handleClick} />
//       </LogoContainer>
//       <SignUpHeading>Create an Account</SignUpHeading>
//       {!isSignUpSuccessful ? (
//         <SignUpForm onSubmit={handleSubmit}>
//           <SignUpInput
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <SignUpInput
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <SignUpInput
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <SignUpButton type="submit">Sign Up</SignUpButton>
//         </SignUpForm>
//       ) : (
//         <p>Sign up successful! Please create your dog profile.</p>
//       )}
//     </SignUpContainer>
//   );
// };

// export default SignUpPage;

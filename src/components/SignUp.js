import React,{ useState } from "react";
import  "./SignUp.css";
import axios from "axios"


const SignUp = () => {


    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })


    const handleChange =(e)=>{
        const{name, value} =e.target
        setUser({
            ...user,
            [name]:value
        })

    }

    function signup(){
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
        axios.post("http://localhost:3000/signup", user)
        .then( res => {
            alert(res.data.message)
            
        })
    } else {
        alert("invlid input")
    }
    
}

    return(
        <div className="signup">
        <form>
        {console.log("User", user)}
        <h1>SignUp</h1>
        <input type="text" name="name" value={user.name} placeholder="your name"  onChange={ handleChange } />
        <input type="text" name="email" value={user.email} placeholder="your email" onChange={ handleChange } />
        <input type="password" name="password" value={user.password} placeholder="your password" onChange={ handleChange }/>
        
        <div className="button" onClick={signup} >SignUp</div>
     
 
        </form>
        </div>
    )
    }

    
export default SignUp;
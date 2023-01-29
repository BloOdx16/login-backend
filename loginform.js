import React,{useState} from 'react';
import './loginform.css';

const Loginform= () => {
    const [userData,setUserData]=useState({
        username:"",
        password:"",
        email:"",
    });
    let name,value;
    const postUserData =(event)=> {
        name=event.target.name;
        value=event.target.value;
        setUserData({...userData,[name]:value});
    };
    
    const handleclick =async(e)=>{
        e.preventDefault();
        console.log("activated");
        const{username,password,email}=userData;
        console.log(username,password,email);
        fetch("https://localhost:5000/signup",{
            method:"POST",
            crossDomain:true,
            Headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({username,password,email,}),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister");
        });
    } 
    //userData.handleclick=userData.handleclick.bind(userData);  
    
    return(
        
        
        <nav className="Loginform">
            <h1>LOGIN</h1>
            <br></br>
            
            <form onSubmit={handleclick}>    
            <p>username :</p>
            <input type="text" placeholder="username " required="*" className='user'
            name="username"
            value={userData.username}
            onChange={postUserData}/>
            
            <div className='pass'>
                <p>password :
                <font-awesome-icon icon="fa-light fa-key" />
                </p>
                
                <input type="password" placeholder="password " required="*" maxLength="12" 
                name="password"
                value={userData.password} 
                onChange={postUserData}/>
            </div>
            <p>email :</p>
            <input type="email" placeholder="xyz@gmail.com" required="*" className='mail'
            name="email"
            value={userData.email}
            onChange={postUserData}/>
            <a >
            <button onClick={handleclick()} className="button">SUBMIT</button>
            </a>
            
            <p className='checkbox'><input type="checkbox"/>Remember me</p>
            </form>
            
        </nav>
    )

}
export default Loginform;
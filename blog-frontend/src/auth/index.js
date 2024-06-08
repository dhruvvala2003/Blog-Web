// check local storage ma user ni detaiks chhe to ? to login chhe

    export const isLogin=()=>{

        let userEmail=localStorage.getItem("email")
        let userPassword=localStorage.getItem("password")

        if(userEmail==null || userPassword==null)
        {
            return false;
        }
        else{
            return true
        }
    }

//local storage ma save karava user details
    export const doLogin=(email,password,uid)=>{
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            localStorage.setItem("uid",uid);
    }

//local storage ma thi userdetails remove karava    
    export const doLogout=()=>{
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        localStorage.removeItem("uid");
    }


// get current user
    export const getCurrentUser=()=>{

        if(isLogin())
        {
            let userEmail=localStorage.getItem("email")
            let userPassword=localStorage.getItem("password")
            let uid=localStorage.getItem("uid");
            return {email:userEmail,password:userPassword,uid:uid};
        }
        else{
            return false;
        }
    }
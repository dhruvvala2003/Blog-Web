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
    export const doLogin=(email,password)=>{
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)

    }

//local storage ma thi userdetails remove karava    
    export const doLogout=()=>{
        localStorage.removeItem("email")
        localStorage.removeItem("password")
    }


// get current user
    export const getCurrentUser=()=>{

        if(isLogin())
        {
            let userEmail=localStorage.getItem("email")
            let userPassword=localStorage.getItem("password")
            return {email:userEmail,password:userPassword};
        }
        else{
            return false;
        }
    }
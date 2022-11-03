import React, { useContext } from 'react'
import  {Navigate, useLocation} from 'react-router-dom'
import { AuthContext } from './auth'

function ReqAuth({children}) {
    const contextAuth = useContext(AuthContext)
    // const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    if(!contextAuth.user){
        return <Navigate to ="/login" state={{path:location.pathname}}/>
    //    return navigate("/login")
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default ReqAuth


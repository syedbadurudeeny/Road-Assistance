import React from "react";
import { isAdminAuthenticated , isUserAuthenticated , isDriverAuthenticated} from "./Config";
import { removeAdmin, removeDriver, removeUser } from "./Storage";
import { Link, Navigate } from "react-router-dom";


function Dashboard(){

    function handleLogout(){
        removeAdmin();
        removeUser();
        removeDriver();
        <Navigate to={'/login'} />
    }

    return(
        <>
        <main>
         <div className="dashboard-page">
        <section className="content-edu ">
                <h2>Road-Asistance</h2>
            </section>
            <section className="nav-edu">
            <ul className="nav-links">
                {!isAdminAuthenticated() && !isUserAuthenticated() && !isDriverAuthenticated()?
                <li><Link to={'/login'} className="admin">Login</Link></li> : null}
                {!isAdminAuthenticated() && !isUserAuthenticated() && !isDriverAuthenticated()?
                <li><Link to={'/register'} className="admin">Register</Link></li> : null}
                {/* {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
                <li><Link to='/home' className="admin">Home</Link></li> :null} */}
                {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
                <li><Link to={'/mechanic'} className="admin">Driver</Link></li> : null}
                {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
                <li><Link to={'/'} className="admin">Dashboard</Link></li> : null}
                {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
                <li><Link to={'/user'} className="admin">User</Link></li> : null}
                {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
                <li><Link to={'/sms'} className="admin">Sms</Link></li> : null}
                {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated() ? 
                <li><Link><a href="/login" onClick={handleLogout} className="admin">Logout</a></Link></li> : null}
            </ul>
            </section>
        </div>
         </main>
        </>
    )
}

export default Dashboard;
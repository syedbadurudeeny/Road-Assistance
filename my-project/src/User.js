import { useContext} from "react"
import DataContext from "./DataProvider";
import { isUserAuthenticated, isAdminAuthenticated, isDriverAuthenticated } from "./Config";
import { Link } from "react-router-dom";

function User(){

    const {inputsuser,datausers,handleUserchange,handleUserSubmit,handleMapClick,imgVisible} = useContext(DataContext);

    return(
        <>
        <main className='list-page'>
         <div className="home-dash">
        <section className="content-edu ">
                <h2>Road-Asistance</h2>
            </section>
            <section className="nav-edu">
            <ul className="nav-links">
                {!isAdminAuthenticated() && !isUserAuthenticated() && !isDriverAuthenticated()?
                <li><Link to={'/login'} className="admin">Login</Link></li> : null}
                {!isAdminAuthenticated() && !isUserAuthenticated() && !isDriverAuthenticated()?
                <li><Link to={'/register'} className="admin">Register</Link></li> : null}
                {!isAdminAuthenticated() || !isUserAuthenticated() || !isDriverAuthenticated()?
                <li><Link to={'/'} className="admin">Dashboard</Link></li> : null}
                {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
                <li><Link to={'/mechanic'} className="admin">Mechanic</Link></li> : null}
                {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
                <li><Link to={'/user'} className="admin">User</Link></li> : null}
            </ul>
            </section>
        </div>

        <br/>
        <section>
            <ul className='student-lists'>
            {
                datausers.map(user=>(
                    <li key={user.id} className='student-item'>
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>
                        <img src={user.img} width={200} height={200} alt="disabled" />
                        <button onClick={handleMapClick}>Get Location</button>
                    </li>
                ))
            }
            </ul>
            </section>
            <br/>
            <br/>
           
            {
                isUserAuthenticated() || isDriverAuthenticated() ? 
                <section>
                <form className="form-edit" onSubmit={handleUserSubmit}>

                    <div className='form-edit-inputs'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="name" id="name" value={inputsuser.name} placeholder="Name" onChange={handleUserchange} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="email" id="email" value={inputsuser.email} placeholder="Email" onChange={handleUserchange} required />

                    {imgVisible ? <img src="" width={200} height={200} alt="disabled" /> : null}

                    <button  className='btn-update-submit'>Submit</button>
                    </div>
                </form>
            </section> :null
            }
         </main>

        </>
    )
}


export default User;
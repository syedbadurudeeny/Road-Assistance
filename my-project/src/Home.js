// import { isAdminAuthenticated , isUserAuthenticated , isDriverAuthenticated} from "./Config";
// import { Link } from "react-router-dom";

// function Home(){

//     return(
//         <>
//          <main className="home-page">
//          <div className="home-dash">
//         <section className="content-edu ">
//                 <h2>Road-Asistance</h2>
//             </section>
//             <section className="nav-edu">
//             <ul className="nav-links">
//                 {!isAdminAuthenticated() && !isUserAuthenticated() && !isDriverAuthenticated()?
//                 <li><Link to={'/login'} className="admin">Login</Link></li> : null}
//                 {!isAdminAuthenticated() && !isUserAuthenticated() && !isDriverAuthenticated()?
//                 <li><Link to={'/register'} className="admin">Register</Link></li> : null}
//                 {!isAdminAuthenticated() || !isUserAuthenticated() || !isDriverAuthenticated()?
//                 <li><Link to={'/'} className="admin">Dashboard</Link></li> : null}
//                 {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
//                 <li><Link to='/home' className="admin">Home</Link></li> :null}
//                 {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
//                 <li><Link to={'/mechanic'} className="admin">Mechanic</Link></li> : null}
//                 {isAdminAuthenticated() || isUserAuthenticated() || isDriverAuthenticated()?
//                 <li><Link to={'/user'} className="admin">User</Link></li> : null}
//             </ul>
//             </section>
//         </div>
//          </main>
//         </>
//     )
// }

// export default Home;
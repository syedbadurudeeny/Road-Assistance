import { useState} from "react";
import MechanicsData from "./DataMechanic";
import { isUserAuthenticated, isAdminAuthenticated, isDriverAuthenticated } from "./Config";
import { Link } from "react-router-dom";

function Mechanic(){

    const initialMechanicValues = {id:null,img:"",name:"",phone:"",address:"",dob:""};

    const [inputmechanics,setInputMechanics] = useState(initialMechanicValues);
    const [image,setImage]=useState("");
    const [datamechanics,setDataMechanics] =useState(MechanicsData);

    function handleMechanicchange(e){
        const {name,value}=e.target;
        setInputMechanics({...inputmechanics,[name]:value});
    }

    function handleImagechange(e){
        setImage(e.target.files[0])
        setInputMechanics({...inputmechanics,[e.target.name] : e.target.files[0].name})
    }

    function handleMechanicSubmit(e){
        e.preventDefault();
        addMechanic(inputmechanics);
        setImage("");
        setInputMechanics(initialMechanicValues);
    }

    function addMechanic(newMechanic){
        newMechanic.id = datamechanics.length +1;
        setDataMechanics([...datamechanics,newMechanic]);
    }

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
                {datamechanics.map(mechanic=>(
                    <li key={mechanic.id} className='student-item'>
                        <img src={mechanic.img} alt="disabled" width={200} height={200} />
                        <h3>{`Name : ${mechanic.name}`}</h3>
                        <h3>{`Ph : ${mechanic.number}`}</h3>
                        <h3>{`Address : ${mechanic.address}`}</h3>
                        <h3>{`Dob : ${mechanic.dob}`}</h3>
                    </li>
                ))}
            </ul>
           </section>

           <br/>
            <br/>
            {isUserAuthenticated() || isDriverAuthenticated() ? 
           <section>
            <form className="form-edit" onSubmit={handleMechanicSubmit}>
            <div className='form-edit-inputs'>
                    <div>
                    {image ? <img src={URL.createObjectURL(image)} width={200} height={200} alt="disabled" /> : null}
                    <input type="file" name="img" className="img" id="img" onChange={handleImagechange} />
                    </div>

                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="name" id="name" value={inputmechanics.name} placeholder="Name" onChange={handleMechanicchange} required />

                    <label htmlFor="phone">Phone</label>
                    <input type="phone" name="phone" className="phone" id="phone" value={inputmechanics.phone} placeholder="Phone" onChange={handleMechanicchange} required />

                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" className="address" id="address" value={inputmechanics.address} placeholder="Address" onChange={handleMechanicchange} required />

                    <label htmlFor="dob">Dob</label>
                    <input type="text" name="dob" className="dob" id="dob" value={inputmechanics.dob} placeholder="DOB" onChange={handleMechanicchange} required />

                    <button>Submit</button>
                    </div>
                </form>
           </section> : null} 
        </main>
        </>
    )
}

export default Mechanic;
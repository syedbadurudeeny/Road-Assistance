import { createContext, useState } from "react"
import UserData from "./DataUser"



const DataContext = createContext({})

export const  DataProvider = ({children}) => {

    const initialUserValues= {id:null,name:"",email:"",img:"Unknown_person.jpg"};
    

    const [inputsuser,setInputsUser]=useState(initialUserValues);
    const [datausers,setDataUsers]=useState(UserData);
    const [imgVisible,setImgVisible]=useState(false);



    function handleUserchange(e){
        const {name,value} = e.target;
        setInputsUser({...inputsuser,[name]:value})
    }

    function handleUserSubmit(e){
        e.preventDefault();
        addUser(inputsuser);
        setImgVisible(true);
        setInputsUser(initialUserValues)
    }

    function addUser(newUser){
        newUser.id = datausers.length +1;
        setDataUsers([...datausers,newUser]) 

    }

   

    function handleMapClick(){
        navigator.geolocation.getCurrentPosition((position)=>{
            let latitude = position.coords.latitude;
            let longitude= position.coords.longitude;
            const iframeSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`;

            // Define the iframe HTML string
            alert(iframeSrc)

    const copyText = navigator.clipboard.writeText(iframeSrc)
      .then(() => {
        console.log('URL copied to clipboard:', iframeSrc);
        // alert('URL copied to clipboard: ' + iframeSrc);
      })
      .catch(err => {
        console.error('Failed to copy URL to clipboard:', err);
      });
            
          window.open(iframeSrc,'_blank')
        })
    }

    return(
        <DataContext.Provider value={
            {inputsuser,setInputsUser,datausers,setDataUsers,handleUserchange,handleUserSubmit,handleMapClick,imgVisible}} >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
import React from 'react';

export default function Binding() {
    const [name, setName] = React.useState("");

    function submitehandler(e){
        e.preventDefault();

        if(name === ""){
            alert("Please enter name");
            return;
        }

        console.log(`The form is submitted by ${name}`);
        setName("");
    }

    return (
        <div>
            <form onSubmit={submitehandler}>
                <input 
                    type="text"  
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
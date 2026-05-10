import React from 'react'

export default function About({ teamMembers })
{
    // Check if data exists
    if (!teamMembers || teamMembers.length === 0) {
        return <div>Loading team member...</div>
    }
    
    return(
        <div>
            <h1>Team Members</h1>
            {teamMembers.map((member) => (
                <div key={member.id}>
                    <h2>{member.name}</h2>
                    <p>Position: {member.position}</p>
                    <p>Department: {member.department}</p>
                    <img src={member.image} alt={member.name} />
                    <hr />
                </div>
            ))}
        </div>
    )
}
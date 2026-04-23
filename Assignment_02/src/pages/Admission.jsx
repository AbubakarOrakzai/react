import React from 'react'
import './Admission.css'

const criteria = [
  { id: 1, requirement: 'Minimum 50% marks in FSc / A-Levels or equivalent' },
  { id: 2, requirement: 'Pre-Engineering, Pre-Medical, or Computer Science background' },
  { id: 3, requirement: 'Valid UMT Entry Test or SAT score required' },
  { id: 4, requirement: 'Applicant must be under 25 years of age' },
  { id: 5, requirement: 'Original academic documents and CNIC/B-Form required' },
]

const process = [
  { step: 1, title: 'Online Application', desc: 'Fill and submit the application form on the UMT admissions portal.' },
  { step: 2, title: 'Document Submission', desc: 'Upload academic transcripts, CNIC, and passport-size photos.' },
  { step: 3, title: 'Entry Test', desc: 'Appear in the UMT Entry Test or submit valid SAT scores.' },
  { step: 4, title: 'Merit List', desc: 'Check the merit list announced on the UMT official website.' },
  { step: 5, title: 'Fee Submission', desc: 'Pay the admission fee within the due date to confirm your seat.' },
  { step: 6, title: 'Enrollment', desc: 'Collect your student ID and complete the enrollment process.' },
]

const dates = [
  { event: 'Application Start Date', date: 'January 1, 2025' },
  { event: 'Last Date to Apply', date: 'March 31, 2025' },
  { event: 'Entry Test Date', date: 'April 15, 2025' },
  { event: 'Merit List Announcement', date: 'April 25, 2025' },
  { event: 'Fee Submission Deadline', date: 'May 10, 2025' },
  { event: 'Classes Begin', date: 'September 1, 2025' },
]

export default function Admission() {
  return (
    <div className='admission'>

      <div className='admission-hero'>
        <h1>Admission Information</h1>
        <p>Everything you need to know about joining UMT</p>
      </div>

      <div className='admission-container'>

        <section className='admission-section'>
          <h2>Admission Criteria</h2>
          <ul className='criteria-list'>
            {criteria.map((item) => (
              <li key={item.id}>
                <span className='check'>✓</span>
                {item.requirement}
              </li>
            ))}
          </ul>
        </section>

        <section className='admission-section'>
          <h2>Admission Process</h2>
          <div className='process-steps'>
            {process.map((item) => (
              <div className='step-card' key={item.step}>
                <div className='step-number'>{item.step}</div>
                <div className='step-info'>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='admission-section'>
          <h2>Important Dates</h2>
          <table className='dates-table'>
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((item, index) => (
                <tr key={index}>
                  <td>{item.event}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </div>
    </div>
  )
}
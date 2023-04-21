import React from 'react'
import Button from 'react-bootstrap/Button';

export const Appointmentcard = () => {
  return (
    <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td><Button variant="dark">Reschedule</Button><Button variant="dark" className="mx-2">Cancel</Button></td>
    </tr>  )
}
export default Appointmentcard
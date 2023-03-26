import React from 'react'
import { Form } from 'antd';

function Contact() {
    return (
        <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'center' }}>

            <Form style={{
                margin: 'auto', width: 600, height: 400,
                padding: 20, borderRadius: 10, backgroundColor: '#d9f5e1'
            }}>

                <h3>Contact Page</h3>

                <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center' }}>

                    <p>Images Tower, B-27 Third Floor,<br/>
                     Sector-132, Noida, Uttar Pradesh 201301
                     <br/>  <br/>

                        Email: info@vivacoders.com
                        <br/>
                        Phone: +91 8700 740 347</p>
                </div>


            </Form>
        </div>
    )
}
export default Contact;
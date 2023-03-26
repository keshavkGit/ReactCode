import React from 'react'
import { Form } from 'antd';

function About() {
    return (
        <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'center' }}>

            <Form style={{
                margin: 'auto', width: 600,height:400,
                padding: 20, borderRadius: 10, backgroundColor: '#d9f5e1'
            }}>

                <h3>About Page</h3>

                <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center' }}>

                    <p>Viva Coders is an Information Technology Outsourcing Company based in India.
                     Viva Coders offers a complete range of IT services and industry focused solutions to many domains worldwide that range from software development services, App Development,
                     Social Media Management and structuration, E-Commerce and much more. We have helped startups and enterprises to Bridge their vision and reality.</p>
                </div>


            </Form>
        </div>
    )
}
export default About;
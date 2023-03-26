import React, { useState } from 'react'
import { Button, Form, Input, Modal, Radio, Select } from 'antd'
import '../App.css';


const Home = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [skill, setSkill] = useState('')
    const [jobType, setJobType] = useState('')
    const [location, setLocation] = useState('')
    const [isForm, setIsForm] = useState(true)
    const [isModal, setIsModal] = useState(false)

    const submitFunction = () => {
        console.log(name, email, jobType, skill, location, 'submit')
        setIsForm(false)
        setIsModal(true)
    }

    const cancelFunction =()=>{
        setIsModal(false)
        setIsForm(true)
      
    }

    const confirmFunction =()=>{
        setName('')
        setEmail('')
        setSkill('')
        setJobType('')
        setLocation('')
        setIsModal(false)
        setIsForm(false)
      
    }

    const newForm =()=>{
        setIsModal(false)
        setIsForm(true)
      
    }

    return (
        <div>

            {isForm ?

                <Form style={{
                    margin: 'auto', width: 350, border: '1px solid rgb(221, 159, 159)',
                    padding: 20, borderRadius: 10, backgroundColor: '#d9f5e1'
                }}
                    onFinish={submitFunction} >

                    <h3>Registration Form</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center' }}>

                        <label>User Name</label>
                        <Input type='text' maxLength='12' value={name} onChange={(e) => { setName(e.target.value) }} /><br />

                        <label>Email </label>
                        <Input type='email' maxLength='20' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />

                        <label>Skills</label>
                        <Select onChange={(e) => { setSkill(e) }}>
                            <Select.Option value='javaScript'>JavScript</Select.Option>
                            <Select.Option value='react'>React</Select.Option>
                            <Select.Option value='java'>Java</Select.Option>
                            <Select.Option value='node'>Node</Select.Option>
                        </Select> <br />

                        <label>Job Type </label>
                        <Radio.Group onChange={(e) => { setJobType(e.target.value) }} >
                            <Radio value='partTime'>Part Time</Radio>
                            <Radio value='regular' >Regular</Radio>
                        </Radio.Group>
                        <br />

                        <label>Location </label>
                        <Input type='text' maxLength={20} onChange={(e) => { setLocation(e.target.value) }} />
                        <br />

                        <Button type='primary' disabled={(name && email)? false : true} htmlType='submit'>Preview</Button>

                    </div>


                </Form>

                : (isModal?  <>
                    <Modal
                        open={isModal}
                        onCancel={cancelFunction}
                        footer={false}
                    >


                        <h3> Form Preview</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center', }}>

                            <p> User Name :  {name}</p>
                           
                            <p>Email: {email}</p>

                            <p>Skills: {skill}</p>

                            <p>Job Type : {jobType}</p> 

                            <p>Location: {location}</p> 

                            <Button type='primary'  onClick={confirmFunction}>Submit</Button>


                        </div>



                    </Modal>
                </>
                : 
                <div style={{  margin: 'auto', width: 350, display:'flex',
                 flexDirection:'column', justifyItems:'center',justifyContent:'center',textAlign:'center'}}>

                <h3 >User Registered Successfully</h3> 

                <Button type='primary' onClick={newForm}>New Registration</Button>
                </div> )
                }

        </div>


    )
}
export default Home;
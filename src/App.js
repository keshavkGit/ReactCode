import './App.css';
import React from 'react';
import { Layout, Menu,  } from 'antd'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

// import { useState } from 'react'
import About from './components/About'
import Home from './components/Home';
import Contact from './components/Contact';

function App() {

  const { Header, Content } = Layout

  return (
    <Layout className='layout' >
      <BrowserRouter>
        <Header style={{ backgroundColor: 'white' }}>
          <Menu mode='horizontal' >

            <Menu.Item><Link to='/'> Home</Link> </Menu.Item>
            <Menu.Item><Link to='/about'>About</Link> </Menu.Item>
            <Menu.Item><Link to='contact'>Contact Us</Link></Menu.Item>

          </Menu>
        </Header>
        <Content>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />


          </Routes>



        </Content>
      </BrowserRouter>

    </Layout>

  )

}

export default App;

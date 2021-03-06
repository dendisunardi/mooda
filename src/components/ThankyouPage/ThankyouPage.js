import React, { Component } from 'react'
import { Link } from 'react-router'
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import './ThankyouPage.scss'

class ThankyouPage extends Component {
  SocialShare = () => {
    return (
      <ul className='social-share'>
        <li> FB </li>
      </ul>
    )
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className='hero thankyou-page is-bold'>
          <div className='hero-body'>
            <h1 className='title '> Terima Kasih </h1>
            <h2 className='subtitle'> Telah menjadi bagian dari generasi Mooda</h2>
            <Link to='/' className='button is-light'> Kembali ke Home </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ThankyouPage

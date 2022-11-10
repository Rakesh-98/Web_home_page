import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.fcontainer}>
          <div className={styles.row1}>
            <div>
              <Image src='/logo.jpg' width={100} height={80}></Image>
            </div>
            <div>
              <Image src='/facebook.png' width={30} height={30}></Image>
            </div>
            <div>
              <Image src='/youtube.png' width={30} height={30}></Image>
            </div>
            <div>
              <Image src='/twitter.png' width={30} height={30}></Image>
            </div>
            <div>
              <Image src='/instagram.png' width={30} height={30}></Image>
            </div>
            <div>
              <Image src='/linkedin.png' width={30} height={30}></Image>
            </div>
            <div>
              info@digitalacademy360.com
            </div>
            <div>
              +91 7353 515 515
            </div>
          </div>

          <div className={styles.row2}>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Hire From Us</li>
                <li>Success Stories</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4>Our Centers</h4>
              <ul>
                <li>Bangalore</li>
                <li>Chennai</li>
                <li>Mysore</li>
                <li>Coimbatore</li>
                <li>Coimbatore</li>
              </ul>
            </div>
            <div>
              <h4>Our Programs</h4>
              <ul>
                <li>PG Programme in Digital Marketing with AI</li>
                <li>PG Programme in UI/UX & Design Thinking</li>
                <li>PG Programme in Full Stack Development</li>
                <li>Skill Diploma in Digital Marketing Program</li>
                <li>Skill Diploma in Content Writing</li>
              </ul>
            </div>

            <div className={styles.form}>
              <h2>Sign up to our newsletter</h2>
              <p>Keep yourself up to date with the latest hiring news and course updates.</p>
              <input type="text" placeholder='Email Address*' />
              <button>SUBMIT</button>
            </div>
          </div>

          <div className={styles.term}>
            <div>
              <h4 >© Copyright 2021, Digital Academy 360, All Rights Reserved</h4>
            </div>
            <div className={styles.condition}>
              <h4 >Privacy Policy</h4>
              <h4 >Terms & Conditions</h4>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Footer
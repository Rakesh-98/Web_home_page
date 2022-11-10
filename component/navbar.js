import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.menu}>
            <div>
                <ul className={styles.logo}>
                   <Link href='/'> <li className={styles.logoImg}><Image src='/logo.jpg' width={70} height={60}></Image></li></Link>
                    <li className={styles.logoCourse}>Courses</li>
                </ul>
            </div>
            <div>
                <ul className={styles.menuItem}>
                   <Link href='/hireFormUs'> <li className={styles.space}>Hire Form Us</li></Link>
                   <Link href='/sucessStories'> <li className={styles.space}>Success Stories</li></Link>
                    <li className={styles.space}>Know Us</li>
                    <li className={styles.space}>Centers</li>
                    <li className={styles.contact}>+91 98976 54367</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
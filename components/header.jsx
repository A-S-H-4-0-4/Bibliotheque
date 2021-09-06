// header component

// random data
const currencies = ["inr", "dollar", "aed", "euro", "pound", "all", "afn", "awg", "azn", "Bam", "bbd", "bdt", "bgn", "bhd", "bif", "bmd", "bnd"]
// icons

const cartimg = '/icons/shopping-cart.png'
const search = '/icons/search.png'
const login = '/icons/login.png'
const home = '/icons/home-img.png'
// hooks
import React from "react";


import Link from "next/link";


// styles
import HS from "../styles/components/header.module.css";
// logo
const logo = '/logo/logo.png'

export const Header = () => {

    const [currency, setCurrency] = React.useState("")

    const currencyOptions = (value, index) => {

        return <option key={index} value={value}>{value.toUpperCase()}</option>

    }

    return (
        <div className={HS.header}>
            <div className={HS.upperHeader}>
                <img src={logo} className={HS.logo} />
                <div className={HS.search}>
                    <input placeholder='Search by Title, Author, Publisher or ISBN' />
                    <img src={search} />
                </div>
                <div className={HS.login}>
                    <img src={login} />
                    <div className={HS.Login} >Login</div>
                    <div className={HS.signup}>Signup</div>



                </div>
                <div className={HS.cart}>

                    <img src={cartimg} />
                    <div>
                        0
                    </div>

                </div>
            </div>
            <div className={HS.bottomHeader}>
                <div className={HS.bottomHeaderNav}>
                    <Link href="home">
                        <div>
                            <img src={home} />
                        </div>
                    </Link>
                    <div>Books</div>
                    <Link href="newarrivals">
                        <div>
                            New Arrivals
                        </div>
                    </Link>
                    <Link href=" PreOrder">
                        <div>
                            Pre-Order
                        </div>
                    </Link>
                    <Link href=" BestSeller">
                        <div>
                            BestSeller
                        </div>
                    </Link>
                    <Link href="TextBook">
                        <div>
                            TextBook
                        </div>
                    </Link>
                    <Link href="AwardWinners">
                        <div>
                            Award Winners
                        </div>
                    </Link>
                    <div>Featured Authors</div>
                </div>
                <div className={HS.currency}>
                    <p>Currency</p>
                    <select name="" id="" value={currency} onChange={(event) => { setCurrency(event.target.value) }}>
                        {currencies.map(currencyOptions)}
                    </select>
                </div>
            </div>
        </div>
    )
}
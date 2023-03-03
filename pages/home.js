// home page

// styles
import HS from "../styles/pages/home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// carousel
import Carousel from 'react-material-ui-carousel'
import Slider from "react-slick";

// next image
import Image  from "next/image";


// components
import { Header } from "../components/header";
import { CategoryBox } from "../components/CategoryBox"
import { BookBox } from "../components/BookBox"
import { AuthorBox } from "../components/AuthorBox"
import Footer from "../components/FooterBox"
import React, { Component } from "react";

// images
const bannerimg1 = "/images/bannerimg1.jpg"
const bannerImage2 = "/images/bannerimg.png"
const bannerimg3 = "/images/bannerimg3.png"
const bannerimg4 = "/images/bannerimg4.png"
const bannerimg5 = "/images/bannerimg5.png"

 class Home extends Component {




    render() {
        const settings = {
            dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            // slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            cssEase: "linear",
            pauseOnDotsHover: true,
        };
        return (
            <div className={HS.homeScreen}>

                {/* header */}
                <Header />


                {/* body */}
                <div className={HS.book_container}>
                    <div className={HS.leftbar}>
                        <div className={HS.Cbox}>
                            <CategoryBox />
                        </div>
                    </div>

                    <div className={HS.book_content} >
                        <div className={HS.book_banner}>
                            <Carousel className={HS.carousel} indicators={false}>
                                <Image src={bannerimg1}/>
                                <Image src={bannerimg2}/>
                                <Image src={bannerimg3}/>
                                <Image src={bannerimg4}/>
                                <Image src={bannerimg5}/>

                            </Carousel>
                        </div>


                        <div className={HS.book_mains}>
                            <div className={HS.author}>
                                <div className={HS.heading}>
                                    <div className={HS.HBox}>
                                        <div className={HS.h1}>Best Seller</div>
                                        <div className={HS.h2}>New Arrivals</div>
                                        <div className={HS.h3}>Pre Orders</div>
                                    </div>
                                    <div className={HS.SM}>
                                        See All
                                    </div>
                                </div>
                                <div className={HS.AC}>

                                    <Slider {...settings} >
                                        <div>
                                            <BookBox />
                                        </div>
                                        <div>
                                            <BookBox />
                                        </div>
                                        <div>
                                            <BookBox />
                                        </div>
                                        <div>
                                            <BookBox />
                                        </div>

                                    </Slider>

                                </div>
                            </div>
                            <div className={HS.Bestseller}>
                                <div className={HS.heading}>
                                    <div className={HS.HB}>
                                        <div className={HS.NTB}>NewYork Times Bestseller</div>
                                        <div className={HS.AW}>Award Winner</div>
                                        <div className={HS.SP}>Staff Picks</div>
                                    </div>
                                    <div className={HS.SM1}>See All</div>
                                </div>

                                <div className={HS.AC}>

                                    <Slider {...settings} >
                                        <div>
                                            <BookBox />
                                        </div>
                                        <div>
                                            <BookBox />
                                        </div>
                                        <div>
                                            <BookBox />
                                        </div>
                                        <div>
                                            <BookBox />
                                        </div>
                                    </Slider>

                                </div>
                            </div>
                            <div className={HS.BoxSet}>
                                <div className={HS.heading}>
                                    <div className={HS.HBox}>
                                        <div className={HS.Bheading}>Box Set</div>

                                    </div>
                                    <div className={HS.SM}>
                                        See All
                                    </div>
                                </div>
                                <div className={HS.AC}>

                                    <Slider {...settings} >
                                        <div>
                                            <BookBox />
                                        </div>
                                        <div>
                                            <BookBox />
                                        </div>
                                        <div>
                                            <BookBox />
                                        </div>
                                        <div>
                                            <BookBox />
                                        </div>
                                    </Slider>

                                </div>

                            </div>

                            <div className={HS.Author}>
                                <div className={HS.heading}>
                                    <div className={HS.HBox}>
                                        <div className={HS.Aheading}>Featured Author</div>
                                    </div>
                                    <div className={HS.SM}>
                                        See All
                                    </div>


                                </div>

                                <div className={HS.AC}>

                                    <Slider {...settings} >
                                        <div>
                                            <AuthorBox />
                                        </div>

                                        <div>
                                            <AuthorBox />
                                        </div>
                                        <div>
                                            <AuthorBox />
                                        </div>
                                        <div>
                                            <AuthorBox />
                                        </div>
                                    </Slider>

                                </div>
                            </div>
                        </div>


                    </div>




                </div>






                {/* footer */}
                <div className={HS.footer}>

                    <Footer />
                </div>
            </div>



        );
    }

}


export default Home
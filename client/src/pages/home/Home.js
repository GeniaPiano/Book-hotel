import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {HomeContainer, HomeTitle} from "./HomeElements";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";


const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <HomeContainer>
                <Featured />
                <HomeTitle> Browse by property type</HomeTitle>
                <PropertyList />
                <HomeTitle> Homes guests love</HomeTitle>
                <FeaturedProperties/>
                <MailList />
                <Footer />
            </HomeContainer>
        </>
    )
}

export default Home;
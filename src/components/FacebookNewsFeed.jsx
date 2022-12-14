import React from 'react'
import styled from 'styled-components'
import appb from '../feedImg/apple_body.jpg'
import cutel from '../feedImg/cute_left.jpg'
import smileb from '../feedImg/smile_body.jpg'
import sweetl from '../feedImg/sweet_left.jpg'

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
`
const FeedBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding: 20px;
`
const SectionTitle = styled.h2`
    font-weight: bold;
    font-size:30px;
    margin-left: 20px;
    color: #2b57b8;
`

const FacebookNewsFeed = () => {
    return (
        <Container style={{padding: '0px 60px'}}>
            <SectionTitle>Facebook Newsfeed</SectionTitle>
            <FeedBox>
            <div className="card" style={{width: '25%'}}>
                <div style={{maxHeight: '200px', overflow: 'hidden'}}>
                    <img src={appb} class="card-img-top" alt="..."></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Apple</h5>
                    <p className="card-text">This design was launched in 2018 in the market. Available for both Male and Female Pattern differently</p>
                    <a href="https://www.facebook.com/FamilyHospitalUniform/" className="btn btn-primary">See In Facebook</a>
                </div>
            </div>
            <div className="card" style={{width: '25%', marginLeft:'20px'}}>
                <div style={{maxHeight: '200px', overflow: 'hidden'}}>
                    <img src={cutel} class="card-img-top" alt="..."></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Cute</h5>
                    <p className="card-text">This design was launched in 2018 in the market. Available for both Male and Female Pattern differently</p>
                    <a href="https://www.facebook.com/FamilyHospitalUniform/" className="btn btn-primary">See In Facebook</a>
                </div>
            </div>
            <div className="card" style={{width: '25%', marginLeft:'20px'}}>
                <div style={{maxHeight: '200px', overflow: 'hidden'}}>
                    <img src={smileb} class="card-img-top" alt="..."></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Smile</h5>
                    <p className="card-text">This design was launched in 2018 in the market. Available for both Male and Female Pattern differently</p>
                    <a href="https://www.facebook.com/FamilyHospitalUniform/" className="btn btn-primary">See In Facebook</a>
                </div>
            </div>
            <div className="card" style={{width: '25%', marginLeft:'20px'}}>
                <div style={{maxHeight: '200px', overflow: 'hidden'}}>
                    <img src={sweetl} class="card-img-top" alt="..."></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Sweet</h5>
                    <p className="card-text">This design was launched in 2018 in the market. Available for both Male and Female Pattern differently</p>
                    <a href="https://www.facebook.com/FamilyHospitalUniform/" className="btn btn-primary">See In Facebook</a>
                </div>
            </div>
            </FeedBox>
        </Container>
    )
}

export default FacebookNewsFeed;
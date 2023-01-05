import React from 'react'
import styled from 'styled-components'
import family from '../feedImg/family.jpg'
import brandedms from '../feedImg/brandedms.jpg'
import wcoat from '../feedImg/wcoat.jpg'
import shoe from '../feedImg/shoe.jpg'

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
        <Container>
            <SectionTitle>Facebook Newsfeed</SectionTitle>
            <FeedBox>
            <div className="card" style={{width: '25%'}}>
                <div style={{maxHeight: '200px',minHeight: '200px', overflow: 'hidden'}}>
                    <img src={family} class="card-img-top" alt="..."></img>
                </div>
                <div className="card-body" style={{position: 'relative', minHeight: '230px'}}>
                    <h5 className="card-title">Family</h5>
                    <p className="card-text">ဒီဇိုင်းနာမည်လေးတွေတောင် ဒီလောက်လှနေတာ မင်မင် Customer လေးတွေသာ ဝတ်လိုက်မယ်ဆို ဘယ်လောက်တောင် လိုက်ဖက်ပြီးလှနေမလဲနော်။</p>
                    <a href="https://www.facebook.com/471460249710870/posts/pfbid02qnVFkfXjWAcshTxKGM5Ghg8aNpme4uMZ2hHDkZfQtsyzKo2MvDJeYFGQ1ZhqxGeRl/?mibextid=dDOYBg" className="btn btn-primary" style={{position: "absolute", bottom: "15px"}}>See In Facebook</a>
                </div>
            </div>
            <div className="card" style={{width: '25%', marginLeft:'20px'}}>
                <div style={{maxHeight: '200px', overflow: 'hidden'}}>
                    <img src={brandedms} class="card-img-top" alt="..."></img>
                </div>
                <div className="card-body" style={{position: 'relative'}}>
                    <h5 className="card-title">Branded Medical Scrub</h5>
                    <p className="card-text">နိုင်ငံတကာအဆင့်မှီ အရည်အသွေးမြင့် Medical Scrub ကို ပြည်တွင်းမှာပဲ အလွယ်တကူ ဝယ်လို့ရနေပါပြီ၊၊</p>
                    <a href="https://www.facebook.com/471460249710870/posts/pfbid02y1XXaJSyf19iFi4UrgaCENjxH2QG1Tb3SJzSyj5rdwzk1DUptfxHpK3ZVue6Y8unl/?mibextid=dDOYBg" className="btn btn-primary" style={{position: "absolute", bottom: "15px"}}>See In Facebook</a>
                </div>
            </div>
            <div className="card" style={{width: '25%', marginLeft:'20px'}}>
                <div style={{maxHeight: '200px',minHeight: '200px', overflow: 'hidden'}}>
                    <img src={wcoat} class="card-img-top" alt="..." style={{minHeight: '200px'}}></img>
                </div>
                <div className="card-body" style={{position: 'relative'}}>
                    <h5 className="card-title">Branded Doctor Coat</h5>
                    <p className="card-text">White Coat ထဲက International Premium Coat ကိုသာ ၀ယ်ယူချင်ပါတယ်ဆိုရင်တော့ Medical_World_Showroom ကို လာရောက်လေ့လာဖို့ ဖိတ်ခေါ်ချင်ပါတယ်၊၊</p>
                    <a href="https://www.facebook.com/471460249710870/posts/pfbid0W8E6o4t7fdJ1J5f8iFHLThe1M2hrnFNyygKuuqKyorTUo8hFR3BR8zG6NnLe4E99l/?mibextid=dDOYBg" className="btn btn-primary" style={{position: "absolute", bottom: "15px"}}>See In Facebook</a>
                </div>
            </div>
            <div className="card" style={{width: '25%', marginLeft:'20px'}}>
                <div style={{maxHeight: '200px', overflow: 'hidden'}}>
                    <img src={shoe} class="card-img-top" alt="..."></img>
                </div>
                <div className="card-body" style={{position: 'relative'}}>
                    <h5 className="card-title">Family Medical Shoes</h5>
                    <p className="card-text"> Family Medical Shoes လေးနဲ့ဆို ခြေလှမ်းတိုင်းကပေါ့ပါးပြီး ကြာလှပါချည်ရဲ့ဆိုတဲ့ ဂျူတီချိန်တောင် ဘယ်လိုကုန်သွားလဲ သိမှာမဟုတ်ဘူးနော်။</p>
                    <a href="https://www.facebook.com/471460249710870/posts/pfbid02eN8R3V4cwWfCXmbuvRHkNrZSi6dyBLNomQqKnGGxrcizK6RkZwYKoBkSG7iQScsCl/?mibextid=dDOYBg" className="btn btn-primary" style={{position: "absolute", bottom: "15px"}}>See In Facebook</a>
                </div>
            </div>
            </FeedBox>
        </Container>
    )
}

export default FacebookNewsFeed;
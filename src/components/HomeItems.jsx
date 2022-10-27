import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import { mobile } from "../responsive";
import axios from 'axios';
import Item from './Item';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`

const SectionTitle = styled.h2`
    text-align: center;
    font-weight: bold;
    font-size:30px;
    margin-left: 20px;
    ${mobile({ fontSize: "14px" })}
`

const HomeItems = ({ title, url }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        // const res = await axios.get("http://medicalworldinvpos.kwintechnologykw09.com/api/" + url,);
        const res = await axios.get("http://medicalworldinvpos.kwintechnologykw09.com/api/" + url,);
        console.log(res.data);
        setItems(res.data);
      } catch (err) { }
    };
    getItems();
  },[items]);

  return (
    <MainContainer>
      <SectionTitle>{title}</SectionTitle>
      <Container>
        {items.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </Container>
    </MainContainer>

  )
}

export default HomeItems
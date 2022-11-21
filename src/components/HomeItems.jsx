import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import { mobile } from "../responsive";
import axios from 'axios';
import Item from './Item';
import { useSelector} from 'react-redux'

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
    font-weight: bold;
    font-size:30px;
    margin-left: 20px;
    color: #2b57b8;
    ${mobile({ fontSize: "14px" })}
`

const HomeItems = ({ title, url }) => {

  const [items, setItems] = useState([]);
  const url1= useSelector(state => state.user.url);

  useEffect(() => {
    const getItems = async () => {
      try {
        // const res = await axios.get("http://localhost:8000/api/" + url,);
        const res = await axios.get(url1+"/api/" + url,);
        console.log(res.data);
        setItems(res.data);
      } catch (err) { }
    };
    getItems();
  },[]);

  return (
    <MainContainer>
      <SectionTitle>{title}</SectionTitle>
      <Container>
        {items.map(item => (
          <Item item={item} key={item.id} title={title} />
        ))}
      </Container>
    </MainContainer>

  )
}

export default HomeItems
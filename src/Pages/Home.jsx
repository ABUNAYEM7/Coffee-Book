import React, { useEffect, useState } from "react";
import Info from "../components/reUse/Info";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Banner from '../components/Banner'

const Home = () => {
  const data = useLoaderData()
  const [brewed,setBrewed] = useState([])
  const [iced,setIced] = useState([])
  const [desert,setDesert] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    if(data){
      const brewedCoffee = data.filter(item=> item.category === 'Brewed Coffee')
      const coffees = brewedCoffee.slice(0,6)
      setBrewed(coffees)
      const icedCoffee = data.filter(item=> item.category === 'Iced Coffee')
      setIced(icedCoffee)
      const desertCoffee = data.filter(item=> item.category === 'Dessert Coffee')
      setDesert(desertCoffee)
    }
  },[data])
  return (
    <div>
      <Banner/>
      <div>
      <Info
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      />
      </div>
      <section>
        <Tabs>
          <TabList>
            <Tab><NavLink className='px-5 md:px-10'>Brewed Coffee</NavLink></Tab>
            <Tab><NavLink className='px-5 md:px-10'>Iced Coffee</NavLink></Tab>
            <Tab><NavLink className='px-5 md:px-10'>Desert Coffee</NavLink></Tab>
          </TabList>

          <TabPanel>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-6">
           {
              brewed.map(coffee=><Card key={coffee.id} coffee ={coffee}></Card>)
            }
           </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-6">
           {
              iced.map(coffee=><Card key={coffee.id} coffee ={coffee}></Card>)
            }
           </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-6">
           {
              desert.map(coffee=><Card key={coffee.id} coffee ={coffee}></Card>)
            }
           </div>
          </TabPanel>
        </Tabs>
      </section>
      <div className="my-4">
          <button
          onClick={()=> navigate('/Coffee')}
           className="btn">View All</button>
      </div>
    </div>
  );
};

export default Home;

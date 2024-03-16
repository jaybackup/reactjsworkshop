import React, { useEffect, useState } from 'react';
import CardCompo from './CustomCardCompo.jsx';
import DynamicProductsFromAPI from './DynamicProductsFromAPI.jsx';

const MainBody = () => {
    // useEffect(setup, dependencies?)
    // useEffect()
    const [ProdList,setList ]= useState()
    useEffect(  ()=>{
        console.log("called use effect");
        // let ProdData =await  fetchData()
    //   fetch("https://dummyjson.com/products").then((res)=>res.json())
    //   fetch("https://dummyjson.com/products").then((res)=>{ console.log(res); })
    //   fetch("https://dummyjson.com/products").then((res)=>{ return res.json() }).then((result)=>{
    //     console.log(result);
    //   })
    fetchData()
        // console.log(ProdData);
        // return (()=>{ console.log("called"); })
    },[])
    const fetchData = async ()=>{
        let ProdData =await fetch("https://dummyjson.com/products")
        ProdData =await ProdData.json()
        // console.log(ProdData.products);
        let Something = ProdData.products.map((data,anything)=>{
            console.log("inside map",data,anything);
            return <li key={anything}>Testing</li>
        })
        setList(Something)
        // console.log("output",Something);
    }

    // const fetchData = async ()=>{
    //     // await fetch("https://dummyjson.com/products")
    //     // let ProdData =await fetch("https://dummyjson.com/products").then((res)=>res.json()).then((result)=>{
    //     //     console.log(result);
    //     //     console.log(result[0]);
    
    //     //     <CardCompo ProdImg="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" ProdTitle = "iphone 14 pro Max"></CardCompo>
    
    //     //   })
    //     // let ProdData =await fetch("https://dummyjson.com/products").then((data)=>{
    //     //     console.log(data);
    //     //     return data.json()
    //     // })
    //     let ProdData =await fetch("https://dummyjson.com/products")
    //     ProdData =await ProdData.json()
    //     console.log(ProdData); //object
    //     console.log(ProdData.products);
    //     // console.log(ProdData[0]);
    //     // ProdData.
    //     // array.forEach(element => {
            
    //     // });

    //     // let DataRes = ""
    //     // ProdData.products.forEach(element => {
    //     //     // console.log(element.title);
    //     //     DataRes += "test"
    //     // });
    //     // console.log(DataRes);
    //     // setList(element.title)
    //     let FecthProdData = ProdData.products.map((res)=>{
    //         // console.log("inside map",res);
    //         return <li>checking</li>
    //     })
    //     console.log("Outside Map",FecthProdData);
    //     setList(FecthProdData)
    // }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4"> <CardCompo ProdImg="https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg" ProdTitle = "iphone 14"/> </div>
                    <div className="col-4"> <CardCompo ProdImg="https://m.media-amazon.com/images/I/41lQuD3zXhL._SY445_SX342_QL70_FMwebp_.jpg" ProdTitle = "iphone 14 pro"></CardCompo> </div>
                    <div className="col-4"> <CardCompo ProdImg="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg" ProdTitle = "iphone 14 pro Max"></CardCompo> </div>
                    <div className="col-4"> <CardCompo ProdImg="https://m.media-amazon.com/images/I/81CgtwSII3L._SX679_.jpg" ProdTitle = "iphone 14 pro pro maxxxx"></CardCompo> </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col"> <h3>All Products</h3>  </div>
                </div>
                <div className="row">
                    <div className="col-4">
                     {/* product list: {ProdList} */}
                     {/* product list: <ol> {Something} </ol> */}
                     product list: <ol> {ProdList} </ol>
                         <DynamicProductsFromAPI></DynamicProductsFromAPI> </div>
                </div>
            </div>
        </div>
    );
};

export default MainBody;
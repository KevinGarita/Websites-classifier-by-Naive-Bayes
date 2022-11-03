import React, { useEffect, useState } from "react";
import { ColumnCharts } from "../components/ColumnCharts";

import { FormComponent } from "../components/FormComponent";
import "../css/Link.css";



export const LinkClassifierPage = () => {

  const [dataWeb, setdataWeb] = useState({})

  const [unratedCount, setunratedCount] = useState(0)
  const [newsCount, setnewsCount] = useState(0)
  const [EntertainmentCount, setEntertainmentCount] = useState(0)
  const [CommercialCount, setCommercialCount] = useState(0)
  
  const [link, setLink] = useState("");

  const onSearchLink = (value) => {
    setLink(value);
  };
  
  const labels = ["Unrated", "News", "Entertainment","Commercial"]
  const links  = [unratedCount,newsCount,EntertainmentCount,CommercialCount]

  useEffect(() => {
    const linkData =dataWeb.infoLink
    
    console.log(linkData)

    if (linkData) {
      const totalUnrated = linkData.details.filter(element =>element.category==="Unrated").reduce((prevValue,currentValue)=>prevValue+currentValue.count,0)
      const totalNews  = linkData.details.filter(element =>element.category==="News").reduce((prevValue,currentValue)=>prevValue+currentValue.count,0)
      const totalEntertaiment  = linkData.details.filter(element =>element.category==="Entertainment").reduce((prevValue,currentValue)=>prevValue+currentValue.count,0)
      const totalCommercial = linkData.details.filter(element =>element.category==="Commercial").reduce((prevValue,currentValue)=>prevValue+currentValue.count,0)
      
      setunratedCount(totalUnrated)
      setnewsCount(totalNews)
      setEntertainmentCount(totalEntertaiment)
      setCommercialCount(totalCommercial)
    }
    
  }, [dataWeb])
  

  const loadDataWeb = async () => {

    const response = await fetch("http://192.168.1.117:8080/link", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({"link": link}) // body data type must match "Content-Type" 
    });
    const dataLink = await response.json();

    console.log(dataLink)

    setdataWeb(dataLink)
  };

  useEffect(() => {
    loadDataWeb();
  }, [link]);


  const datalinks = {labels,links,dataWeb}


  return (
    <div className="flex-container-2">

      <FormComponent onSearchLink={onSearchLink} />

      <div className="colum-chart">
          <ColumnCharts datalinks={datalinks} show="word" link={link} />
      </div>
    
    </div>
  );
};

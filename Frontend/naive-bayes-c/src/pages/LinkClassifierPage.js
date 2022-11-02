import React, { useEffect, useState } from "react";
import { ColumnCharts } from "../components/ColumnCharts";

import { FormComponent } from "../components/FormComponent";
import "../css/Link.css";
import  dataWeb from "../helpers/Datos_para_web.json";

export const LinkClassifierPage = () => {


  const [unratedCount, setunratedCount] = useState(0)
  const [newsCount, setnewsCount] = useState(0)
  const [EntertainmentCount, setEntertainmentCount] = useState(0)
  const [CommercialCount, setCommercialCount] = useState(0)
  

  console.log(dataWeb)
  
  const [link, setLink] = useState("");

  const onSearchLink = (value) => {
    setLink(value);
  };
  
  const labels = ["Unrated", "News", "Entertainment","Commercial"]
  const links  = [unratedCount,newsCount,EntertainmentCount,CommercialCount]

  useEffect(() => {
    const linkData =dataWeb.listAnalyzedPages.find(element =>element.link===link)
    
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
    
  }, [link])
  

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

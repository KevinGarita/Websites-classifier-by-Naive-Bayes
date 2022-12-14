import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ColumnCharts } from "../components/ColumnCharts";
import { PieChart } from "../components/PieChart";
import "../css/Classifier.css";

export const ClassifierPage = () => {

  const [dataWeb, setdataWeb] = useState({})

  const loadDataWeb = async () => {
    const response = await fetch("http://192.168.1.117:8080/list-links");
    const data = await response.json();
    setdataWeb(data)
    console.log(data)
  };

  useEffect(() => {
    loadDataWeb();
  }, []);

  const labels = ["Unrated", "News", "Entertainment","Commercial"]

  const totalUnrated = dataWeb.listAnalyzedPages?.filter(element =>element.classification==="Unrated")?.length
  const totalNews  = dataWeb.listAnalyzedPages?.filter(element =>element.classification==="News")?.length
  const totalEntertaiment  = dataWeb.listAnalyzedPages?.filter(element =>element.classification==="Entertainment")?.length
  const totalCommercial = dataWeb.listAnalyzedPages?.filter(element =>element.classification==="Commercial")?.length

  const links  = [totalUnrated, totalNews, totalEntertaiment,totalCommercial]



  
  const datalinks = {labels,links,dataWeb}


  const labelsPie = ["Links Consultados","Links Caídos"]
  
  const linksPie  = [dataWeb.listAnalyzedPages?.length, dataWeb.listConnectionFail?.length]

  const datalinksPie = {labelsPie,linksPie}

  return (
    <div className="flex-container-2">
      <div className="flex-container">
        <div>
          <NavLink to="/LinkClassifier">
            <button className="btn-2">Link Classifier</button>
          </NavLink>
        </div>
      </div>
      <div className="flex-container">
        <div className="pie-chart">
          <PieChart datalinksPie={datalinksPie}/>
        </div>
        <div className="colum-chart">
          <ColumnCharts datalinks={datalinks} show="link"  />
        </div>
      </div>
    </div>
  );
};

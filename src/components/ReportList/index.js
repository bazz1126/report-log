import React, { Component } from "react";
import ReportDataService from "../Service/service.js";

import * as ROUTES from '../../constants/routes';

import Report from "../Report/index.js";

export default class ReportList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveReport = this.setActiveReport.bind(this);
    this.removeAllReports = this.removeAllReports.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      reports: [],
      currentReport: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    ReportDataService.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount() {
    ReportDataService.getAll().off("value", this.onDataChange);
  }

  onDataChange(items) {
    let reports = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      reports.push({
        key: key,
        website: data.website,
        performance: data.performance,
        accessibility: data.accessibility,
        best_practice: data.best_practice,
        seo: data.seo,
        pwa: data.pwa,
      });
    });

    this.setState({
      reports: reports,
    });
  }

  refreshList() {
    this.setState({
      currentReport: null,
      currentIndex: -1,
    });
  }

  setActiveReport(report, index) {
    this.setState({
      currentReport: report,
      currentIndex: index,
    });
  }

  removeAllReports() {
    ReportDataService.deleteAll()
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { reports, currentReport, currentIndex } = this.state;

   return (
     <div className="list row">
       <div className="col-md-6">
         <h4>Report List</h4>

         <ul className="list-group">
           {reports &&
             reports.map((report, index) => (
               <li
                 className={
                   "list-group-item " +
                   (index === currentIndex ? "active" : "")
                 }
                 onClick={() => this.setActiveReport(report, index)}
                 key={index}
               >
                 {report.title}
               </li>
             ))}
         </ul>

         <button
           className="m-3 btn btn-sm btn-danger"
           onClick={this.removeAllReports}
         >
           Remove All
         </button>
       </div>
       <div className="col-md-6">
         {currentReport ? (
           <Report
             report={currentReport}
             refreshList={this.refreshList}
           />
         ) : (
           <div>
             <br />
             <p>Please click on a Report...</p>
           </div>
         )}
       </div>
     </div>
   );
   }
}

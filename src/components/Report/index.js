import React, { Component } from "react";
import ReportDataService from "../Service/service.js";

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangePerformance = this.onChangePerformance.bind(this);
    this.onChangeAccessibility = this.onChangeAccessibility.bind(this);
    this.onChangeBestPractice = this.onChangeBestPractice.bind(this);
    this.onChangeSEO = this.onChangeSEO.bind(this);
    this.onChangePWA = this.onChangePWA.bind(this);
    this.updateReport = this.updateReport.bind(this);
    this.deleteReport = this.deleteReport.bind(this);

    this.state = {
      currentReport: {
        website: "",
        performance: "",
        accessibility: "",
        best_practice: "",
        seo: "",
        pwa: "",
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { report } = nextProps;
    if (prevState.currentReport.key !== report.key) {
      return {
        currentReport: report,
        message: ""
      };
    }

    return prevState.currentReport;
  }

  componentDidMount() {
    this.setState({
      currentReport: this.props.report,
    });
  }

  onChangeWebsite(e) {
    const website = e.target.value;

    this.setState(function (prevState) {
      return {
        currentReport: {
          ...prevState.currentReport,
          website: website,
        },
      };
    });
  }

  onChangePerformance(e) {
    const performance = e.target.value;

    this.setState((prevState) => ({
      currentReport: {
        ...prevState.currentReport,
        performance: performance,
      },
    }));
  }

  onChangeAccessibility(e) {
    const accessibility = e.target.value;

    this.setState((prevState) => ({
      currentReport: {
        ...prevState.currentReport,
        accessibility: accessibility,
      },
    }));
  }

  onChangeBestPractice(e) {
    const best_practice = e.target.value;

    this.setState((prevState) => ({
      currentReport: {
        ...prevState.currentReport,
        best_practice: best_practice,
      },
    }));
  }

  onChangeSEO(e) {
    const seo = e.target.value;

    this.setState((prevState) => ({
      currentReport: {
        ...prevState.currentReport,
        seo: seo,
      },
    }));
  }

  onChangePWA(e) {
    const pwa = e.target.value;

    this.setState((prevState) => ({
      currentReport: {
        ...prevState.currentReport,
        pwa: pwa,
      },
    }));
  }



  updateReport() {
    const data = {
      website: this.state.currentReport.website,
      performance: this.state.currentReport.performance,
      accessibility: this.state.currentReport.accessibility,
      best_practice: this.state.currentReport.best_practice,
      seo: this.state.currentReport.seo,
      pwa: this.state.currentReport.pwa,
    };

    ReportDataService.update(this.state.currentReport.key, data)
      .then(() => {
        this.setState({
          message: "The report was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteReport() {
    ReportDataService.delete(this.state.currentReport.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentReport } = this.state;

    return (
      <div>
        <h4>Report</h4>
        {currentReport ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  className="form-control"
                  id="websi"
                  value={currentReport.website}
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="form-group">
                <label htmlFor="performance">Performance</label>
                <input
                  type="number"
                  className="form-control"
                  id="description"
                  value={currentReport.performance}
                  onChange={this.onChangePerformance}
                />
              </div>

              <div className="form-group">
                <label htmlFor="accessibility">Accessibility</label>
                <input
                  type="number"
                  className="form-control"
                  id="accessibility"
                  value={currentReport.accessibility}
                  onChange={this.onChangeAccessibility}
                />
              </div>

              <div className="form-group">
                <label htmlFor="best_practice">Best Practice</label>
                <input
                  type="number"
                  className="form-control"
                  id="best_practice"
                  value={currentReport.best_practice}
                  onChange={this.onChangeBestPractice}
                />
              </div>

              <div className="form-group">
                <label htmlFor="seo">SEO</label>
                <input
                  type="number"
                  className="form-control"
                  id="seo"
                  value={currentReport.seo}
                  onChange={this.onChangeSEO}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pwa">PWA</label>
                <input
                  type="number"
                  className="form-control"
                  id="pwa"
                  value={currentReport.pwa}
                  onChange={this.onChangePWA}
                />
              </div>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
   }
}

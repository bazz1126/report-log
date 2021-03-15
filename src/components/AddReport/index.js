import React, { Component } from "react";
import ReportDataService from "../Service/service.js";
import * as ROUTES from '../../constants/routes';

export default class AddReport extends Component {
  constructor(props) {
    super(props);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangePerformance = this.onChangePerformance.bind(this);
    this.onChangeAccessibility = this.onChangeAccessibility.bind(this);
    this.onChangeBestPractice = this.onChangeBestPractice.bind(this);
    this.onChangeSEO = this.onChangeSEO.bind(this);
    this.onChangePWA = this.onChangePWA.bind(this);
    this.saveReport = this.saveReport.bind(this);
    this.newReport = this.newReport.bind(this);

    this.state = {
      website: "",
      performance: "",
      accessibility: "",
      best_practice: "",
      seo: "",
      pwa: "",

      submitted: false,
    };
  }

  onChangeWebsite(e) {
    this.setState({
      website: e.target.value,
    });
  }

  onChangeAccessibility(e) {
    this.setState({
      accessibility: e.target.value,
    });
  }

  onChangeBestPractice(e) {
    this.setState({
      best_practice: e.target.value,
    });
  }

  onChangeSEO(e) {
    this.setState({
      seo: e.target.value,
    });
  }

  onChangePWA(e) {
    this.setState({
      pwa: e.target.value,
    });
  }

  saveReport() {
    let data = {
      website: this.state.website,
      accessibility: this.state.accessibility,
      best_practice: this.state.best_practice,
      seo: this.state.seo,
      pwa: this.state.pwa,
    };

    ReportDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newReport() {
    this.setState({
      website: "",
      performance: "",
      accessibility: "",
      best_practice: "",
      seo: "",
      pwa: "",

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newReport}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="Website">Website</label>
              <input
                type="text"
                className="form-control"
                id="website"
                required
                value={this.state.website}
                onChange={this.onChangeWebsite}
                name="website"
              />
            </div>

            <div className="form-group">
              <label htmlFor="performance">Performance</label>
              <input
                type="number"
                className="form-control"
                id="accessibility"
                required
                value={this.state.performance}
                onChange={this.onChangePerformance}
                name="performance"
              />
            </div>

            <div className="form-group">
              <label htmlFor="accessibility">Accessibility</label>
              <input
                type="number"
                className="form-control"
                id="accessibility"
                required
                value={this.state.accessibility}
                onChange={this.onChangeAccessibility}
                name="accessibility"
              />
            </div>

            <div className="form-group">
              <label htmlFor="best_practice">Best Practice</label>
              <input
                type="number"
                className="form-control"
                id="best_practice"
                required
                value={this.state.best_practice}
                onChange={this.onChangeBestPractice}
                name="best_practice"
              />
            </div>

            <div className="form-group">
              <label htmlFor="seo">SEO</label>
              <input
                type="number"
                className="form-control"
                id="seo"
                required
                value={this.state.seo}
                onChange={this.onChangeSEO}
                name="seo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwa">PWA</label>
              <input
                type="number"
                className="form-control"
                id="pwa"
                required
                value={this.state.pwa}
                onChange={this.onChangePWA}
                name="pwa"
              />
            </div>

            <button onClick={this.saveReport} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
   }
}

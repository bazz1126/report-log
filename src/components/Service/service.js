import firebase from "../firebase";

const db = firebase.ref("/reports");

class ReportDataService {
  getAll() {
    return db;
  }

  create(report) {
    return db.push(report);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new ReportDataService();

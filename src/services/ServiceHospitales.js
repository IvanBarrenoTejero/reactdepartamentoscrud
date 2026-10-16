import Global from "../Global";
import axios from "axios";

export default class ServiceHospitales {
  async getHospitales() {
    let url = Global.urlApiEjemplo;
    let request = "api/hospitales";
    let response = await axios.get(url + request);
    return response.data;
  }
}

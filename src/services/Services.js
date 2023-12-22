import axios from "axios";

export const ITEMES_BASE_GET_URL = "http://localhost:8080/api/v1/items";

// export const ITEMES_BASE_DELETE_URL = "http://localhost:8080/api/v1/items";

export const ITEMS_BASE_POST_URL = "http://localhost:8080/api/v1/items";

export const IMAGES_BASE_POST_URL = "http://localhost:8080/api/v1/images";

export const IMAGES_BASE_GET_URL = "http://localhost:8080/api/v1/images";

class Services {
  saveItems(data) {
    console.log("data for save :" + JSON.stringify(data) + " and ");
    return axios.post(ITEMS_BASE_POST_URL, data);
  }
  updateItems( id,data) {
    console.log("data for update :" + JSON.stringify(data));
    axios.put(ITEMS_BASE_POST_URL + "/"+id, data);
  }
  deleteItems(id) {
    console.log("data for delete :" + JSON.stringify(id));
    return axios.delete(ITEMES_BASE_GET_URL + "/" + id);
  }
  getItems() {
    return axios.get(ITEMES_BASE_GET_URL);
  }
  getItemById(id) {
    return axios.get(ITEMES_BASE_GET_URL + "/" + id);
  }
  uploadImages(image) {
    return axios.post(IMAGES_BASE_POST_URL, image);
  }
}
export default new Services();

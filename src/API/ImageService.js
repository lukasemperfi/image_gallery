import axios from "axios";

const KEY_PIXABAY = process.env.REACT_APP_KEY_PIXABAY

export default class ImageService {
	static async getAll(filters) {
		const response = await axios.get(`https://pixabay.com/api/?key=${KEY_PIXABAY}`, {
			params: filters
		})
		return response;
	}
}

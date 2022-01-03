import {
	APIHeaders,
	APIProtoHeaders,
	APIHeadersForMultipartFormData,
} from "./requestHeaders";
import LocalDb from "../../localStorage";

export class API {
	static token = null;
	static user = null;

	constructor() {
		API.token = null;
		API.user = null;
		this.setToken();
	}

	setToken() {
		const response = LocalDb.getSessions();
		if (response !== null) {
			API.token = response.token;
			API.user = response.user;
		}
	}

	updateToken(token) {
		API.token = token;
	}

	removeTokens() {
		API.token = null;
		API.user = null;
	}

	resetToken() {
		this.removeTokens();
		this.setToken();
	}

	token() {
		return API.token;
	}

	user() {
		return API.user;
	}

	// normal header
	headers() {
		return { ...APIHeaders };
	}

	// authorized headers json
	authHeaders() {
		return { ...APIHeaders, Authorization: API.token };
	}
	//  proto headers proto
	authProtoHeaders() {
		return { ...APIProtoHeaders, Authorization: API.token };
	}

	// multipart form data
	authHeadersForMultipartFormData() {
		return { ...APIHeadersForMultipartFormData, Authorization: API.token };
	}
}

export default new API();

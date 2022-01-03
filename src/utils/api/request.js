// FOR JSON
function parseJSON(response, callback) {
	if (response.status === 204 || response.status === 205) {
		return null;
	}

	if (response.status === 400) {
		return response
			.json()
			.then((parsedResponse) => {
				if (parsedResponse.error) {
					const error = {
						error: true,
						msg: parsedResponse.msg,
						errorCode: parsedResponse.errorCode,
					};
					return error;
				}
				callback(parsedResponse, null);
			})
			.catch(() => {
				callback(null, "Exception on server");
			});
	}

	if (response.status === 200) {
		return response
			.json()
			.then((parsedResponse) => {
				if (parsedResponse.error) {
					const error = {
						error: true,
						msg: parsedResponse.msg,
						errorCode: parsedResponse.errorCode,
					};
					return error;
				}
				return parsedResponse;
			})
			.catch(() => {
				callback(null, "Exception on server");
			});
	}
	return response.json();
}

async function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	if (response.status === 401) {
	}
	const error = new Error();
	error.response = response;
	if (response.status === 400) {
		return response;
	}
	throw error;
}

// json request
export default function request(url, options) {
	return fetch(url, options)
		.then(checkStatus)
		.then(parseJSON)
		.catch(() => checkStatus());
}

// FOR PROTO
function convertToArrayBuffer(response) {
	if (response.status === 204 || response.status === 205) {
		return null;
	}
	return response.arrayBuffer();
}

const convertToArrayInt = (data) => new Uint8Array(data);

// request proto
export function requestProto(url, options) {
	return fetch(url, options)
		.then(checkStatus)
		.then(convertToArrayBuffer)
		.then(convertToArrayInt);
}

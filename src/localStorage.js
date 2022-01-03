export class LocalDb {
	constructor() {
		this.sessionKey = "sessionName";
	}

	setSession(session, callback) {
		try {
			localStorage.setItem(this.sessionKey, JSON.stringify(session), (error) =>
				callback(error)
			);
			callback(false);
		} catch (error) {
			console.log("Error while setting session.", error);
		}
	}

	getSessions() {
		const itemGot = localStorage.getItem(this.sessionKey);
		if (itemGot !== null) {
			return JSON.parse(itemGot);
		}
		return null;
	}

	isLogin = () => !!localStorage.getItem(this.sessionKey);

	removeSession(callback) {
		try {
			// localStorage.removeItem(this.sessionKey, error => callback(error));
			localStorage.clear();
		} catch (error) {
			console.log("Error while removing session.", error);
		}
	}
}
export default new LocalDb();

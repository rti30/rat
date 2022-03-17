
export default async (url, options = {}) => {
	try {
		const api = 'https://game2048m3.herokuapp.com/api/v1';
		const response = await (await fetch(api + url, options));
		if (response.ok) {
			return response;
		}
		else if (!response.ok) {
			console.log("server не ок", response);
			return false; //!Словарь ошибок / проброс
		}
	}
	catch (e) {
		console.log(e);
		return false; //!Словарь ошибок / проброс
	}
}

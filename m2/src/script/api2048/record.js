let canGet = true;   //TODO Переписать модуль как класс - перемнную внутрь класса //? ====
export default server => ({
	baseUrl: "/record",
	async getAll() {
		if (canGet) {
			canGet = false;
			const body = await server(this.baseUrl);
			canGet = true;
			return body.json();
		}
		canGet = true; //Проверить будет ли выполнятся в случае исключения
	},
	async set({ flag, login }) {
		const options = {
			mode: 'cors',
			credentials: 'include',
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ flag, login }),
		}
		const { ok, body, status, serverMessege } = await server(this.baseUrl, options);
		return { ok, body, status, serverMessege }
	},
})
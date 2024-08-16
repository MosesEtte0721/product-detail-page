const url =
	"https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product?url=https%3A%2F%2Fwww.walmart.com%2Fip%2FMedia-Remote-for-PlayStation-5%2F381848762";
const options = {
	method: "GET",
	headers: {
		"x-rapidapi-key": "35c8f14ebcmsh23ca2c02e7a3889p117cd7jsn0ff3f34ad1c1",
		"x-rapidapi-host": "axesso-walmart-data-service.p.rapidapi.com",
	},
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

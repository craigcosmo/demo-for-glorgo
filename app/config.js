// process.env.NODE_ENV var is available during build process
const env = process.env.NODE_ENV

let port = 1111
let hostPort = 1112
let url = 'http://localhost:'+port+'/'
let api = 'http://localhost:'+hostPort+'/'


if (env=== 'production') {
	url = 'http://thatilike.com/'
	api = 'http://thatilike.com/'
}

export const siteUrl = url
export const sitePort = port
export default {
	siteUrl : url,
	img: url+'image/',
	postBookApi: api+'postBook'
}
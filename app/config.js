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
	facebook: '874548529292218',
	google:'927836081945-6k3n63vjb9hnq0tponffd4hgief1nr7l.apps.googleusercontent.com'
	
}
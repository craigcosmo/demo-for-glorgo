import latinize from 'latinize'


export function makeUri(string){
	// replace accent chareact with alphabet character
	string = latinize(string)

	// remove anything that not alphabet
	string = string.replace(/[^A-Za-z0-9 ]/gi, ' ')

	// replace spaces with space
	string = string.replace(/\s+/g, ' ')

	// lowercase
	string = string.toLowerCase().trim()

	// replace space with -
	string = string.replace(/ /g, '-')

	return string
}

const DEFAULT_VALUES = {
	PORT: 8000,
	NODE_ENV: "unspecified"
}

const getConfigValue = name => {
	const environmentValue = process.env[name]

	if(environmentValue != null) {
		return environmentValue
	} else {
		return DEFAULT_VALUES[name]
	}
}

module.exports =Object.keys(DEFAULT_VALUES).reduce((outputValues, valueName) => 
	Object.assign({}, outputValues, {[valueName]: getConfigValue(valueName)}), {})
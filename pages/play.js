var P = require('../lib/wxpage')
var Header = require('../comps/header')

P('play', {
	comps: [Header],
	data: {},
	onPreload: function (res) {
		console.log('## On play page preload, with query:', res)
	},
	onNavigate: function (res) {
		console.log('## On play page navigate, with query:', res)
	},
	onLoad: function(res) {
		console.log('## On play page load, with query:', res)
	},
	onShow: function () {
		console.log('## On play page show')
	},
	onReady: function () {
	}
})

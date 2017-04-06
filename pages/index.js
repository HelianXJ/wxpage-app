var P = require('../lib/wxpage')
var Header = require('../comps/header')
var d = new Date()

P('index', {
	comps: [
		Header,
	],
	data: {
	},
	onLaunch: function () {
		console.log('## On index page launch', new Date() - d, 'ms')
	},
	onAppLaunch: function (opts) {
		console.log('## [Page] APP Launch', opts)
	},
	onLoad: function() {
		console.timeEnd('Run2')
		console.log('## On index page load')
		this.$preload('play?cid=456')

		// cache test
		console.log('[Step 1] cache get', this.$cache.get('cache'))
		console.log('[Step 2] cache set "cache"')
		this.$cache.set('cache', {name: 'wxpage'})
		console.log('[Step 3] cache get', this.$cache.get('cache'))

		// session test
		console.log('[Step 1] session get', this.$session.get('session'))
		console.log('[Step 2] session set "session"')
		this.$session.set('session', {name: 'wxpage'})
		console.log('[Step 3] session get', this.$session.get('session'))
	},
	onPlay: function () {
		this.$route('play?cid=123')
	},
	onShow: function () {
		console.log('## On index page show')
	},
	onAwake: function (t) {
		console.log('## On index page awake', t)
	}
})

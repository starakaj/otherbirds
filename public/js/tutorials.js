var fs = require('fs');

var tutorials = [
	{
		title: "Karplus Strong",
		path: '/tutorials/1-karplus.zip',
		youtube: 'https://www.youtube.com/watch?v=5RYy8Cvgkqk',
		description: "Easy implementation of the Karplus Strong algorithm in Max"
	},
	{
		title: "Step Sequencer",
		path: '/tutorials/2-sequencer.zip',
		youtube: 'https://www.youtube.com/watch?v=hYc2a1ONTck',
		description: "A very basic step sequencer"
	},
	{
		title: "Stutter Effect",
		path: '/tutorials/3-stutter.zip',
		youtube: 'https://www.youtube.com/watch?v=hcVlPpaG4qQ',
		description: "Take a sample, chop it up, reorder it"
	},
];

exports.get = function() {
	// Maybe in the future, think about how to make this a little less hard coded
	return tutorials;
};
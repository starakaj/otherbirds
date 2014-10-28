var fs = require('fs');
var url = require('url');

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
	{
		title: "Vocoder",
		path: '/tutorials/4-vocoder.zip',
		youtube: 'https://www.youtube.com/watch?v=4feOFLX6238',
		description: "Destroy all humans"
	},
	{
		title: "Boomerang",
		path: '/tutorials/5-boomerang.zip',
		youtube: 'https://www.youtube.com/watch?v=3KKX6ni0oQE',
		description: "Cassie joins me for a very special episode"
	},
	{
		title: "TB-303",
		path: '/tutorials/6-tb-303.zip',
		youtube: 'https://www.youtube.com/watch?v=UQh0-niMnt4',
		description: "Building a not-quite TB-303, digitally"
	},
	{
		title: "Pitch Shifting",
		path: '/tutorials/7-pitch.zip',
		youtube: 'https://www.youtube.com/watch?v=uyzY_ZP54pA',
		description: "Make your own pitch shifter using a variable delay line"
	},
	{
		title: "Circular Sequencer",
		path: '/tutorials/8-circleseq.zip',
		youtube: 'https://www.youtube.com/watch?v=C1p_xI6b4NA',
		description: "Use Javascript to build a dynamic, circular sequencer"
	},
	{
		title: "Bpatcher the Almighty",
		path: '/tutorials/9-bpatcher.zip',
		youtube: 'https://www.youtube.com/watch?v=z1FgdAbHIuM',
		description: "Bow before bpatcher"
	},
	{
		title: "Dubstep Wobble Bass",
		path: '/tutorials/10-wobble.zip',
		youtube: 'https://www.youtube.com/watch?v=E_qrk2hE__s',
		description: "I can't promise that you will be Skrillex by the end of this video"
	},
	{
		title: "Wii Drums",
		path: '/tutorials/11-wii.zip',
		youtube: 'https://www.youtube.com/watch?v=trTeXfmD1ao',
		description: "Play an imaginary drums. Perfect for your imaginary band"
	},
	{
		title: "Pfft~ is your friend",
		path: '/tutorials/12-pfft.zip',
		youtube: 'https://www.youtube.com/watch?v=69A1kGNFYIc',
		description: "If you want polyphony, you'll have to make a friend"
	},
	{
		title: "Coll of Duty",
		path: '/tutorials/13-coll.zip',
		youtube: 'https://www.youtube.com/watch?v=4VvCye3CytU',
		description: "Organize your music by putting it into an array"
	},
	{
		title: "Autechre cleanup, part 1",
		path: '/tutorials/14-autechre.zip',
		youtube: 'https://www.youtube.com/watch?v=dkf87DJhG-4',
		description: "Part one of one million, trying to clean up this patch not in any way made by autechre"
	},
	{
		title: "A-dict-ted to you",
		path: '/tutorials/15-bouncy.zip',
		youtube: 'https://www.youtube.com/watch?v=MqUNSJS_8kY',
		description: "Storing your data in a coll is so Max 4. Dictionaries are the future"
	},
	{
		title: "Pixelface",
		path: '/tutorials/16-pixelface.zip',
		youtube: 'https://www.youtube.com/watch?v=e49qgv5NuUQ',
		description: "Me and my technicolor glitch coat"
	},
	{
		title: "Fisheye",
		path: '/tutorials/17-fisheye.zip',
		youtube: 'https://www.youtube.com/watch?v=AFyBW5mpRkc',
		description: "Also your introduction to shaders"
	},
	{
		title: "Head in the (saw)clouds",
		path: '/tutorials/18-sawcloud.zip',
		youtube: 'https://www.youtube.com/watch?v=_hO4AggFwrg',
		description: "Cloudy with a chance of buttery goodness"
	},
	{
		title: "2d.wave~: A glitchy love story",
		path: '/tutorials/19-2dwave.zip',
		youtube: 'https://www.youtube.com/watch?v=xOg6ODajMSM',
		description: "Be still my heart"
	},
	{
		title: "Kick Drum Synthesis",
		path: '/tutorials/20-kick.zip',
		youtube: 'https://www.youtube.com/watch?v=rB4McEGjePk',
		description: "You could just record a kick drum. But that's boring"
	},
	{
		title: "Bump it",
		path: '/tutorials/21-bumper.zip',
		youtube: 'https://www.youtube.com/watch?v=COl3ft1PPNU',
		description: "Extract those envelopes, bounce some balls"
	},
	{
		title: "Video Reverb",
		path: '/tutorials/22-feedback.zip',
		youtube: 'https://www.youtube.com/watch?v=sNr--9LO72k',
		description: "Those video frames got processed once and they think they're off the hook."
	},
	{
		title: "Live for the Swarm",
		path: '/tutorials/23-boids.zip',
		youtube: 'https://www.youtube.com/watch?v=-YPDGK0Ftzo',
		description: "Kekeke"
	},
	{
		title: "Bloom and Doom",
		path: '/tutorials/24-bloom.zip',
		youtube: 'https://www.youtube.com/watch?v=75gTVFaNsF0',
		description: "Michael Bay school of visual aesthetics"
	},
	{
		title: "Cell Pump",
		path: '/tutorials/25-cellpump.zip',
		youtube: 'https://www.youtube.com/watch?v=1rrd_N3JcgE',
		description: "Pump it"
	},
	{
		title: "The Floor is Lava",
		path: '/tutorials/26-lava.zip',
		youtube: 'https://www.youtube.com/watch?v=ImZimT_dQMY',
		description: "Make a lava lamp. Now you're a famous new media artist"
	},
	{
		title: "Live Visuals",
		path: '/tutorials/27-live-viz.zip',
		youtube: 'https://www.youtube.com/watch?v=gP1ybRozQQY',
		description: "At least, start investigating the first steps towards some live visuals"
	},
	{
		title: "Scanning and Sliding",
		path: '/tutorials/28-live-viz.zip',
		youtube: 'https://www.youtube.com/watch?v=R5EzyK8r2LU',
		description: "Transformation and feedback for mushy visuals"
	},
	{
		title: "Bespoke Noise",
		path: '/tutorials/29-live-viz.zip',
		youtube: 'https://www.youtube.com/watch?v=wYJG4vorBH4',
		description: "Mass-produced noise is just so pedestrian"
	},
	{
		title: "Video Wax",
		path: '/tutorials/30-live-viz.zip',
		youtube: 'https://www.youtube.com/watch?v=hoCpbxslvS8',
		description: "You can't melt digital video. But you can try"
	},
	{
		title: "Gantz Graf Style, Volume 1",
		path: '/tutorials/31-live-viz.zip',
		youtube: 'https://www.youtube.com/watch?v=pmJ7JHYZUbQ',
		description: "Techniques inspired by that badass Gantz Graf video"
	},
	{
		title: "Bump Map of Misreading",
		path: '/tutorials/32-bump.zip',
		youtube: 'https://www.youtube.com/watch?v=MiaoO6RZyu8',
		description: "It's a Harold Bloom reference. To be honest I have no idea who that is"
	},
	{
		title: "Least Useful Patch Ever",
		path: '/tutorials/33-videoaudio.zip',
		youtube: 'https://www.youtube.com/watch?v=1R7eBAVtER0',
		description: "Be fair, no patch is that useful"
	},
	{
		title: "Gantz Graf Style, Volume 2",
		path: '/tutorials/34-cube-1.zip',
		youtube: 'https://www.youtube.com/watch?v=ECx28n94eqY',
		description: "Apparently moving a cube around is art"
	},
	{
		title: "Gantz Graf Style, Volume 3: Multicube",
		path: '/tutorials/35-multicube-1.zip',
		youtube: 'https://www.youtube.com/watch?v=xEmFKNP1kss',
		description: "More cubes means more art"
	},
	{
		title: "Gantz Graf Style, Volume 4: Film School",
		path: '/tutorials/36-multicube-2.zip',
		youtube: 'https://www.youtube.com/watch?v=-EZDlq2jJXc',
		description: "Drunk camera = Art"
	},
	{
		title: "Gantz Graf Style, Volume 5: (Dis)Array",
		path: '/tutorials/37-multicube-3.zip',
		youtube: 'https://www.youtube.com/watch?v=t1pCJ2B8djE',
		description: "Keep it together"
	},
	{
		title: "Domo Arigato",
		path: '/tutorials/38-japanese.zip',
		youtube: 'https://www.youtube.com/watch?v=oI6iFx1eBhw',
		description: "Learn to read Japanese in just ten hours a day"
	},
	{
		title: "Gantz Graf Style, Volume 6: Refactor",
		path: '/tutorials/39-multicube-4.zip',
		youtube: 'https://www.youtube.com/watch?v=pvin6MNyOKY',
		description: "The step back before the push ahead"
	},
	{
		title: "Gantz Graf Style, Volume 7: Have Cake, Eat Cake",
		path: '/tutorials/40-multicube-5.zip',
		youtube: 'https://www.youtube.com/watch?v=dwEr-XYhxH4',
		description: "Free time, friends, max. Choose one."
	},
	{
		title: "The MIDI map is no the territory",
		path: '/tutorials/41-MIDI-learn.zip',
		youtube: 'https://www.youtube.com/watch?v=JeHvytpZ3uw',
		description: "Getting Magritte up in this"
	},
	{
		title: "Texture",
		path: '/tutorials/42-texture.zip',
		youtube: 'https://www.youtube.com/watch?v=v4zRkbOrgFI',
		description: "Feel it"
	},
	{
		title: "Face Butter",
		path: '/tutorials/43-face-butter.zip',
		youtube: 'https://www.youtube.com/watch?v=9nJHyQXNXSk',
		description: "Whatever it is, don't eat it"
	},
	{
		title: "Bit of a Stretch",
		path: '/tutorials/43-face-butter.zip',
		youtube: 'https://www.youtube.com/watch?v=5_Q-fNJDzr8',
		description: "Stretch it out"
	},
	{
		title: "Accidentally a Glitch Drum",
		path: '/tutorials/45-glitch-drum.zip',
		youtube: 'https://www.youtube.com/watch?v=vFliUowlPV8',
		description: "Mistakes were made. Thank god."
	},
	{
		title: "Autechre Cleanup",
		path: '/tutorials/46-autechre-redux.zip',
		youtube: 'https://www.youtube.com/watch?v=sgbNJLafX_g',
		description: "Untangling the knot"
	},
	{
		title: "Aute-Curves",
		path: '/tutorials/47-autechre.zip',
		youtube: 'https://www.youtube.com/watch?v=SbvqxUAl3z8',
		description: "Dangerous Curves"
	},
	{
		title: "Arp on it",
		path: '/tutorials/48-autechre.zip',
		youtube: 'https://www.youtube.com/watch?v=DvjDjFd3yQ4',
		description: "Never let go"
	},
	{
		title: "In Search of Lost Timbre",
		path: '/tutorials/49-autechre.zip',
		youtube: 'https://www.youtube.com/watch?v=pS7GlLMh3QQ',
		description: "Madeleines"
	},
	{
		title: "Han Solo",
		path: '/tutorials/50-solo.zip',
		youtube: 'https://www.youtube.com/watch?v=EHWiMQpmG-8',
		description: "Make big parts of your patch shut up."
	},
	{
		title: "Toulouse L'autechre",
		path: '/tutorials/51-autechre.zip',
		youtube: 'https://www.youtube.com/watch?v=MRsek59px7c',
		description: "Really can't seem to let this patch go"
	},
	{
		title: "Max for Live Device",
		path: '/tutorials/52-m4l.zip',
		youtube: 'https://www.youtube.com/watch?v=xnEfu_L4dZ4',
		description: "All up in that Live"
	},
	{
		title: "M'autechre Mo' Problems",
		path: '/tutorials/53-autechre.zip',
		youtube: 'https://www.youtube.com/watch?v=68R3MhklYu0',
		description: "Starting to feel pretty sisyphean"
	},
	{
		title: "Automatic Silly Video Generator",
		path: '/tutorials/54-silly.zip',
		youtube: 'https://www.youtube.com/watch?v=VDQfwODQc48',
		description: "Internet, can you please behave yourself for five minutes?"
	},
];

var projects = [
	{
		title: "Mira",
		project: "mira",
		description: "An iPad controller app for Max/MSP",
		thumb: "mira-thumb.jpg",
	},
	{
		title: "Breath",
		project: "breath",
		description: "An experiment with hands-free breathing",
		thumb: "breath-thumb.png",
	},
	{
		title: "One-Amp Wonder",
		project: "one-amp",
		description: "Under bridge music",
		thumb: "one-amp-scene.jpg",
	},
	{
		title: "Tecton",
		project: "tecton",
		description: "Music for pianos and loud",
		thumb: "tecton.jpg",
	},
	{
		title: "Sand Defacing All Surfaces",
		project: "sand",
		description: "Music video for the piece by Derek Piotr",
		thumb: "sand-thumb.png",
	},
	{
		title: "Flotsam",
		project: "flotsam",
		description: "The Friends of Sam Listen To Music show",
		thumb: "flotsam-thumb.jpg",
	},
];

exports.tutorials = function() {

	for (var i=0; i<tutorials.length; i++) {
		var tutorial = tutorials[i];
		console.log(tutorial.youtube);
		var parsed = url.parse(tutorial.youtube, true);
		console.log(parsed);
		var vidid = parsed.query.v;
		tutorials[i].thumb = "https://img.youtube.com/vi/" + vidid + "/2.jpg";
		console.log(tutorials[i].thumb);
	}
	// Maybe in the future, think about how to make this a little less hard coded
	return tutorials;
};

exports.projects = function() {
	return projects;
};
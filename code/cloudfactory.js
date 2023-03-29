let getz = () => {
	let width = window.innerWidth, height = window.innerHeight;
	let min = Math.min(width, height), max = Math.max(width, height);
	let version = (min < 680 || max < 980) ? "small" : "large";
	let v = version === "small" ? 0 : 1;
	let z = { 
		dimensions: {
			width, height, version, v
		},
		highcontrast: false,
		texthidden: false,
	};
	z.tools = {
		randominteger: (min, max) => {
			return Math.floor( min + Math.random()*(max-min));
		},
		logmsg: function(msg) {
			try { 
				console.log("### ::: " + msg); 
			}
			catch(err) { z.tools.logerror(err) }
		},
		logerror: function(error) {
			try { console.log("rusty error ... " + error); }
			catch(err) {}
		},
		randomhighharmonic: () => {
			let multipliers = [10.0, 12.5, 13.33, 15, 20];
			return multipliers[ z.tools.randominteger( 0, multipliers.length) ];
		},
		randomharmonic: () => {
			let multipliers = [5, 7.5, 10.0, 12.5, 13.33, 15, 20];
			return multipliers[ z.tools.randominteger( 0, multipliers.length) ];
		},
		randomlowharmonic: () => {
			let multipliers = [5, 7.5, 10.0, 12.5, 13.33, 15, 20];
			return multipliers[ z.tools.randominteger( 0, multipliers.length) ]/2;
		},
		randomkey: (object) => {
			let keys = Object.keys(object);
			let key = keys[z.tools.randominteger(0,keys.length)];
			// z.tools.logmsg("key = " + key);
			return key;
		},
		datestr: (date, options) => {
			if(options===undefined) options = {year: "numeric", month: "2-digit", day: "numeric", hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit"};
			return date.toLocaleTimeString("en-US", options);
			//new Date().toLocaleTimeString("en-US", {year: "numeric", month: "2-digit", day: "numeric", hour12: true, hour: "2-digit", minute: "2-digit", second: "2-digit"});
		},
		togrid: (min=1, max=1, x=1, ndivisions=1) => {
			let dx = Math.floor( (max-min) / ndivisions );
			return Math.floor( ( x-min+dx/2)/dx )*dx + min;
		},
		flatten: (arr) => {
			return arr.reduce(function (flat, item) {
				return flat.concat(Array.isArray(item) ? z.tools.flatten(item) : item);
			}, []);
		},
		createElement: ({parentel=document.querySelector("body"), tag="div", attributes=[], cssclasses=[], cssstyles=[], ns="none"}) => {
			let el;
			if(ns!=="none") {
				el = document.createElementNS(ns, tag);
				attributes.forEach( entry => {
					el.setAttributeNS(null, entry[0], entry[1]);
				});
			}
			else {
				el = document.createElement(tag);
				attributes.forEach( entry => {
					el.setAttribute(entry[0], entry[1]);
				});
			}
			cssstyles.forEach( entry => {
				z.tools.logmsg("entry = " + entry)
				el.style[entry[0]] = entry[1];
			});
			cssclasses.forEach( entry => {
				el.classList.add(entry);
			});
			parentel.appendChild(el);
			return el;
		}
	};
	z.data = {
		colors: {
			sets: {
				warmbw: ["#fcfbe3", "#191918"],
				warmbwred: ["#9a0000", "#fcfbe3", "#191918"],
				warmbw: ["#fcfbe3", "#191918"],
				warmbwyellow: ["#ffcc00", "#fcfbe3", "#191918"],
				warmbw: ["#fcfbe3", "#191918"],
				warmbwbluegray: ["#006699", "#fcfbe3", "#191918", "#4b4b44"],
				warmbwbluesgray: ["#006699", "#fcfbe3", "#191918", "#004488"],
				warmbwblue: ["#006699", "#fcfbe3", "#191918"],
				warmbwbluegreen: ["#006699", "#006666", "#fcfbe3", "#191918"],
			},
			oldplaylists: {
				industryseed: [ ['#fcfbe3','#000000','#ffcc00','#9a0000'] ],
				industry: [ ['#fcfbe3','#000000','#ffcc00','#9a0000'],['#fcfbe3','#000000','#9a0000'],['#fcfbe3','#000000','#ffcc00'],['#fcfbe3','#000000'],['#fcfbe3','#000000','#ffcc00'],['#fcfbe3','#000000','#9a0000'],['#fcfbe3','#000000'] ],
				industrygrayseed: [ ['#fcfbe3','#000000','#ffcc00','#9a0000', '#444444'] ],
				industrygray: [ ['#fcfbe3','#000000','#ffcc00','#9a0000'],['#fcfbe3','#000000'],['#fcfbe3','#000000'], ['#fcfbe3','#000000','#9a0000'], ['000000', '#fcfbe3','#444444'], ['#fcfbe3','#000000'], ['#fcfbe3','#000000','#ffcc00'], ['#fcfbe3','#000000','#9a0000'],['#fcfbe3','#000000'] ],
				rbwg: [ ['#fcfbe3','#000000','#9a0000'],['#fcfbe3','#000000'], ['#fcfbe3','#000000','#9a0000'], ['#fcfbe3','#000000'], ['#fcfbe3','#000000','#9a0000','#444444'], ['#fcfbe3','#000000','#444444'], ['#fcfbe3','#000000','#9a0000'], ['#fcfbe3','#000000']],
				rbw: [ ['#fcfbe3','#000000','#9a0000'],['#fcfbe3','#000000'], ['#fcfbe3','#000000','#9a0000'], ['#fcfbe3','#000000'], ['#fcfbe3','#000000','#444444'] ],
				ybw: [ ['#fcfbe3','#000000','#ffcc00'],['#fcfbe3','#000000'], ['#fcfbe3','#000000','#ffcc00'], ['#fcfbe3','#000000'], ['#fcfbe3','#000000','#444444'] ],
				bwseed: [ ['#fcfbe3', '#000000'] ],
				bw: [ ['#fcfbe3', '#000000'], ['#fcfbe3', '#000000', '#fcfbe3', '#000000'], ['#fcfbe3', '#000000', '#000000'], ['#fcfbe3', '#000000', '#fcfbe3'] ],
				bwg: [ ['#fcfbe3', '#000000'], ['#fcfbe3', '#000000', '#fcfbe3', '#000000'], ['#fcfbe3','#000000','#444444'] ],
				blueyellow: [["#fedd00", '#006699', "#fcfbe3", "#000000"]],
				lightsseed: [ ['#aaaaaa','#c7c6bf','#e3e2d7','#ffffff'] ], //http://gka.github.io/palettes/#colors=#fcfbe3,#ffffff|steps=4|bez=1|coL=1
				lights: [ ['#aaaaaa','#c7c6bf','#e3e2d7','#ffffff'], ['#aaaaaa','#c7c6bf','#e3e2d7','#ffffff'], ['#aaaaaa','#c7c6bf','#ffffff'], ['#aaaaaa','#c7c6bf','#e3e2d7'] ],
				bluesseed: [ ['#006699','#0a7293','#0a7c8e','#008888'] ],
				blues: [ ['#006699','#0a7293','#0a7c8e','#008888'], ['#006699','#0a7293','#0a7c8e','#008888'], ['#006699','#0a7293','#008888'], ['#006699','#0a7293','#0a7c8e'] ],
				yellowsseed: [ ['#fcfbe3','#ffeba9','#ffdc6e','#ffcc00'] ],
				yellows: [ ['#fcfbe3','#ffeba9','#ffdc6e','#ffcc00'], ['#fcfbe3','#ffeba9','#ffdc6e','#ffcc00'], ['#fcfbe3','#ffeba9','#ffcc00'], ['#fcfbe3','#ffeba9','#ffdc6e'] ],
				darksseed: [ ['#686860','#464540','#252523','#000000'] ],
				darks:  [ ['#686860','#464540','#252523','#000000'], ['#686860','#464540','#252523','#000000'], ['#686860','#000000','#252523','#000000'], ['#686860','#464540', '#686860','#000000'] ],
				circusblues: [ ["#2B4C6F", "#4A6A8A", "#183d68", "#07325f", "#004866"] ],
				circusgreens: [ ["#267158", "#448870", "#126d4f", "#006644"] ],
				circusoranges: [ ["#E64A19", "#FF5722", "#ff6600", "#ffcc00", "#ff8000", "#e64d00"] ],
				circusblacks: [ ["#212121", "#727272"] ],
				circuswhites: [ ["fffffa", "#B6B6B6"] ],
				circus: [ ["#9a0000", "#de4400", "#ffcc00",  "#4682B4", "#008848",  "#004888", "#006699", '#fcfbe3','#000000',], ["#9a0000",  "#ffcc00",  "#006699"] ],
			},
			pigments: {
				black: "#191918",
				white: "#fcfbe3",
				blue: "#006699",
				red: "#9a0000",
				yellow: "#ffcc00",
				gray: "#484848",
			}
		},
	};
	//core elements
	z.elements = ( () => {
		return {
			body: { el: document.querySelector("body") },
			main: { el: document.querySelector("main") },
			// clock: { el: document.querySelector("#clock") },
			// telegraph: { el: document.querySelector("#telegraph") },
			// svg:  { el: document.querySelector("#svg") },
			frames: ["svgframe", "divframe", "wordframe", "subtextframe", "contentframe"].reduce( (acc, id) => {
				z.tools.logmsg("create frame element ::: " + id);
				acc[id] = { el: document.querySelector("#"+id) };
				return acc;
			}, {}),
			poems: Array.from(document.querySelectorAll(".poem")).reduce( (acc,el,j)=> {
				z.tools.logmsg("create poem element ::: " + j);
				// el.setAttribute("id", "poem"+j);
				acc[j]={ el:el, id:"poem"+j, stanzas: Array.from(el.querySelectorAll(".stanza")).reduce( (acc,el,j)=> {
					// z.tools.logmsg("el.className ::: " + el.className);
					el.setAttribute("id", "stanza"+j);
					// el.className= "stanza " + afterclassnames1[j%afterclassnames1.length] + " " + afterclassnames2[0];

					acc[j]={ el:el, lines:Array.from(el.querySelectorAll("li")).reduce( (acc,el,j)=> {
						// z.tools.logmsg("create line element ::: " + j);
						// el.setAttribute("id", "line"+j);
						acc[j]={ el:el };
						return acc;
						}, []) }; 
					return acc;
				}, []) };
				return acc;
			}, []),
		}
	})();

	

		//set controls
	( () => {

		let sound = document.querySelector("#sound");
		if(sound!==null) {
			sound.addEventListener("change", () => {
				if(sound.checked) {
					try {
						z.radio.player.context.resume().then(() => {
							z.tools.logmsg("playback resumed");
							z.radio.soundplaying = true;
							z.radio.play();
						});
					} catch(e) { z.tools.logerror("dashboard ::: resumeaudio " + e) } 
				}
				else {
					try {
						z.radio.player.context.suspend().then(() => {
							z.radio.soundplaying = false;
							z.radio.pause();
						});
					} catch(e) { z.tools.logerror("dashboard ::: suspendaudio " + e) }
				}			
			});
		}

		let animationonly = document.querySelector("#animationonly");
		if(animationonly==null) {
			animationonly = z.tools.createElement({
				parentel: z.elements.frames["contentframe"].el, tag: "input",
				attributes: [ ["id", "animationonly"], ["type", "checkbox"] ]
			});
			z.tools.createElement({
				parentel: z.elements.frames["contentframe"].el, tag: "label",
				attributes: [ ["for", "animationonly"] ]
			});
		}
		animationonly.addEventListener("change", () => {
			if(animationonly.checked) {
				z.elements["main"].el.style["opacity"] = 0.0;
				z.elements.frames["contentframe"].el.classList.add("hidebg");
			}
			else {
				z.elements["main"].el.style["opacity"] = 1.0;
				z.elements.frames["contentframe"].el.classList.remove("hidebg");
			}
		});

		let largetext = document.querySelector("#largetext");
		if(largetext==null) {
			largetext = z.tools.createElement({
				parentel: z.elements["main"].el, tag: "input",
				attributes: [ ["id", "largetext"], ["type", "checkbox"] ]
			});
			let label = z.tools.createElement({
				parentel: z.elements["main"].el, tag: "label",
				attributes: [ ["for", "largetext"] ]
			});
			label.innerText = "large text";
		}
		largetext.addEventListener("change", () => {
			if(largetext.checked) {
				// z.elements["main"].el.classList.add("highcontrast");
				z.elements.frames["contentframe"].el.classList.add("largetext");
				z.largetext = true;
			}
			else {
				// z.elements["main"].el.classList.remove("highcontrast");
				z.elements.frames["contentframe"].el.classList.remove("largetext");
				z.largetext = false;
			}
			// highcontrast.checked ? z.elements["main"].el.classList.add("highcontrast") : z.elements["main"].el.classList.remove("highcontrast");
		});

		let highcontrast = document.querySelector("#highcontrast");
		if(highcontrast==null) {
			highcontrast = z.tools.createElement({
				parentel: z.elements["main"].el, tag: "input",
				attributes: [ ["id", "highcontrast"], ["type", "checkbox"] ]
			});
			let label = z.tools.createElement({
				parentel: z.elements["main"].el, tag: "label",
				attributes: [ ["for", "highcontrast"] ]
			});
			label.innerText = "high contrast";
		}
		highcontrast.addEventListener("change", () => {
			if(highcontrast.checked) {
				// z.elements["main"].el.classList.add("highcontrast");
				z.elements.frames["contentframe"].el.classList.add("highcontrast");
				z.highcontrast = true;
			}
			else {
				// z.elements["main"].el.classList.remove("highcontrast");
				z.elements.frames["contentframe"].el.classList.remove("highcontrast");
				z.highcontrast = false;
			}
			// highcontrast.checked ? z.elements["main"].el.classList.add("highcontrast") : z.elements["main"].el.classList.remove("highcontrast");
		});
		let darklight = document.querySelector("#darklight");
		if(darklight==null) {
			darklight = z.tools.createElement({
				parentel: z.elements["main"].el, tag: "input",
				attributes: [ ["id", "darklight"], ["type", "checkbox"] ]
			});
			z.tools.createElement({
				parentel: z.elements["main"].el, tag: "label",
				attributes: [ ["for", "darklight"] ]
			});
		}
		darklight.addEventListener("change", () => {
			if(darklight.checked) {
				z.elements.frames["contentframe"].el.classList.add("day");
				document.documentElement.style.setProperty("--corecolor", "var(--daycolor)");
				document.documentElement.style.setProperty("--corebg", "var(--daybg)");
				document.documentElement.style.setProperty("--coreveilbg", "var(--dayveilbg)");
				z.day = true;
			}
			else {
				z.elements.frames["contentframe"].el.classList.remove("day");
				document.documentElement.style.setProperty("--corecolor", "var(--nightcolor)");
				document.documentElement.style.setProperty("--corebg", "var(--nightbg)");
				document.documentElement.style.setProperty("--coreveilbg", "var(--nightveilbg)");
				z.day = false;
			}
			// highcontrast.checked ? z.elements["main"].el.classList.add("highcontrast") : z.elements["main"].el.classList.remove("highcontrast");
		});
		
	})();
	return z;
};

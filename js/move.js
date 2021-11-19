// Definition of areas and movements
movements = {
	"steps" 	: 60, // Duration in frames
	"interval" 	: 100, // Time interval between frames (e.g. animation speed)
	"images" 	:
		[
			{ // Image n.1 (imgnum=1); // Each image is split into many "areas", each one indepdendently moved
				"id" : 		"selva_oscura",
				"canto":    "01", // Location in Divina commedia; two digits number in txt format.
				"cantica":  "01",
				"verso":    "01",
				"text": "",
				"areas" : [  // Areas composing the image
					{
						"id" : 		"buio",
						"name" : 	"buio",
						"class" : 	"buio",
						"src" : 	"buiod.png", // filename
						"layerOrder" : 0, // 0 = background
						"move" : {
							"type" : "simple", // ="path" if  multiple points (to be implemented)
							"points" : [], // empty if type is "simple"
							"xstart" : 0, // Start position
							"ystart" : 0,
							"xinc" : -0.6, // Speed and direction of movement
							"yinc" : 0
					}
				},


				{
					"id" : 		"semibuio",
					"name" : 	"semibuio",
					"class" : 	"semibuio",
					"src" : 	"semibuioc.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -0.3,
						"yinc" : 0
					}
				},

				{
					"id" : 		"vuota",
					"name" : 	"vuota",
					"class" : 	"vuota",
					"src" : 	"vuota.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},

				{
					"id" : 		"albero1",
					"name" : 	"albero1",
					"class" : 	"albero1",
					"src" : 	"albero1c.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .3,
						"yinc" : .1
					}
				},

				{
					"id" : 		"albero2",
					"name" : 	"albero2",
					"class" : 	"albero2",
					"src" : 	"albero2c.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .4,
						"yinc" : .2
					}
				},

				{
					"id" : 		"dante",
					"name" : 	"dante",
					"class" : 	"dante",
					"src" : 	"dantec.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},

				{
					"id" : 		"albero3",
					"name" : 	"albero3",
					"class" : 	"albero3",
					"src" : 	"albero3c.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.4,
						"yinc" : 0
					}
				},

				{
					"id" : 		"rovi",
					"name" : 	"rovi",
					"class" : 	"rovi",
					"src" : 	"rovic.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : -.2
					}
				},

				{
					"id" : 		"rovi2",
					"name" : 	"rovi2",
					"class" : 	"rovi2",
					"src" : 	"rovi2c.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.2,
						"yinc" : 0
					}
				}

			]
		},

		{ ///////////////////////////////////////////
			"id" : 		"lupa",
			"canto":    "01",
			"cantica":  "01",
			"verso":    "11",
			"text": "",
			"areas" : [

				{
					"id" : 		"cielo",
					"name" : 	"cielo",
					"class" : 	"cielo",
					"src" : 	"cielo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -0.2,
						"yinc" : 0
					}
				},

				{
					"id" : 		"mare",
					"name" : 	"mare",
					"class" : 	"mare",
					"src" : 	"mare.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -0.3,
						"yinc" : 0
					}
				},

				{
					"id" : 		"nuvola1",
					"name" : 	"nuvola1",
					"class" : 	"nuvola1",
					"src" : 	"nuvola1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -0.6,
						"yinc" : 0
					}
				},

				{
					"id" : 		"nuvola2",
					"name" : 	"nuvola2",
					"class" : 	"nuvola2",
					"src" : 	"nuvola2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0.6,
						"yinc" : 0
					}
				},

				{
					"id" : 		"terra1",
					"name" : 	"terra1",
					"class" : 	"terra1",
					"src" : 	"terra1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},

				{
					"id" : 		"uccelli1",
					"name" : 	"uccelli1",
					"class" : 	"uccelli1",
					"src" : 	"uccelli1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -0.6,
						"yinc" : 0
					}
				},

				{
					"id" : 		"uccelli2",
					"name" : 	"uccelli2",
					"class" : 	"uccelli2",
					"src" : 	"uccelli2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0.6,
						"yinc" : 0
					}
				},

				{
					"id" : 		"lupa",
					"name" : 	"lupa",
					"class" : 	"lupa",
					"src" : 	"lupa.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 1,
						"yinc" : 0
					}
				},

				{
					"id" : 		"terra2",
					"name" : 	"terra2",
					"class" : 	"terra2",
					"src" : 	"terra2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -0.4,
						"yinc" : 0
					}
				},

				{
					"id" : 		"dante",
					"name" : 	"dante",
					"class" : 	"dante",
					"src" : 	"dante.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0.6,
						"yinc" : 0
					}
				}

			]
		},
///////////////////////////////////////////////////////////////////////
		{
			"id" : 		"leone",
			"canto":    "01",
			"cantica":  "01",
			"verso":    "16",
			"text": "",
			"areas" : [

				{
					"id" : 		"cielo",
					"name" : 	"cielo",
					"class" : 	"cielo",
					"src" : 	"cielo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -20,
						"ystart" : 0,
						"xinc" : 1.5,
						"yinc" : 0
					}
				},
				{
					"id" : 		"montagne",
					"name" : 	"montagne",
					"class" : 	"montagne",
					"src" : 	"montagne.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 1,
						"yinc" : 0
					}
				},

				{
					"id" : 		"sfondo2",
					"name" : 	"sfondo2",
					"class" : 	"sfondo2",
					"src" : 	"sfondo2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .8,
						"yinc" : 0
					}
				},


				{
					"id" : 		"sfondo3",
					"name" : 	"sfondo3",
					"class" : 	"sfondo3",
					"src" : 	"sfondo3.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .6,
						"yinc" : 0
					}
				},

				{
					"id" : 		"terra-sin",
					"name" : 	"terra-sin",
					"class" : 	"terra-sin",
					"src" : 	"terra-sin.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .5,
						"yinc" : 0
					}
				},

				{
					"id" : 		"terra-des",
					"name" : 	"terra-des",
					"class" : 	"terra-des",
					"src" : 	"terra-des.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.1,
						"yinc" : 0
					}
				},

				{
					"id" : 		"dante",
					"name" : 	"dante",
					"class" : 	"dante",
					"src" : 	"dante.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .5,
						"yinc" : .2
					}
				},



				{
					"id" : 		"leone",
					"name" : 	"leone",
					"class" : 	"leone",
					"src" : 	"leone.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 30,
						"xinc" : -.5,
						"yinc" : -.2,
						"widthMaxFactor" : 100,
						"heightMaxFactor" : 100,
						"widthInc": 1,
						"heightInc" : 1
					}
				},



				{
					"id" : 		"cornice",
					"name" : 	"cornice",
					"class" : 	"cornice",
					"src" : 	"cornice.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				}

			]
		},

		{
			"id" : 		"virgilio",
			"canto":    "01",
			"cantica":  "01",
			"verso":    "30",
			"text": "",
			"areas" : [
				{
					"id" : 		"cielo",
					"name" : 	"cielo",
					"class" : 	"cielo",
					"src" : 	"cielo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -20,
						"ystart" : 0,
						"xinc" : 1,
						"yinc" : 0
					}
				},
				{
					"id" : 		"terreno1",
					"name" : 	"terreno1",
					"class" : 	"terreno1",
					"src" : 	"terreno1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},
				{
					"id" : 		"alberello1",
					"name" : 	"alberello1",
					"class" : 	"alberello1",
					"src" : 	"alberello1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.3,
						"yinc" : 0
					}
				},
				{
					"id" : 		"alberello2",
					"name" : 	"alberello2",
					"class" : 	"alberello2",
					"src" : 	"alberello2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.3,
						"yinc" : 0
					}
				},
				{
					"id" : 		"terreno2",
					"name" : 	"terreno2",
					"class" : 	"terreno2",
					"src" : 	"terreno2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.5,
						"yinc" : 0
					}
				},
				{
					"id" : 		"dante",
					"name" : 	"dante",
					"class" : 	"dante",
					"src" : 	"dante.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.5,
						"yinc" : -.3
					}
				},
				{
					"id" : 		"bestia",
					"name" : 	"bestia",
					"class" : 	"bestia",
					"src" : 	"bestia.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -1,
						"yinc" : -.2
					}
				},
				{
					"id" : 		"albero1",
					"name" : 	"albero1",
					"class" : 	"albero1",
					"src" : 	"albero1m.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.4,
						"yinc" : 0
					}
				},
				{
					"id" : 		"albero2",
					"name" : 	"albero2",
					"class" : 	"albero2",
					"src" : 	"albero2m.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -1,
						"yinc" : 0
					}
				},
				{
					"id" : 		"cespuglio",
					"name" : 	"cespuglio",
					"class" : 	"cespuglio",
					"src" : 	"cespuglio.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -1,
						"yinc" : 0
					}
				},
				{
					"id" : 		"cornice",
					"name" : 	"cornice",
					"class" : 	"cornice",
					"src" : 	"cornice.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				}
			]
		},

		{
			"id" : 		"finale_1",
			"canto":    "01",
			"cantica":  "01",
			"verso":    "46",
			"text": "",
			"areas" : [
				{
					"id" : 		"sfondo1",
					"name" : 	"sfondo1",
					"class" : 	"sfondo1",
					"src" : 	"sfondo1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},

				{
					"id" : 		"sfondo2",
					"name" : 	"sfondo2",
					"class" : 	"sfondo2",
					"src" : 	"sfondo2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : +.4,
						"yinc" : 0
					}
				},

				{
					"id" : 		"uccello",
					"name" : 	"uccello",
					"class" : 	"uccello",
					"src" : 	"uccello.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -1.9,
						"yinc" : -.4
					}
				},

				{
					"id" : 		"terreno-sin",
					"name" : 	"terreno-sin",
					"class" : 	"terreno-sin",
					"src" : 	"terreno-sin.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : +.6,
						"yinc" : 0
					}
				},

				{
					"id" : 		"sasso",
					"name" : 	"sasso",
					"class" : 	"sasso",
					"src" : 	"sasso.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -10,
						"ystart" : 0,
						"xinc" : 1,
						"yinc" : 0
					}
				},

				{
					"id" : 		"virgilio",
					"name" : 	"virgilio",
					"class" : 	"virgilio",
					"src" : 	"virgilio.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -20,
						"ystart" : -15,
						"xinc" : 2.2,
						"yinc" : .4
					}
				},

				{
					"id" : 		"dante",
					"name" : 	"dante",
					"class" : 	"dante",
					"src" : 	"dante.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -20,
						"ystart" : -15,
						"xinc" : 1.8,
						"yinc" : .4
					}
				},


				{
					"id" : 		"terreno-des",
					"name" : 	"terreno-des",
					"class" : 	"terreno-des",
					"src" : 	"terreno-des.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 1,
						"yinc" : 0
					}
				},


				{
					"id" : 		"albero-sfondo",
					"name" : 	"albero-sfondo",
					"class" : 	"albero-sfondo",
					"src" : 	"albero-sfondo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -10,
						"ystart" : 0,
						"xinc" : +.4,
						"yinc" : 0
					}
				},


				{
					"id" : 		"cornice",
					"name" : 	"cornice",
					"class" : 	"cornice",
					"src" : 	"cornice.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				}

			]
		},

		{
			"id" : 		"ingresso",
			"canto":    "01",
			"cantica":  "03",
			"verso":    "03",
			"text": "",
			"areas" : [
				{
					"id" : 		"cielo",
					"name" : 	"cielo",
					"class" : 	"cielo",
					"src" : 	"cielo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -20,
						"ystart" : 0,
						"xinc" : 1,
						"yinc" : 0
					}
				},
				{
					"id" : 		"monti_lontani",
					"name" : 	"monti_lontani",
					"class" : 	"monti_lontani",
					"src" : 	"monti_lontani.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},

				{
					"id" : 		"montagne2",
					"name" : 	"montagne2",
					"class" : 	"montagne2",
					"src" : 	"montagne2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .3,
						"yinc" : 0
					}
				},

				{
					"id" : 		"parete",
					"name" : 	"parete",
					"class" : 	"parete",
					"src" : 	"parete.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .6,
						"yinc" : 0
					}
				},

				{
					"id" : 		"dante",
					"name" : 	"dante",
					"class" : 	"dante",
					"src" : 	"dante.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .3,
						"yinc" : .3
					}
				},

				{
					"id" : 		"terreno_des",
					"name" : 	"terreno_des",
					"class" : 	"terreno_des",
					"src" : 	"terreno_des.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .9,
						"yinc" : 0
					}
				},

				{
					"id" : 		"sasso",
					"name" : 	"sasso",
					"class" : 	"sasso",
					"src" : 	"sasso.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -20,
						"ystart" : 0,
						"xinc" : 1.22,
						"yinc" : 0
					}
				},

				{
					"id" : 		"cornice",
					"name" : 	"cornice",
					"class" : 	"cornice",
					"src" : 	"cornice.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				}

			]
		},

		{
			"id" : 		"caronte",
			"canto":    "01",
			"cantica":  "03",
			"verso":    "28",
			"text": "",
			"areas" : [
				{
					"id" : 		"cielo",
					"name" : 	"cielo",
					"class" : 	"cielo",
					"src" : 	"cielo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -15,
						"ystart" : 0,
						"xinc" : +.8,
						"yinc" : 0
					}
				},

				{
					"id" : 		"scogliera",
					"name" : 	"scogliera",
					"class" : 	"scogliera",
					"src" : 	"scogliera.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},

				{
					"id" : 		"sasso",
					"name" : 	"sasso",
					"class" : 	"sasso",
					"src" : 	"sasso.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.3,
						"yinc" : 0
					}
				},

				{
					"id" : 		"mare1",
					"name" : 	"mare1",
					"class" : 	"mare1",
					"src" : 	"mare1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 20,
						"ystart" : 0,
						"xinc" : -.5,
						"yinc" : 0
					}
				},

				{
					"id" : 		"barca",
					"name" : 	"barca",
					"class" : 	"barca",
					"src" : 	"barca.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.7,
						"yinc" : .1
					}
				},

				{
					"id" : 		"caronte",
					"name" : 	"caronte",
					"class" : 	"caronte",
					"src" : 	"caronte.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 50,
						"ystart" : 20,
						"xinc" : -.9,
						"yinc" : -.1
					}
				},

				{
					"id" : 		"prua",
					"name" : 	"prua",
					"class" : 	"prua",
					"src" : 	"prua.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.9,
						"yinc" : .1
					}
				},

				{
					"id" : 		"mare2",
					"name" : 	"mare2",
					"class" : 	"mare2",
					"src" : 	"mare2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : +16,
						"ystart" : 0,
						"xinc" : -1.0,
						"yinc" : -.3
					}
				},

				{
					"id" : 		"mare3",
					"name" : 	"mare3",
					"class" : 	"mare3",
					"src" : 	"mare3.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : +20,
						"ystart" : -0,
						"xinc" : -1.3,
						"yinc" : .3
					}
				},
				{

					"id" : 		"remo",
					"name" : 	"remo",
					"class" : 	"remo",
					"src" : 	"remo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 50,
						"ystart" : 20,
						"xinc" : -.9,
						"yinc" : -.1
					}
				},

				{
					"id" : 		"mare4",
					"name" : 	"mare4",
					"class" : 	"mare4",
					"src" : 	"mare4.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 40,
						"ystart" : 0,
						"xinc" : -1.1,
						"yinc" :.2
					}
				},
				{

					"id" : 		"mare5",
					"name" : 	"mare5",
					"class" : 	"mare5",
					"src" : 	"mare5.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 50,
						"ystart" : 0,
						"xinc" : -1.6,
						"yinc" :.3
					}
				},
				{

					"id" : 		"mare6",
					"name" : 	"mare6",
					"class" : 	"mare6",
					"src" : 	"mare6.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 70,
						"ystart" : 10,
						"xinc" : -1.8,
						"yinc" :-.2
					}
				},
				{

					"id" : 		"cornice",
					"name" : 	"cornice",
					"class" : 	"cornice",
					"src" : 	"cornice.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" :0
					}
				}

			]

		},

		{
			"id" : 		"caronte2",
			"canto":    "01",
			"cantica":  "03",
			"verso":    "37",
			"text": "",
			"areas" : [
				{
					"id" : 		"cielo",
					"name" : 	"cielo",
					"class" : 	"cielo",
					"src" : 	"cielo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : -.5,
						"yinc" : 0
					}
				},
				{
					"id" : 		"montagne",
					"name" : 	"montagne",
					"class" : 	"montagne",
					"src" : 	"montagne.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : .4
					}
				},
				{
					"id" : 		"rupe",
					"name" : 	"rupe",
					"class" : 	"rupe",
					"src" : 	"rupe.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : .4
					}
				},
				{
					"id" : 		"mare",
					"name" : 	"mare",
					"class" : 	"mare",
					"src" : 	"mare.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 5,
						"ystart" : -10,
						"xinc" : -.3,
						"yinc" : .5
					}
				},
				{
					"id" : 		"rupe2",
					"name" : 	"rupe2",
					"class" : 	"rupe2",
					"src" : 	"rupe2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : .7
					}
				},
				{
					"id" : 		"dannati1",
					"name" : 	"dannati1",
					"class" : 	"dannati1",
					"src" : 	"dannati1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : -.10,
						"yinc" : .6
					}
				},
				{
					"id" : 		"sfondo_dannati",
					"name" : 	"sfondo_dannati",
					"class" : 	"sfondo_dannati",
					"src" : 	"sfondo_dannati.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : .7
					}
				},
				{
					"id" : 		"dannati2",
					"name" : 	"dannati2",
					"class" : 	"dannati2",
					"src" : 	"dannati2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : -.1,
						"yinc" : .75
					}
				},
				{
					"id" : 		"spiaggia",
					"name" : 	"spiaggia",
					"class" : 	"spiaggia",
					"src" : 	"spiaggia.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : .9
					}
				},
				{
					"id" : 		"dannati3",
					"name" : 	"dannati3",
					"class" : 	"dannati3",
					"src" : 	"dannati3.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : 1.0
					}
				},
				{
					"id" : 		"dannati4",
					"name" : 	"dannati4",
					"class" : 	"dannati4",
					"src" : 	"dannati4.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : 1.1
					}
				},
				{
					"id" : 		"dannati5",
					"name" : 	"dannati5",
					"class" : 	"dannati5",
					"src" : 	"dannati5.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : 1.2
					}
				},
				{
					"id" : 		"dannati6",
					"name" : 	"dannati6",
					"class" : 	"dannati6",
					"src" : 	"dannati6.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : 1.1
					}
				},
				{
					"id" : 		"caronte",
					"name" : 	"caronte",
					"class" : 	"caronte",
					"src" : 	"caronte.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : .70
					}
				},
				{
					"id" : 		"braccio_remo",
					"name" : 	"braccio_remo",
					"class" : 	"braccio_remo",
					"src" : 	"braccio_remo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" : .70
					}
				},
				{
					"id" : 		"barca",
					"name" : 	"barca",
					"class" : 	"barca",
					"src" : 	"barca.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : -10,
						"xinc" : 0,
						"yinc" :.50
					}
				}
			]
		},

 

		{
			"id" : 		"sasso",
			"canto":    "01",
			"cantica":  "04",
			"verso":    "14",
			"text": "",
			"areas" : [

				{
					"id" : 		"cielo",
					"name" : 	"cielo",
					"class" : 	"cielo",
					"src" : 	"cielo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 10,
						"ystart" : 0,
						"xinc" : -.5,
						"yinc" : 0
					}
				},



				{
					"id" : 		"fronde",
					"name" : 	"fronde",
					"class" : 	"fronde",
					"src" : 	"fronde.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -.30
					}
				},


				{

					"id" : 		"alberi_sfondo",
					"name" : 	"alberi_sfondo",
					"class" : 	"alberi_sfondo",
					"src" : 	"alberi_sfondo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -.20
					}
				},

				{
					"id" : 		"sasso",
					"name" : 	"sasso",
					"class" : 	"sasso",
					"src" : 	"sasso.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -.6
					}
				},

				{
					"id" : 		"albero1",
					"name" : 	"albero1",
					"class" : 	"albero1",
					"src" : 	"albero1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -.5
					}
				},


				{
					"id" : 		"terreno",
					"name" : 	"terreno",
					"class" : 	"terreno",
					"src" : 	"terreno.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -.7
					}
				},

				{
					"id" : 		"gente1",
					"name" : 	"gente1",
					"class" : 	"gente1",
					"src" : 	"gente1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -.7
					}
				},


				{
					"id" : 		"gente2",
					"name" : 	"gente2",
					"class" : 	"gente2",
					"src" : 	"gente2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -.9
					}
				},

				{
					"id" : 		"terreno2",
					"name" : 	"terreno2",
					"class" : 	"terreno2",
					"src" : 	"terreno2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -.9
					}
				},

				{
					"id" : 		"terreno3",
					"name" : 	"terreno3",
					"class" : 	"terreno3",
					"src" : 	"terreno3.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -1.1
					}
				},

				{
					"id" : 		"terreno4",
					"name" : 	"terreno4",
					"class" : 	"terreno4",
					"src" : 	"terreno4.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -1.5
					}
				},

				{
					"id" : 		"dante",
					"name" : 	"dante",
					"class" : 	"dante",
					"src" : 	"dante.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : -.2,
						"yinc" : -.9
					}
				},

				{
					"id" : 		"virgilio",
					"name" : 	"virgilio",
					"class" : 	"virgilio",
					"src" : 	"virgilio.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 20,
						"ystart" : 10,
						"xinc" : -.4,
						"yinc" : -.9
					}
				},

				{
					"id" : 		"albero2",
					"name" : 	"albero2",
					"class" : 	"albero2",
					"src" : 	"albero2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -.60
					}
				},

				{
					"id" : 		"albero3",
					"name" : 	"albero3",
					"class" : 	"albero3",
					"src" : 	"albero3.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : -.80
					}
				},

				{
					"id" : 		"cornice",
					"name" : 	"cornice",
					"class" : 	"cornice",
					"src" : 	"cornice.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},

			]
		},


		{
			"id" : 		"diavoli_volanti", 
			"canto":    "01",
			"cantica":  "21",
			"verso":    "01",
			"text": "",
			"areas" : [
				{
					"id" : 		"cielo",
					"name" : 	"cielo",
					"class" : 	"cielo",
					"src" : 	"cielo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -10,
						"ystart" : 0,
						"xinc" : .4,
						"yinc" : 0
					}
				},

				{
					"id" : 		"sfondo",
					"name" : 	"sfondo",
					"class" : 	"sfondo",
					"src" : 	"sfondo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : -.10
					}
				},

				{
					"id" : 		"montagna1",
					"name" : 	"montagna1",
					"class" : 	"montagna1",
					"src" : 	"montagna1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" :0,
						"yinc" : -.10
					}
				},

 				{
					"id" : 		"albero1",
					"name" : 	"albero1",
					"class" : 	"albero1",
					"src" : 	"albero1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : -.2
					}
				},

				{
					"id" : 		"roccia",
					"name" : 	"roccia",
					"class" : 	"roccia",
					"src" : 	"roccia.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : -.30
					}
				},

				{
					"id" : 		"nuvole",
					"name" : 	"nuvole",
					"class" : 	"nuvole",
					"src" : 	"nuvole.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : .30,
						"yinc" : -.30
					}
				},

				{
					"id" : 		"persone1",
					"name" : 	"persone1",
					"class" : 	"persone1",
					"src" : 	"persone1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" :10,
						"xinc" : 0,
						"yinc" : -.20
					}
				},

				{
					"id" : 		"nebbia",
					"name" : 	"nebbia",
					"class" : 	"nebbia",
					"src" : 	"nebbia.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 10,
						"ystart" : 0,
						"xinc" : -.30,
						"yinc" : -.3
					}
				},


				{
					"id" : 		"diavolo_alto",
					"name" : 	"diavolo_alto",
					"class" : 	"diavolo_alto",
					"src" : 	"diavolo_alto.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : -.35
					}
				},

				{
					"id" : 		"diavolo_sin1",
					"name" : 	"diavolo_sin1",
					"class" : 	"diavolo_sin1",
					"src" : 	"diavolo_sin1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -10,
						"ystart" : 10,
						"xinc" : .70,
						"yinc" : -.2
					}
				},


				{
					"id" : 		"diavolo_sin2",
					"name" : 	"diavolo_sin2",
					"class" : 	"diavolo_sin2",
					"src" : 	"diavolo_sin2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -10,
						"ystart" : 10,
						"xinc" : .40,
						"yinc" : -.3
					}
				},

				{
					"id" : 		"persone2",
					"name" : 	"persone2",
					"class" : 	"persone2",
					"src" : 	"persone2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : -.350
					}
				},

				{
					"id" : 		"persone3",
					"name" : 	"persone3",
					"class" : 	"persone3",
					"src" : 	"persone3.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : -.45
					}
				},

				{
					"id" : 		"tizio1",
					"name" : 	"tizio1",
					"class" : 	"tizio1",
					"src" : 	"tizio1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : 0,
						"yinc" : .4
					}
				},

				{
					"id" : 		"diavolo1",
					"name" : 	"diavolo1",
					"class" : 	"diavolo1",
					"src" : 	"diavolo1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 10,
						"xinc" : -.40,
						"yinc" : .30
					}
				},

				{
					"id" : 		"persone4",
					"name" : 	"persone4",
					"class" : 	"persone4",
					"src" : 	"persone4.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : -.50
					}
				},

				{
					"id" : 		"cornice",
					"name" : 	"cornice",
					"class" : 	"cornice",
					"src" : 	"cornice.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : -40,
						"ystart" : -40,
						"xinc" : 0,
						"yinc" : 0
					}
				},

			]
		},


		{
			"id" : 		"minosse",
			"canto":    "01",
			"cantica":  "05",
			"verso":    "02",
			"text": "",
			"areas" : [
				{
					"id" : 		"sfondo",
					"name" : 	"sfondo",
					"class" : 	"sfondo",
					"src" : 	"sfondo.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},


				{
					"id" : 		"mare",
					"name" : 	"mare",
					"class" : 	"mare",
					"src" : 	"mare.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : -.10
					}
				},

				{
					"id" : 		"pali",
					"name" : 	"pali",
					"class" : 	"pali",
					"src" : 	"pali.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},


				{
					"id" : 		"minosse1",
					"name" : 	"minosse1",
					"class" : 	"minosse1",
					"src" : 	"minosse1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},


				{
					"id" : 		"minosse2",
					"name" : 	"minosse2",
					"class" : 	"minosse2",
					"src" : 	"minosse2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},


				{
					"id" : 		"destra1",
					"name" : 	"destra1",
					"class" : 	"destra1",
					"src" : 	"destra1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},


				{
					"id" : 		"destra2",
					"name" : 	"destra2",
					"class" : 	"destra2",
					"src" : 	"destra2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},


				{
					"id" : 		"mare2",
					"name" : 	"mare2",
					"class" : 	"mare2",
					"src" : 	"mare2.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},


				{
					"id" : 		"sinistra1",
					"name" : 	"sinistra1",
					"class" : 	"sinistra1",
					"src" : 	"sinistra1.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},

				{
					"id" : 		"avanti",
					"name" : 	"avanti",
					"class" : 	"avanti",
					"src" : 	"avanti.png",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},

			]
		},

//////////////////////////

		{
			"id" : 		"id", // template, don't delete!
			"canto":    "00",
			"cantica":  "00",
			"verso":    "00",
			"text": "",
			"areas" : [
				{
					"id" : 		"",
					"name" : 	"",
					"class" : 	"",
					"src" : 	"",
					"layerOrder" : 0, // 0 = background
					"move" : {
						"type" : "simple", // ="path" if  multiple points (to be implemented)
						"points" : [], // empty if type is "simple"
						"xstart" : 0,
						"ystart" : 0,
						"xinc" : 0,
						"yinc" : 0
					}
				},


			]
		},

	]
};

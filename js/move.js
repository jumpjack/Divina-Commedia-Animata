// Definition of areas and movements
movements = {
	"steps" 	: 60, //REPEAT
	"interval" 	: 100, // in setInterval()
	"images" 	:  [
		{
			"id" : 		"selva_oscura",
			"canto":    "01",
			"cantica":  "01",
			"verso":    "01",
			"text": "",
			"areas" : [

				{
					"id" : 		"buio",
					"name" : 	"buio",
					"class" : 	"buio",
					"src" : 	"buiod.png",
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
					"src" : 	"vuotac.png",
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
						"yinc" : -.3
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
		}
	]
};

// Elenco immagini statiche per pagina con testo e prosa a fronte, con popup sui versi che hanno le immagini

for (canticaIndex = 1; canticaIndex <= commedia.children.length; canticaIndex++) {
	cantica = commedia.children[canticaIndex-1];
	for (cantoIndex = 1; cantoIndex <= cantica.children.length; cantoIndex++) {
		canto = cantica.children[cantoIndex-1]
		for(terzinaIndex = 1; terzinaIndex <= canto.children.length; terzinaIndex++) {
			terzina = canto.children[terzinaIndex-1];
			for(endecasillaboIndex = 1; endecasillaboIndex <= terzina.children.length; endecasillaboIndex++) {
				appoggio = {"type" : "Terzina", "number" : terzina.number, "children" : terzina.children, "imagePath" : "",  "imagePathLong" : "", "imageName" : ""};
				commedia.children[canticaIndex-1].children[cantoIndex-1].children[terzinaIndex-1] = appoggio;
			}
		}
	}
console.log(canticaIndex);
}



commedia.children[1-1].children[01-1].children[01-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_1_%28I_found_myself_within_a_forest_dark...%29.jpg/459px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_1_%28I_found_myself_within_a_forest_dark...%29.jpg";
commedia.children[1-1].children[01-1].children[01-1].imagePathLong =       "https://upload.wikimedia.org/wikipedia/commons/b/be/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_1_%28I_found_myself_within_a_forest_dark...%29.jpg";

commedia.children[1-1].children[01-1].children[11-1].imagePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_2_%28the_panther%29.jpg/730px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_2_%28the_panther%29.jpg";

commedia.children[1-1].children[01-1].children[16-1].imagePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_3_%28The_lion%29.jpg/491px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_3_%28The_lion%29.jpg";
commedia.children[1-1].children[01-1].children[16-1].imagePathLong = "https://upload.wikimedia.org/wikipedia/commons/7/72/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_3_%28The_lion%29.jpg";

commedia.children[1-1].children[01-1].children[30-1].imagePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_4_%28Dante_meets_Virgil%29.jpg/488px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_4_%28Dante_meets_Virgil%29.jpg";
commedia.children[1-1].children[01-1].children[46-1].imagePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_5_%28End_of_Canto_I%29.jpg/488px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_5_%28End_of_Canto_I%29.jpg";

commedia.children[1-1].children[02-1].children[01-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_6_%28Start_of_Canto_II_-_Day_was_departing%29.jpg/800px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_6_%28Start_of_Canto_II_-_Day_was_departing%29.jpg";
commedia.children[1-1].children[02-1].children[01-1].imagePathLong =       "https://upload.wikimedia.org/wikipedia/commons/3/38/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_6_%28Start_of_Canto_II_-_Day_was_departing%29.jpg";

commedia.children[1-1].children[02-1].children[24-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_7_%28Beatrice%29.jpg/800px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_7_%28Beatrice%29.jpg";
commedia.children[1-1].children[02-1].children[24-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/7/79/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_7_%28Beatrice%29.jpg";

commedia.children[1-1].children[03-1].children[03-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_8_%28Canto_III_-_Abandon_all_hope_ye_who_enter_here%29.jpg/1024px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_8_%28Canto_III_-_Abandon_all_hope_ye_who_enter_here%29.jpg";
commedia.children[1-1].children[03-1].children[03-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/3/3e/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_8_%28Canto_III_-_Abandon_all_hope_ye_who_enter_here%29.jpg";

commedia.children[1-1].children[03-1].children[28-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_9_%28Canto_III_-_Charon%29.jpg/436px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_9_%28Canto_III_-_Charon%29.jpg";
commedia.children[1-1].children[03-1].children[28-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/3/32/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_9_%28Canto_III_-_Charon%29.jpg";

commedia.children[1-1].children[03-1].children[37-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_10_%28Canto_III_-_Charon_herds_the_sinners_onto_his_boat%29.jpg/1024px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_10_%28Canto_III_-_Charon_herds_the_sinners_onto_his_boat%29.jpg";
commedia.children[1-1].children[03-1].children[37-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_10_%28Canto_III_-_Charon_herds_the_sinners_onto_his_boat%29.jpg";

commedia.children[1-1].children[04-1].children[14-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_11_%28Canto_IV_-_Limbo%2C_the_Viruous_Pagans%29.jpg/1024px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_11_%28Canto_IV_-_Limbo%2C_the_Viruous_Pagans%29.jpg";
commedia.children[1-1].children[04-1].children[14-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/8/85/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_11_%28Canto_IV_-_Limbo%2C_the_Viruous_Pagans%29.jpg";

commedia.children[1-1].children[04-1].children[32-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_12_%28Canto_IV_-_Limbo%2C_Dante_is_accepted_as_an_equal_by_the_great_Greek_and_Roman_poets%29.jpg/800px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_12_%28Canto_IV_-_Limbo%2C_Dante_is_accepted_as_an_equal_by_the_great_Greek_and_Roman_poets%29.jpg";
commedia.children[1-1].children[04-1].children[32-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/8/80/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_12_%28Canto_IV_-_Limbo%2C_Dante_is_accepted_as_an_equal_by_the_great_Greek_and_Roman_poets%29.jpg";

commedia.children[1-1].children[05-1].children[2-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_13_%28Canto_V_-_Minos%29.jpg/732px-Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_13_%28Canto_V_-_Minos%29.jpg";
commedia.children[1-1].children[05-1].children[2-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/5/57/Gustave_Dor%C3%A9_-_Dante_Alighieri_-_Inferno_-_Plate_13_%28Canto_V_-_Minos%29.jpg";

commedia.children[1-1].children[05-1].children[11-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Inferno_Canto_5_lines_32-33.jpg/398px-Inferno_Canto_5_lines_32-33.jpg";
commedia.children[1-1].children[05-1].children[11-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/a/a3/Inferno_Canto_5_lines_32-33.jpg";

commedia.children[1-1].children[05-1].children[25-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Dore_Gustave_Francesca_and_Paolo_da_Rimini_Canto_5_73-75.jpg/475px-Dore_Gustave_Francesca_and_Paolo_da_Rimini_Canto_5_73-75.jpg";
commedia.children[1-1].children[05-1].children[25-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/f/ff/Dore_Gustave_Francesca_and_Paolo_da_Rimini_Canto_5_73-75.jpg";

commedia.children[1-1].children[05-1].children[36-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Inferno_Canto_5_lines_105-106.jpg/733px-Inferno_Canto_5_lines_105-106.jpg";
commedia.children[1-1].children[05-1].children[36-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/c/cc/Inferno_Canto_5_lines_105-106.jpg";

commedia.children[1-1].children[05-1].children[45-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Inferno_Canto_5_lines_134-135.jpg/396px-Inferno_Canto_5_lines_134-135.jpg";
commedia.children[1-1].children[05-1].children[45-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/3/35/Inferno_Canto_5_lines_134-135.jpg";

commedia.children[1-1].children[05-1].children[48-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Inferno_Canto_5_lines_137-138.jpg/393px-Inferno_Canto_5_lines_137-138.jpg";
commedia.children[1-1].children[05-1].children[48-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/7/7f/Inferno_Canto_5_lines_137-138.jpg";

commedia.children[1-1].children[06-1].children[9-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Inferno_Canto_6_lines_24-26.jpg/741px-Inferno_Canto_6_lines_24-26.jpg";
commedia.children[1-1].children[06-1].children[9-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/2/2f/Inferno_Canto_6_lines_24-26.jpg";

commedia.children[1-1].children[06-1].children[17-1].imagePath = 	 "https://upload.wikimedia.org/wikipedia/commons/a/a1/Inferno_Canto_6_lines_49-52.jpg";
commedia.children[1-1].children[06-1].children[17-1].imagePathLong = 	   "https://upload.wikimedia.org/wikipedia/commons/a/a1/Inferno_Canto_6_lines_49-52.jpg";




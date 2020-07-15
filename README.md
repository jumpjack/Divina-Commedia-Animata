# Divina-Commedia-Animata
Le più belle illustrazioni della Divina Commedia, di Gustave Dorè e altri autori, animate e arricchite con effetti di tridimensionalità.

Esistono molte edizioni cartacee di lusso della Divina Commedia, impreziosite dalle bellissime stampe di Gustave Dorè e altri grandi artisti del passato. Adesso è possibile godere di queste illustrazioni, nella lettura della Divina Commedia, in forma più moderna e coinvolgente, grazie all'animazione di oggetti e personaggi delle illustrazioni.

Il programma è strutturato in modo che chiunque possa aggiungere ulteriori immagini animate, semplicemente aggiungendo in un array elementi che elencano quali parti dell'immagine devono venire spostate e in che direzione; unica vera difficoltà è modificare manualmente le immagini in modo da ricostruire a mano le parti di sfondo che nell'originale sono coperte dagli oggetti che si andranno ad animare.

Le immagini devono essere salvate in formato PNG con trasparenza abilitata, e memorizzate nell'array nella sequenza con cui devono sovrapporsi l'una all'altra per coprire correttamente sfondo e oggetti più distanti.

Ogni immagine è rappresentata da un oggetto così strutturato:

{
  "id" : 		"leone", 
  "canto":    "01",
  "cantica":  "01",
  "verso":    "16",
  "text": "", // Testo a cui si riferisce l'immagine
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
    // altri elementi/aree da far muovere nell'immagine
    }

  ]
}
    
Ogni immagine/oggetto è membro dell'array "images" contenuto nell'oggetto principale "movements" nel file "move.js":

  movements = {
    "steps" 	: 60, // Numero delle volte che vengono incrementate le coordinate (x,y) dell'immagine.
    "interval" 	: 100, // Intervallo tra un incremento e l'altro.
    "images" 	:  []
   }
 
 
Quindi ogni area soggetta a movimento automatico risulta raggiungibile tramite il percorso:

movements.images[imageIndex].areas[areaIndex]

In ogni area è presente un oggetto"move" che ne definisce il movimento, che è l'unica parte di interesse per chi vuole aggiungere nuove immagini:

  "move" : {
    "type" : "simple", // ="path" if  multiple points (to be implemented)
    "points" : [], // empty if type is "simple" (to be implemented)
    "xstart" : 0, // Posizione iniziale; "0" se è la stessa dell'immagine originale statica.
    "ystart" : 0, // Posizione iniziale; "0" se è la stessa dell'immagine originale statica.
    "xinc" : -0.6, // Incremento orizzontale della posizione; positivo = verso destra
    "yinc" : 0     // Incremento verticale della posizione; positivo = verso il basso
  }

L'immagine viene costruita all'interno del DIV "imgContainer".

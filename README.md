# Divina-Commedia-Animata
![anim](https://github.com/jumpjack/Divina-Commedia-Animata/blob/master/immagini/01_01_46/anim.mini.gif)

Wiki: https://github.com/jumpjack/Divina-Commedia-Animata/wiki

Le più belle illustrazioni della Divina Commedia, di Gustave Dorè e altri autori, animate e arricchite con effetti di tridimensionalità.

Esistono molte edizioni cartacee di lusso della Divina Commedia, impreziosite dalle bellissime stampe di Gustave Dorè e altri grandi artisti del passato. Adesso è possibile godere di queste illustrazioni, nella lettura della Divina Commedia, in forma più moderna e coinvolgente, grazie all'animazione di oggetti e personaggi delle illustrazioni.

Il programma è strutturato in modo che chiunque possa aggiungere ulteriori immagini animate, semplicemente aggiungendo in un array elementi che elencano quali parti dell'immagine devono venire spostate e in che direzione; unica vera difficoltà è modificare manualmente le immagini in modo da ricostruire a mano le parti di sfondo che nell'originale sono coperte dagli oggetti che si andranno ad animare.

Le immagini devono essere salvate in formato PNG con trasparenza abilitata, e memorizzate nell'array nella sequenza con cui devono sovrapporsi l'una all'altra per coprire correttamente sfondo e oggetti più distanti.

Ogni immagine è rappresentata da un oggetto così strutturato:

<pre>
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

</pre>
Ogni immagine/oggetto è membro dell'array "images" contenuto nell'oggetto principale "movements" nel file "move.js":

<pre>
  movements = {
    "steps" 	: 60, // Numero delle volte che vengono incrementate le coordinate (x,y) dell'immagine.
    "interval" 	: 100, // Intervallo tra un incremento e l'altro.
    "images" 	:  []
   }
</pre> 
 
Quindi ogni area soggetta a movimento automatico risulta raggiungibile tramite il percorso:

movements.images[imageIndex].areas[areaIndex]

In ogni area è presente un oggetto"move" che ne definisce il movimento, che è l'unica parte di interesse per chi vuole aggiungere nuove immagini:

<pre>
"move" : {
    "type" : "simple", // ="path" if  multiple points (to be implemented)
    "points" : [], // empty if type is "simple" (to be implemented)
    "xstart" : 0, // Posizione iniziale; "0" se è la stessa dell'immagine originale statica.
    "ystart" : 0, // Posizione iniziale; "0" se è la stessa dell'immagine originale statica.
    "xinc" : -0.6, // Incremento orizzontale della posizione; positivo = verso destra
    "yinc" : 0     // Incremento verticale della posizione; positivo = verso il basso
  }
</pre>

L'immagine viene costruita all'interno del DIV "imgContainer".

<hr>
Changelog

0.0.3 - Adesso l'animazione tramite DIV è nascosta all'utente, usata solo per percaricare le immagini; una volta precaricate, vengono copiate
in un canvas; questo dovrebbe rendere possibile esportare l'animazione in formato GIF. Listbox presente ma ancora non attiva.

0.0.2 - Prima versione pubblica, ancora draft, con immagine non selezionabile (listbox presente ma non attiva).

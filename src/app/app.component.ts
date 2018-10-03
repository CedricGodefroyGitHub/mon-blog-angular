import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon blog Angular';

  posts = [
		{
		  title: 'Gestion des like',
		  content: 'Un clique sur "+" augmente la valeur initiale du compteur de 1 like et sa couleur devient verte. Un clique sur "-" diminie la valeur initiale du compteur de 1 like et le compteur devient rouge. En cliquant une deuxième fois sur "+" ou "-", le compteur revient à la valeur initiale et ne possède pas de couleur particulière.',
  		  loveIts: 1,
		  created_at: '02/10/2018, 10:00 AM'
		},

		{
		  title: 'Couleur des posts',
		  content: 'Le post est vert si le compteur est positif, blanc si le compteur est à 0 et rouge si le compteur est négatif.',
  		  loveIts: 0,
		  created_at: '03/10/2018, 09:30 AM'
		},

		{
		  title: 'Mise en page',
		  content: 'J\'ai laissé le logo Angular car je le trouve sympa. J\ai choisi Bootstrap 4 par habitude.',
  		  loveIts: -1,
		  created_at: '04/10/2018, 04:52 AM'
		}
	];
}

1. Lancer index.html dans votre navigateur pr�f�r�
2. Appr�cier la classe avec les outils de debug (F12)
3. Pour instancier la classe, il s'agit de proc�der comme suit:
var calc = new Calculator(10);
4. La valeur pass�e au constructeur est optionnelle.

Note: Je n'ai pas impl�ment� la fonction gamma qui calcule une factoriel d'un nombre r�el. Donc, la fonction
ne fonctionne que s'il s'agit d'un nombre entier. Dans le cas o� un nombre r�el est pass� � la fonction, alors
elle l�ve une exception de type "notImplementedException".

Note2: main.js contient quelques tests unitaires. C'est loin d'�tre complet, mais c'est un d�but.
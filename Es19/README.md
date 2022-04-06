# Object Copying - Exercise 1
In questo esercizio sono stati creati due oggeti: `person1` e `person2`. All'oggetto `person2` è stato assegnato l'oggetto `person1`. Si desidera che venga modificata la proprietà `firstName` dell'oggetto `person2` in "Simon".

Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche l'oggetto `person1`?

Perché con l'istruzione `const person2 = person1` si assegna all'oggetto person2 la stessa locazione di memoria di person1, per tanto modificando person 2 si modifica la locazione di memoria anche di person1.
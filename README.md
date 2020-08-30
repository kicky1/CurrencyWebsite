# University project - "Kantor walut"

## Spis treści 
* [Cel](#cel-)
* [Założenia](#założenia-)
* [Osiągnięcia](#osiągnięcia-)
* [Instalacja](#instalacja-)

## Cel :
Strona została założona jako projekt na przedmiot "Protokoły wymiany danych w systemach" 

## Założenia : 
* Stworzyć prosty serwer www generujący lokalną stronę WWW w sposób dynmiczny
* Stworzyć czat pozwalający na wymianę wiadomości między użytkownikami
* Stworzyć program automatycznie pobierający kursy walut – klienta WWW

### Osiągnięcia : 
W związku z pomysłem na rozwinięcie projektu wraz z Tomaszem Gruzdzisem uznaliśmy podjąć wspólną pracę, dzięki temu powstała strona e-kantor.
Strona ta zawiera wszystkie elementy założeń, jest wpełni responsywna oraz została rozwinięta o konwerter walutowy. 

Zdecydowano się na stworzenie strony w React.js wykorzystujący przy tym : 
* HTML5
* CSS
* JavaScript
* Bootstrap
* Material-UI
* W3cwebsocket

## Instalacja : 
W celu włączenia projektu należy :

### 1. Pobrać repozutorium 
```
git clone https://github.com/kicky1/CurrencyWebsite.git
```
### 2. Posiadać zainstalowanego Reacta oraz Node.js
Wersja : 
* npm >= 6.14.6
* node >= v12.18.3
### 3. Pobrać npm dla obu folderów Chat_Server oraz CurrencyWebsite
```
npm install
```
### 4. Włączyć npm najpierw dla serwera a następnie dla strony
```
npm start
```

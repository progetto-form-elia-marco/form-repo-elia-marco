# Test React Route - Cambio dei gruppi (26/04/21)

## Pagina da replicare

https://colorlib.com/etc/lf/Login_v9/index.html

## Librerie utilizzate

- Tostify
- React Router Dom

## Cose da implementare

- [x] Aggiungere ombra sulle input box che sono poco visibili
- [x] Ombra sui bottoni Facebook e Google sempre sull’hover
- [x] Separare componente UiInputbox e UiCheckbox.
- [x] Finire lo stile di Register e Welcome
- [x] Cambiare stile checkbox Register
- [x] Stile ForgetPassword
- [x] Modificare stile radio button e border radius
- [x] Modificare Title in register
- [x] Pop-up

- [x] Aggiungere oggetto a ls con utente attivo (mail)
- [x] Aggiungi UIInputbox a forgotPsw (mail)
- [x] Modificare Welcome marco@marco (ridare Welcome Marco)
- [ ] Fixare colore radio button in register

- [x] Da login, inserisci mail, controlla nel ls, se non esiste aggiungi un tostify che avvisa che l'account non esiste, sennò controlla password; se sbagliata => tostify, oppure vai a welcome.
- [x] Da register: inserisci tutti i dati, se la mail esiste => tostify ("Account già registrato"), sennò aggiorna il ls aggiungendo email e psw nuove.
- [x] Da Welcome: clear quando si fa il log out dell'utente attivo

- [x] Da forgotPsw: controllo se esiste mail in ls, e modificare la psw associata a quella mail. Se email non esiste, aggiungere un tostify

-[ ] Utils mail -[ ] Fixare tostify inutili in Formlogin.js

## File Controllati

### React files

- [x] Welcome.js (ricordare di togliere il costruttore se non servirà)
- [x] FormRegister.js
- [ ] FormLogin.js
- [ ] ForgotPsw.js
- [ ] UiButton.js
- [ ] UiInputbox.js
- [ ] UiCheckbox.js
- [ ] UiSelect.js

### CSS files

- [x] register.css
- [x] welcome.css
- [x] login.css
- [x] forgotpsw.css
- [x] uiButton.css
- [ ] uiInputbox.css
- [ ] uiCheckbox.css

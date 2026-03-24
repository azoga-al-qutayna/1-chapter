let password;

do {
    password = prompt("Введите пароль");

    if (password === null) {
        alert("Вход отменён");
        window.location.href = "about:blank";
        break;
    }

} while (password !== "42064");

if (password === "42064") {
    alert("Добро пожаловать на сайт Азоги!");
}

// $(function() {

/* Menu nav toggle*/
 $("#nav_toggle").on("click", function(event) {
event.preventDefault();
   $(this).toggleClass("active");
   $("#nav").toggleClass("active");

 });






// });


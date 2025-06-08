$(document).ready(function () {
    // Toggle password visibility
    $(".toggle-password").click(function () {
        const passwordInput = $(this).siblings("input");
        const type =
            passwordInput.attr("type") === "password" ? "text" : "password";
        passwordInput.attr("type", type);

        // Toggle eye icon
        $(this).toggleClass("fa-eye fa-eye-slash");
    });
});

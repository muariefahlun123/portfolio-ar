<?php

// Hanya proses request POST.
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Ambil field form dan hapus spasi ekstra.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Cek apakah data sudah dikirim ke mailer.
    // Pemeriksaan 'empty($budget)' DIHAPUS dari sini.
    if ( empty($name) OR empty($subject) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set kode respon 400 (bad request) dan keluar.
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Set alamat email penerima.
    $recipient = "muariefahlun123@gmail.com";

    // Set subjek email.
    $sender = "New contact from $name";

    // Email Header (opsional, bisa dihapus jika tidak perlu).
    $head = " /// MARVELTHEME \\\ ";

    // Buat konten email.
    $email_content = "$head\n\n\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message:\n$message\n";

    // Buat header email.
    $email_headers = "From: $name <$email>";

    // Kirim email.
    if (mail($recipient, $sender, $email_content, $email_headers)) {
        // Set kode respon 200 (okay).
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        // Set kode respon 500 (internal server error).
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

} else {
    // Bukan request POST, set kode respon 403 (forbidden).
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

?>
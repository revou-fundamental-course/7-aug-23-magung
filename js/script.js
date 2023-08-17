document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const resultLuasDiv = document.querySelector("#result_luas");
    const resultKelilingDiv = document.querySelector("#result_keliling");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const alas = parseFloat(document.querySelector("#alas").value);
        const tinggi = parseFloat(document.querySelector("#tinggi").value);
        const s1 = parseFloat(document.querySelector("#s1").value);
        const s2 = parseFloat(document.querySelector("#s2").value);
        const s3 = parseFloat(document.querySelector("#s3").value);

        if (!isNaN(alas) && !isNaN(tinggi)) {
            const luas = 0.5 * alas * tinggi;
            resultLuasDiv.innerHTML = `L = 1/2 x a x t<br>L = 1/2 x ${alas} x ${tinggi}<br>L = ${luas}`;
        } else {
            resultLuasDiv.textContent = "Masukkan nilai yang valid.";
        }

        if (!isNaN(s1) && !isNaN(s2) && !isNaN(s3)) {
            const keliling = s1 + s2 + s3;
            resultKelilingDiv.innerHTML = `K = S1 + S2 + S3<br>K = ${s1} + ${s2} + ${s3}<br>K = ${keliling}`;
        } else {
            resultKelilingDiv.textContent = "Masukkan nilai yang valid.";
        }
    });

    form.addEventListener("reset", function() {
        resultLuasDiv.textContent = "";
        resultKelilingDiv.textContent = "";
    });
});

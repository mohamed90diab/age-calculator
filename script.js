function calculateAge() {
    let birthDate = new Date(document.getElementById("birthdate").value);
    let today = new Date();

    let ageInMilliseconds = today - birthDate;
    let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    let ageInWeeks = Math.floor(ageInDays / 7);
    let ageInMonths = Math.floor(ageInDays / 30.44);
    let ageInYears = Math.floor(ageInDays / 365.25);
    let ageInHours = Math.floor(ageInMilliseconds / (1000 * 60 * 60));
    let ageInMinutes = Math.floor(ageInMilliseconds / (1000 * 60));

    document.getElementById("ageDays").innerHTML = "العمر بالأيام: " + ageInDays;
    document.getElementById("ageWeeks").innerHTML = "العمر بالأسابيع: " + ageInWeeks;
    document.getElementById("ageMonths").innerHTML = "العمر بالشهور: " + ageInMonths;
    document.getElementById("ageYears").innerHTML = "العمر بالسنوات: " + ageInYears;
    document.getElementById("ageHours").innerHTML = "العمر بالساعات: " + ageInHours;
    document.getElementById("ageMinutes").innerHTML = "العمر بالدقائق: " + ageInMinutes;
}

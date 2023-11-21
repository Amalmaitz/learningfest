function calculateEMI() {
    try {

        var principal = parseFloat(document.getElementById("principal").value);
        var annualRate = parseFloat(document.getElementById("annualRate").value);
        var loanTenure = parseInt(document.getElementById("loanTenure").value);


        if (isNaN(principal) || isNaN(annualRate) || isNaN(loanTenure)) {
            throw new Error("Please enter valid numeric values.");
        }

        var monthlyRate = annualRate / 12 / 100;
        var emi = principal * monthlyRate * Math.pow((1 + monthlyRate), loanTenure) / (Math.pow((1 + monthlyRate), loanTenure) - 1);


        document.getElementById("result").innerText = "EMI: " + emi.toFixed(2);
    } catch (error) {
        document.getElementById("result").innerText = "Error: " + error.message;
    }
}
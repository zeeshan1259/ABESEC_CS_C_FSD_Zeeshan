const nums1 = document.getElementById("num1");
const nums2 = document.getElementById("num2");
const output = document.getElementById("output");

// Input validation function
function validateInputs() {
    if (nums1.value === "" || nums2.value === "") {
        output.innerHTML = "Please enter both numbers";
        output.style.color = "red";
        return false;
    }
    output.style.color = "black";
    return true;
}

// Arithmetic functions
function add() {
    if (!validateInputs()) return;
    const result = Number(nums1.value) + Number(nums2.value);
    output.innerHTML = "Result: " + result;
}

function sub() {
    if (!validateInputs()) return;
    const result = Number(nums1.value) - Number(nums2.value);
    output.innerHTML = "Result: " + result;
}

function mul() {
    if (!validateInputs()) return;
    const result = Number(nums1.value) * Number(nums2.value);
    output.innerHTML = "Result: " + result;
}

function div() {
    if (!validateInputs()) return;
    if (Number(nums2.value) === 0) {
        output.innerHTML = "Cannot divide by zero";
        output.style.color = "red";
        return;
    }
    const result = Number(nums1.value) / Number(nums2.value);
    output.innerHTML = "Result: " + result;
}

// Link buttons to functions
document.getElementById("addBtn").addEventListener("click", add);
document.getElementById("subBtn").addEventListener("click", sub);
document.getElementById("mulBtn").addEventListener("click", mul);
document.getElementById("divBtn").addEventListener("click", div);
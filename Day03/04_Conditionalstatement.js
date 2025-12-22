function launchBrowser(browserName)
{
if (browserName === "Chrome") 
    console.log("Launching Chrome Browser");
else if (browserName === "Firefox")
    console.log("Launching Firefox Browser");
}

function runTests(testType)
{
switch (testType) {
    case "unit":
        console.log("Running Unit Tests")
        break;
    case "integration":
        console.log("Running Integration Tests")
        break;
    case "e2e":
        console.log("Running End-to-End Tests")
        break;
    default:
        console.log("Unknown Test Type")
}
}
launchBrowser("Chrome")
runTests("integration")

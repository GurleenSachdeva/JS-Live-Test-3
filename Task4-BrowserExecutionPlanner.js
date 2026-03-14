function browserExecutionPlanner(supportedBrowsers, blockedBrowsers){
    const runnable=supportedBrowsers.filter(browser => !blockedBrowsers.includes(browser));  // it will filter the browsers that are runnable and not in blocked browsers
    const blocked=supportedBrowsers.filter(browser => blockedBrowsers.includes(browser)); // it will filter the browsers that need to be skipped and are in blocked browsers
    const plan=`Run on : ${runnable.join(", ")} | Skip : ${blocked.join(", ")}`;   // it will create a plan string that shows which browsers will be run and which will be skipped
    return { runnable, blocked, plan };
}

allBrowsers = ["chromium", "firefox", "webkit"]
blockedBrowsers = ["firefox"]
console.log(browserExecutionPlanner(allBrowsers, blockedBrowsers));  // it will print the runnable browsers, blocked browsers and the execution plan in a structured format

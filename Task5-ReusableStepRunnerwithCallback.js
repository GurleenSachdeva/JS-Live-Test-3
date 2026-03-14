function runStep(stepName, actionFn){
    console.log(`Starting step: ${stepName}`);

        const result = actionFn();

        return{
            stepName: stepName,
            passed:true,
            message:result
        };
    }


console.log(runStep("open dashboard", () => "Page loaded"))

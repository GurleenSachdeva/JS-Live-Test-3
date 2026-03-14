function normalizeError(message) {
    const normalized = message.trim().toLowerCase().replace(/\s+/g, " ");

    let category = 'GENERAL';
    if (normalized.includes("timeout")) category = "TIMEOUT";
    else if (normalized.includes("locator")) category = "LOCATOR";


    console.log(`Normalized : ${normalized}`)
    console.log(`Category : ${category}`)

}

rawMessage = "Locator not found after TIMEOUT"
normalizeError(rawMessage);


const pup = require("puppeteer");
let id = "dummypuppeteer@gmail.com";
 let pass = "Dummy@101";
 let artist = "Magnus Carlsen";
 async function main(){
    let browser = await pup.launch({
        headless: false,
        defaultViewport: false,
        args : ["--start-maximized"]
    });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.youtube.com");
    await tab.waitForSelector(".style-scope.ytd-button-renderer.style-suggestive.size-small",{visibe : true});
    await tab.click(".style-scope.ytd-button-renderer.style-suggestive.size-small");
    await tab.waitForSelector('input[type="email"]',{visibe : true});
    await tab.type('input[type="email"]',id);
    await delay(1500);
    await tab.click(".VfPpkd-Jh9lGc");
    await tab.waitForSelector('input[type="password"]',{visible : true});
    await tab.type('input[type="password"]',pass);
    await delay(1500);
    await tab.waitForSelector(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b",{visibe : true});
    await tab.click(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b");
    await delay(1500);
    await tab.waitForSelector('input[id="search"]');
    await tab.type('input[id="search"]',artist);
    await tab.click('button[id="search-icon-legacy"]');
    await delay(1500);
    await tab.waitForSelector("#content-section");
    await tab.click("#content-section");
    await delay(1500);
    await tab.goto("https://www.youtube.com/c/magnuscarlsen/videos");
    
    let urls = await tab.$$('#contents a[aria-hidden="true"]');
    let hrefs = [];
    for(let i =0;i<urls.length;i++){
        const handle = urls[i];
        const yourHref = await tab.evaluate(anchor => anchor.getAttribute('href'), handle);

        hrefs.push("https://youtube.com" + yourHref);
    }
    console.log(hrefs);
    
       for(let i =0;i<hrefs.length;i++){
        await tab.goto(hrefs[i]);
        await tab.waitForSelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(1) > a > #button',{visible:true}); // select the element
        await delay(1500);
        await tab.click('#top-level-buttons > ytd-toggle-button-renderer:nth-child(1) > a > #button');
}
    
}
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }
main();
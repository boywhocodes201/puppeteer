const pup = require("puppeteer");
const fs = require('fs');
let id = "dummypuppeteer@gmail.com";
let pass = "Dummy@101";
let tab;
let details = ["Restraunt Name","Contact Details","Location"];
 async function main(){
    let browser = await pup.launch({
        headless: false,
        defaultViewport: false,
        args : ["--start-maximized"]
    });
    let pages = await browser.pages();
    tab = pages[0];
    await tab.goto("https://www.zomato.com/ncr");
    await tab.waitForSelector(".bke1zw-0.cMipmx.cards",{visible: true});
    let urls = await tab.$(".bke1zw-0.cMipmx.cards a");
   // console.log(collections.length);
        const handle = urls;
        const yourHref = await tab.evaluate(anchor => anchor.getAttribute('href'), handle);
    
    //console.log("https://www.zomato.com" + hrefs[0]);
    await tab.goto("https://www.zomato.com" + yourHref);

    await tab.waitForSelector(".bke1zw-0.cMipmx div section a",{visible: true});
    let restros = await tab.$$(".bke1zw-0.cMipmx div section a");
    //console.log(restros.length);
    let restroshrefs = [];
    for(let i =0;i<15;i++){
        const handle = restros[i];
        const yourHref = await tab.evaluate(anchor => anchor.getAttribute('href'), handle);
        if(yourHref[yourHref.length-1] !== typeof('a') || yourHref[yourHref.length-1] !== typeof('/') )
            restroshrefs.push(yourHref);
    }
    console.log(restroshrefs);

//   for(let j =0;j<restroshrefs.length;j++){  
//     await tab.goto(restroshrefs[j]);
//     await tab.waitForSelector(".yvzia9-0.npaix",{visible:true});
//     // let foodmenu = await tab.$("#TabLink__3 a");
//     // const foodmenuhref = await tab.evaluate(anchor => anchor.getAttribute('href'),foodmenu);
//     // await tab.goto(foodmenuhref);
    
//     await tab.waitForSelector(".sc-7kepeu-0",{visible:true});
//     let restroname = await tab.$(".sc-7kepeu-0");
//     let value = await tab.evaluate(el => el.textContent,restroname);
//     var str   = value;
//     var stringArray = str.split(/(\s+)/);
//     stringArray = stringArray.filter(e=>e !== 'Menu/');
//     var ans = stringArray[0];
//     for(let i = 1;i<stringArray.length;i++){
//         ans += stringArray[i];
//     }
//     details[0] = "Restraunt Name :" + ans;

//     let location = await tab.$(".sc-1hez2tp-0.clKRrC");
//     let locationName = await tab.evaluate(el => el.textContent,location);
//     details[2] = "Location :" + locationName;

//     let contact = await tab.$(".sc-1hez2tp-0.kKemRh");
//     let contactNumber = await tab.evaluate(el => el.textContent,contact);
//     details[1] = "Contact Details :" + contactNumber;
//     console.log(details);
//   }
//    await tab.screenshot({
//     path: "./screenshot.jpg",
//     type: "jpeg",
//     clip: {x: top,y: bottom,width : left,height :right}
//   });

}
main();
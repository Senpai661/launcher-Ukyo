/**
 * @author Luuxis
 * @license CC-BY-NC 4.0 - https://creativecommons.org/licenses/by-nc/4.0/
 */

 const pkg = require('../package.json');
 const fetch = require("node-fetch")
 const convert = require("xml2js")
 const Parse = new convert.Parser()
 let url = pkg.user ? `${pkg.url}/${pkg.user}` : pkg.url
 
 let config = `${url}/launcher/config-launcher/config.json`;
 let news = `https://centralcorp.fr/api/rss`;
 
 class Config {
     GetConfig() {
         return new Promise((resolve, reject) => {
             fetch(config).then(config => {
                 return resolve(config.json());
             }).catch(error => {
                 return reject(error);
             })
         })
     }
 
     async GetNews() {
         let rss = await fetch(news).then(res => res.text()).catch(err => err)
         Parse.parseString(rss, data=>{
            console.log(data)
         })
    }
}
 
 export default new Config;
/**
 * Total all the provided arguments
 * @param  {...number} vals 
 * @returns {number}
 */
const total = (...vals) => vals.reduce((o,v)=>o+v,0);

module.exports =  total;
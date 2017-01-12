let datafile = {
"version": "2",
"projectId": "8156302092",
"experiments": [
{
"status": "Running",
"audienceIds": [ ],
"variations": [
{
"id": "8162530097",
"key": "variation_a"
},
{
"id": "8158894155",
"key": "variation_b"
}
],
"id": "8158623011",
"key": "LANDING_PAGE_UI",
"layerId": "8159627575",
"trafficAllocation": [
{
"entityId": "8162530097",
"endOfRange": 5000
},
{
"entityId": "8158894155",
"endOfRange": 10000
}
],
"forcedVariations": { }
}
],
"audiences": [ ],
"groups": [ ],
"attributes": [ ],
"revision": "3",
"events": [ ],
"accountId": "6763041371"
}

module.exports = {datafile};

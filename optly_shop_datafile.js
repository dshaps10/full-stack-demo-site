let datafile = {
version: "2",
projectId: "8156302092",
experiments: [
{
status: "Running",
audienceIds: [ ],
variations: [
{
id: "8162530097",
key: "variation_a"
},
{
id: "8158894155",
key: "variation_b"
}
],
id: "8158623011",
key: "LANDING_PAGE_UI",
layerId: "8159627575",
trafficAllocation: [
{
entityId: "8162530097",
endOfRange: 5000
},
{
entityId: "8158894155",
endOfRange: 10000
}
],
forcedVariations: { }
},
{
status: "Running",
audienceIds: [ ],
variations: [
{
id: "8154446876",
key: "results_a"
},
{
id: "8161922317",
key: "results_b"
}
],
id: "8161507516",
key: "SEARCH_RESULT_SORTING_EXPERIMENT",
layerId: "8152926864",
trafficAllocation: [
{
entityId: "8154446876",
endOfRange: 5000
},
{
entityId: "8161922317",
endOfRange: 10000
}
],
forcedVariations: { }
},
{
status: "Running",
audienceIds: [ ],
variations: [
{
id: "8172452161",
key: "original_price"
},
{
id: "8176211878",
key: "discounted_price"
}
],
id: "8176471235",
key: "PRICE_TEST",
layerId: "8175460572",
trafficAllocation: [
{
entityId: "8172452161",
endOfRange: 5000
},
{
entityId: "8176211878",
endOfRange: 10000
}
],
forcedVariations: { }
}
],
audiences: [ ],
groups: [ ],
attributes: [ ],
revision: "7",
events: [ ],
accountId: "6763041371"
}

module.exports = {datafile};
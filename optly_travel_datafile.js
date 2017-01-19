let datafile = {
version: "2",
projectId: "8178272148",
experiments: [
{
status: "Running",
audienceIds: [ ],
variations: [
{
id: "8166004652",
key: "results_a"
},
{
id: "8172274403",
key: "results_b"
}
],
id: "8173602397",
key: "TOP_DESTINATIONS_EXPERIMENT",
layerId: "8175333196",
trafficAllocation: [
{
entityId: "8166004652",
endOfRange: 5000
},
{
entityId: "8172274403",
endOfRange: 10000
}
],
forcedVariations: { }
}
],
audiences: [ ],
groups: [ ],
attributes: [ ],
revision: "3",
events: [ ],
accountId: "6763041371"
}

module.exports = {datafile};
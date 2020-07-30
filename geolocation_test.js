Feature('geolocation');

Scenario('grabGeoLocation', async (I) => {
    let geolocation = await I.grabGeoLocation();
    console.log(geolocation);
});


Scenario('setGeoLocation', async (I) => {
    I.setGeoLocation(121.21, 11.56)
});
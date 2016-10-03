module.exports = {
    list: list,
    get: get
}

var heroes = [
        { id: 11, name: 'Mr. Zac' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

function list(req, res) {
    
    res.status(200)
        .contentType('application/json')
        .send(JSON.stringify(heroes));
}

function get(req, res){
    var heroId = req.params.heroId;
    console.log("Get Hero", heroId);
    var data = {"data": "success " + heroId};
    res.status(200)
        .contentType('application/json')
        .send(JSON.stringify(data));

}
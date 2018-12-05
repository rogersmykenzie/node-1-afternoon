const messages = [];
let currId = 0;

const create = (req, res, next) => {
    const text = req.body.text;
    const time = req.body.time;
    const id = currId;
    messages.push({time, text, id});
    res.json(messages);
    currId++;
}
const read = (req, res, next) => {
    res.json(messages);
}
const update = (req, res, next) => {
    const index = messages.findIndex(msg => +msg.id === +req.params.id);
    messages[index] = req.body;
    res.json(messages);
}
const remove = (req, res, next) => {
    console.log('working');
    const index = messages.findIndex(msg => +msg.id === +req.params.id);
    messages.splice(index, 1);
    res.json(messages);
}

module.exports = 
{
    create,
    read,
    update,
    remove
}
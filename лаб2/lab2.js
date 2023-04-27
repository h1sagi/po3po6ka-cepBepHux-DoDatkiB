const fs = require('fs');
const yargs = require('yargs');

const argv = yargs.argv;

const command = argv._[0];
// отримання даних
const getRecords = () => {
  try {
    const dataBuffer = fs.readFileSync('db.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
// збереження
const saveRecords = (records) => {
  const dataJSON = JSON.stringify(records);
  fs.writeFileSync('db.json', dataJSON);
};
// створ. нового запис.
const createRecord = (record) => {
  const records = getRecords();
  records.push(record);
  saveRecords(records);
  console.log('Запис успішно створено');
};
// читання
const readRecords = () => {
  const records = getRecords();
  console.log(records);
};
// апдейт
const updateRecord = (id, updatedRecord) => {
  const records = getRecords();
  const recordToUpdate = records.find((record) => record.id === id);

  if (recordToUpdate) {
    Object.assign(recordToUpdate, updatedRecord);
    saveRecords(records);
    console.log('Запис успішно оновлено');
  } else {
    console.log('Запис не знайдено');
  }
};
// деліт
const deleteRecord = (id) => {
  const records = getRecords();
  const updatedRecords = records.filter((record) => record.id !== id);

  if (records.length !== updatedRecords.length) {
    saveRecords(updatedRecords);
    console.log('Запис успішно видалено');
  } else {
    console.log('Запис не знайдено');
  }
};

switch (command) {
  case 'create':
    createRecord({
      id: argv.id,
      name: argv.name,
      email: argv.email,
    });
    break;
    case 'read':
    readRecords();
    break;
    case 'update':
    updateRecord(argv.id, {
    name: argv.name,
    email: argv.email,
    });
    break;
    case 'delete':
    deleteRecord(argv.id);
    break;
    default:
    console.log('Невідома команда');
    }
    

    
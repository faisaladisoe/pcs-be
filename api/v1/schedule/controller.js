exports.getAllBusSchedule = async (req, res) => {
  try {
    const busSchedules = {
      'red-line': [{
        'license-plate-number': 'D 1100 SHE',
        'capacity': 'crowded',
        'current-position': 'FKM',
        'ETA': '5 mins',
        'line': 'red'
      }, {
        'license-plate-number': 'D 1110 HAK',
        'capacity': 'crowded',
        'current-position': 'FH',
        'ETA': '5 mins',
        'line': 'red'
      }, {
        'license-plate-number': 'D 1100 AMA',
        'capacity': 'crowded',
        'current-position': 'Stasiun UI',
        'ETA': '5 mins',
        'line': 'red'
      }],
      'blue-line': [{
        'license-plate-number': 'D 1101 LIM',
        'capacity': 'crowded',
        'current-position': 'Stasiun UI',
        'ETA': '5 mins',
        'line': 'blue'
      }, {
        'license-plate-number': 'D 1111 SEL',
        'capacity': 'crowded',
        'current-position': 'FPsi',
        'ETA': '5 mins',
        'line': 'blue'
      }, {
        'license-plate-number': 'D 1011 JOK',
        'capacity': 'crowded',
        'current-position': 'FT',
        'ETA': '5 mins',
        'line': 'blue'
      }]
    }

    return busSchedules;
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.getRedBusSchedule = async (req, res) => {
  try {
    const redBusSchedules = {
      'red-line': [{
        'license-plate-number': 'D 1100 SHE',
        'capacity': 'crowded',
        'current-position': 'FKM',
        'ETA': '5 mins',
        'line': 'red'
      }, {
        'license-plate-number': 'D 1110 HAK',
        'capacity': 'crowded',
        'current-position': 'FH',
        'ETA': '5 mins',
        'line': 'red'
      }, {
        'license-plate-number': 'D 1100 AMA',
        'capacity': 'crowded',
        'current-position': 'Stasiun UI',
        'ETA': '5 mins',
        'line': 'red'
      }]
    }

    return redBusSchedules;
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.getBlueBusSchedule = async (req, res) => {
  try {
    const blueBusSchedule = {
      'blue-line': [{
        'license-plate-number': 'D 1101 LIM',
        'capacity': 'crowded',
        'current-position': 'Stasiun UI',
        'ETA': '5 mins',
        'line': 'blue'
      }, {
        'license-plate-number': 'D 1111 SEL',
        'capacity': 'crowded',
        'current-position': 'FPsi',
        'ETA': '5 mins',
        'line': 'blue'
      }, {
        'license-plate-number': 'D 1011 JOK',
        'capacity': 'crowded',
        'current-position': 'FT',
        'ETA': '5 mins',
        'line': 'blue'
      }]
    }

    return blueBusSchedule;
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.createRedBusSchedule = async (req, res) => {
  try {
    const redBusSchedule = []
    newRedBus = {
      'license-plate-number': 'D 1011 JOK',
      'capacity': 'crowded',
      'current-position': 'FT',
      'ETA': '5 mins',
      'line': 'red'
    }
    redBusSchedule.push(newRedBus);
    return newRedBus;
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.createBlueBusSchedule = async (req, res) => {
  try {
    const blueBusSchedule = []
    newBlueBus = {
      'license-plate-number': 'D 1011 JOK',
      'capacity': 'crowded',
      'current-position': 'FT',
      'ETA': '5 mins',
      'line': 'blue'
    }
    blueBusSchedule.push(newBlueBus);
    return newBlueBus;
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.updateRedBusSchedule = async (req, res) => {
  try {
    const { licensePlate } = req.params;
    const redBusSchedule = []
    newRedBus = {
      'license-plate-number': 'D 1011 JOK',
      'capacity': 'crowded',
      'current-position': 'FT',
      'ETA': '5 mins',
      'line': 'red'
    }
    redBusSchedule.push(newRedBus);
    return newRedBus;
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.updateBlueBusSchedule = async (req, res) => {
  try {
    const { licensePlate } = req.params;
    const blueBusSchedule = []
    newBlueBus = {
      'license-plate-number': 'D 1011 JOK',
      'capacity': 'crowded',
      'current-position': 'FT',
      'ETA': '5 mins',
      'line': 'blue'
    }
    blueBusSchedule.push(newBlueBus);
    return newBlueBus;
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.deleteRedBusSchedule = async (req, res) => {
  try {
    const { licensePlate } = req.params;
    const redBusSchedules = {
      'red-line': [{
        'license-plate-number': 'D 1100 SHE',
        'capacity': 'crowded',
        'current-position': 'FKM',
        'ETA': '5 mins',
        'line': 'red'
      }, {
        'license-plate-number': 'D 1110 HAK',
        'capacity': 'crowded',
        'current-position': 'FH',
        'ETA': '5 mins',
        'line': 'red'
      }, {
        'license-plate-number': 'D 1100 AMA',
        'capacity': 'crowded',
        'current-position': 'Stasiun UI',
        'ETA': '5 mins',
        'line': 'red'
      }]
    }
    redBusSchedules.pop();
    return redBusSchedules;
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.deleteBlueBusSchedule = async (req, res) => {
  try {
    const { licensePlate } = req.params;
    const blueBusSchedule = {
      'blue-line': [{
        'license-plate-number': 'D 1101 LIM',
        'capacity': 'crowded',
        'current-position': 'Stasiun UI',
        'ETA': '5 mins',
        'line': 'blue'
      }, {
        'license-plate-number': 'D 1111 SEL',
        'capacity': 'crowded',
        'current-position': 'FPsi',
        'ETA': '5 mins',
        'line': 'blue'
      }, {
        'license-plate-number': 'D 1011 JOK',
        'capacity': 'crowded',
        'current-position': 'FT',
        'ETA': '5 mins',
        'line': 'blue'
      }]
    }
    blueBusSchedule.pop();
    return blueBusSchedule;
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}
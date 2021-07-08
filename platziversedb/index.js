'use strict'

const setupDataBase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function (config) {
  const sequelize = setupDataBase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  //    genera las relaciones de las tablas
  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)

  //    Valida si hay conexión a la base de datos
  await sequelize.authenticate()

  if(config.setup){
      await sequelize.sync({force: true})
  }

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}

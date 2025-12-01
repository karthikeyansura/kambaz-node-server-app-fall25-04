import * as modulesDao from "./dao.js";

export default function ModulesRoutes(app) {
  const deleteModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await modulesDao.deleteModule(moduleId);
    res.json(status);
  };

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const status = await modulesDao.updateModule(moduleId, moduleUpdates);
    res.json(status);
  };

  app.delete("/api/modules/:moduleId", deleteModule);
  app.put("/api/modules/:moduleId", updateModule);
}

import * as assignmentsDao from "./dao.js";

export default function AssignmentsRoutes(app) {
  const deleteAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.json(status);
  };

  const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.json(status);
  };

  app.delete("/api/assignments/:assignmentId", deleteAssignment);
  app.put("/api/assignments/:assignmentId", updateAssignment);
}

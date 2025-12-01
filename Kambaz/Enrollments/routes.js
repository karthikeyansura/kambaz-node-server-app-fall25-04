import * as enrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  const findAllEnrollments = async (req, res) => {
    const enrollments = await enrollmentsDao.findAllEnrollments();
    res.json(enrollments);
  };

  const findEnrollmentsForUser = async (req, res) => {
    const { userId } = req.params;
    const enrollments = await enrollmentsDao.findEnrollmentsForUser(userId);
    res.json(enrollments);
  };

  const enrollUserInCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = await enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.json(enrollment);
  };

  const unenrollUserFromCourse = async (req, res) => {
    const { enrollmentId } = req.params;
    const status = await enrollmentsDao.deleteEnrollment(enrollmentId);
    res.json(status);
  };

  app.get("/api/enrollments", findAllEnrollments);
  app.get("/api/enrollments/users/:userId", findEnrollmentsForUser);
  app.post("/api/enrollments/users/:userId/courses/:courseId", enrollUserInCourse);
  app.delete("/api/enrollments/:enrollmentId", unenrollUserFromCourse);
}

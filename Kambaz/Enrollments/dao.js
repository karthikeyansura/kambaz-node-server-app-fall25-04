import model from "./model.js";

export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}

export async function findEnrollmentsForUser(userId) {
  return model.find({ user: userId });
}

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = {
    _id: `${userId}-${courseId}`,
    user: userId,
    course: courseId,
    enrollmentDate: new Date(),
  };
  return model.create(newEnrollment);
}

export function unenrollUserFromCourse(userId, courseId) {
  return model.deleteOne({ user: userId, course: courseId });
}

export function deleteEnrollment(enrollmentId) {
  return model.deleteOne({ _id: enrollmentId });
}

export function findAllEnrollments() {
  return model.find();
}

export function deleteEnrollmentsByCourse(courseId) {
  return model.deleteMany({ course: courseId });
}

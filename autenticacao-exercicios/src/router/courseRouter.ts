const courseDatabase = new CourseDatabase();
const courseBusiness = new CourseBusiness(courseDatabase);
const courseController = new CourseController(courseBusiness);

courseRouter.post("/", courseController.createCourse);

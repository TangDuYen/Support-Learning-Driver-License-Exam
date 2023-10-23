import CourseTable from '../../molecules/course-table/course-table'
import CourseContent from '../../molecules/course-content/course-content'
import CourseCommitment from '../../molecules/course-commitment/course-commitment'
import { useEffect } from 'react';

function CourseTemplate() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <CourseTable />
      <CourseContent />
      <CourseCommitment />
    </>
  )
}

export default CourseTemplate
import AdminLayout from "../page";

const Enrollments = () => {

    const enrollments = [
        { id: 1, student: 'John Doe', course: 'Web Development Bootcamp', status: 'Completed' },
        { id: 2, student: 'Jane Smith', course: 'Python for Beginners', status: 'In Progress' },
        { id: 3, student: 'Michael Brown', course: 'Machine Learning Masterclass', status: 'Not Started' },
      ];

    return (
      <AdminLayout>
        <h1 className="text-3xl font-bold mb-4">Student Enrollments</h1>
        <p>List of enrollments will be displayed here.</p>
        <table className="min-w-full bg-white border">
        <thead>
          <tr className="w-full bg-gray-200">
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Student</th>
            <th className="px-4 py-2 text-left">Course</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((enrollment) => (
            <tr key={enrollment.id} className="border-b">
              <td className="px-4 py-2">{enrollment.id}</td>
              <td className="px-4 py-2">{enrollment.student}</td>
              <td className="px-4 py-2">{enrollment.course}</td>
              <td className="px-4 py-2">{enrollment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </AdminLayout>
    );
  };
  
  export default Enrollments;
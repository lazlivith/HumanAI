// Training Dashboard — wireframe UX

export function TrainingDashboard() {
  const courses = [
    { id: 'TRN-101', title: 'Leadership Fundamentals', category: 'Leadership', enrolled: 34, completed: 28, duration: '8h', format: 'Online', status: 'Active' },
    { id: 'TRN-102', title: 'Data Privacy & GDPR', category: 'Compliance', enrolled: 248, completed: 201, duration: '3h', format: 'Online', status: 'Mandatory' },
    { id: 'TRN-103', title: 'Advanced React Patterns', category: 'Technical', enrolled: 22, completed: 14, duration: '12h', format: 'Workshop', status: 'Active' },
    { id: 'TRN-104', title: 'Conflict Resolution', category: 'Soft Skills', enrolled: 58, completed: 41, duration: '4h', format: 'Online', status: 'Active' },
    { id: 'TRN-105', title: 'Financial Planning for PMs', category: 'Management', enrolled: 18, completed: 9, duration: '6h', format: 'Live Session', status: 'Active' },
    { id: 'TRN-106', title: 'Cybersecurity Awareness', category: 'Compliance', enrolled: 248, completed: 180, duration: '2h', format: 'Online', status: 'Mandatory' },
    { id: 'TRN-107', title: 'Agile & Scrum Practitioner', category: 'Technical', enrolled: 44, completed: 38, duration: '10h', format: 'Workshop', status: 'Active' },
  ];

  const employeeProgress = [
    { name: 'James Harlow', completed: 8, inProgress: 2, assigned: 12, pct: 67 },
    { name: 'Sara Mitchell', completed: 5, inProgress: 1, assigned: 8, pct: 63 },
    { name: 'Yuki Tanaka', completed: 11, inProgress: 3, assigned: 14, pct: 79 },
    { name: 'Priya Nair', completed: 9, inProgress: 0, assigned: 10, pct: 90 },
    { name: 'Carlos Rivera', completed: 4, inProgress: 2, assigned: 9, pct: 44 },
  ];

  const categories = [
    { label: 'Compliance', count: 6, mandatory: true },
    { label: 'Technical', count: 18 },
    { label: 'Leadership', count: 9 },
    { label: 'Soft Skills', count: 12 },
    { label: 'Management', count: 7 },
    { label: 'Onboarding', count: 5 },
  ];

  return (
    <div className="flex-1 overflow-auto p-6 flex flex-col gap-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base text-neutral-800 mb-1">Training & Development</h2>
          <p className="text-xs text-neutral-500">Manage courses, track progress, and ensure compliance training completion</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-9 px-4 border-2 border-neutral-300 bg-white rounded-sm text-xs text-neutral-600">Export Progress</button>
          <button className="h-9 px-4 border-2 border-neutral-700 bg-neutral-700 rounded-sm text-xs text-white">+ Add Course</button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-5 gap-4">
        {[
          { label: 'Total Courses', val: '57', sub: '6 mandatory' },
          { label: 'Enrolled Employees', val: '231', sub: '93% of workforce' },
          { label: 'Completions (MTD)', val: '312', sub: '+24 vs last month' },
          { label: 'Avg. Completion Rate', val: '74%', sub: 'Across all courses' },
          { label: 'Compliance Overdue', val: '18', sub: 'Action required' },
        ].map((k) => (
          <div key={k.label} className="bg-white border-2 border-neutral-300 rounded-sm p-4">
            <div className="text-xs text-neutral-500 mb-1">{k.label}</div>
            <div className="text-2xl text-neutral-800 mb-1">{k.val}</div>
            <div className="text-xs text-neutral-400">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Course categories + progress row */}
      <div className="grid grid-cols-3 gap-5">

        {/* Course categories */}
        <div className="bg-white border-2 border-neutral-300 rounded-sm p-5">
          <span className="text-sm text-neutral-800 block mb-4">Course Categories</span>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <div key={cat.label} className="flex items-center justify-between p-3 border border-neutral-200 rounded-sm hover:bg-neutral-50 cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-neutral-400 rounded-sm" />
                  <span className="text-xs text-neutral-700">{cat.label}</span>
                  {cat.mandatory && (
                    <span className="text-xs border border-neutral-500 px-1 rounded-sm text-neutral-600">Required</span>
                  )}
                </div>
                <span className="text-xs text-neutral-500">{cat.count} courses</span>
              </div>
            ))}
          </div>
        </div>

        {/* Completion trend */}
        <div className="bg-white border-2 border-neutral-300 rounded-sm p-5">
          <span className="text-sm text-neutral-800 block mb-4">Completion Trend</span>
          <div className="flex gap-2">
            <div className="flex flex-col justify-between h-32 pr-1">
              {['400', '300', '200', '100', '0'].map((v) => (
                <span key={v} className="text-xs text-neutral-400">{v}</span>
              ))}
            </div>
            <div className="flex-1 h-32 border-l-2 border-b-2 border-neutral-300 relative bg-neutral-50">
              {[25, 50, 75].map((p) => (
                <div key={p} className="absolute left-0 right-0 border-t border-neutral-200" style={{ top: `${p}%` }} />
              ))}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <polyline
                  points="0,90 60,80 120,70 180,55 240,45 300,40 360,30"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
              </svg>
            </div>
          </div>
          <div className="flex ml-8 mt-1 justify-between">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => (
              <span key={m} className="text-xs text-neutral-400">{m}</span>
            ))}
          </div>
        </div>

        {/* Employee progress */}
        <div className="bg-white border-2 border-neutral-300 rounded-sm p-5">
          <span className="text-sm text-neutral-800 block mb-4">Top Learners</span>
          <div className="flex flex-col gap-3">
            {employeeProgress.map((e) => (
              <div key={e.name} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-neutral-300 bg-neutral-200 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-neutral-700">{e.name}</span>
                    <span className="text-xs text-neutral-500">{e.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-200 rounded-sm relative">
                    <div className="absolute inset-y-0 left-0 bg-neutral-500 rounded-sm" style={{ width: `${e.pct}%` }} />
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">{e.completed}/{e.assigned} courses</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training table */}
      <div className="bg-white border-2 border-neutral-300 rounded-sm">
        <div className="border-b-2 border-neutral-300 px-5 py-3 flex items-center justify-between">
          <span className="text-sm text-neutral-800">All Courses</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-neutral-300 bg-neutral-50 rounded-sm h-8 px-3 gap-2 w-48">
              <div className="w-3 h-3 border border-neutral-400 rounded-full" />
              <span className="text-xs text-neutral-400">Search courses...</span>
            </div>
            {['Category', 'Format', 'Status'].map((f) => (
              <div key={f} className="h-8 px-3 border border-neutral-300 bg-neutral-50 rounded-sm flex items-center gap-2">
                <span className="text-xs text-neutral-600">{f}</span>
                <div className="w-2 h-2 border-b border-r border-neutral-400" style={{ transform: 'rotate(45deg)' }} />
              </div>
            ))}
          </div>
        </div>
        <table className="w-full">
          <thead className="border-b-2 border-neutral-300 bg-neutral-50">
            <tr>
              {['ID', 'Course Title', 'Category', 'Enrolled', 'Completed', 'Completion %', 'Duration', 'Format', 'Status', ''].map((h) => (
                <th key={h} className="text-left p-4 text-xs text-neutral-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {courses.map((c, i) => {
              const pct = Math.round((c.completed / c.enrolled) * 100);
              return (
                <tr key={c.id} className={`border-b border-neutral-200 hover:bg-neutral-50 ${i === courses.length - 1 ? 'border-0' : ''}`}>
                  <td className="p-4 text-xs text-neutral-500">{c.id}</td>
                  <td className="p-4 text-xs text-neutral-700">{c.title}</td>
                  <td className="p-4"><TrainBadge label={c.category} /></td>
                  <td className="p-4 text-xs text-neutral-600">{c.enrolled}</td>
                  <td className="p-4 text-xs text-neutral-600">{c.completed}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-neutral-200 rounded-sm relative w-16">
                        <div className="absolute inset-y-0 left-0 bg-neutral-500 rounded-sm" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-neutral-600">{pct}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-xs text-neutral-500">{c.duration}</td>
                  <td className="p-4 text-xs text-neutral-500">{c.format}</td>
                  <td className="p-4"><CourseStatusBadge status={c.status} /></td>
                  <td className="p-4">
                    <button className="px-3 h-7 border border-neutral-300 rounded-sm text-xs text-neutral-600 hover:bg-neutral-100">Manage</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="border-t-2 border-neutral-300 px-5 py-3 flex items-center justify-between">
          <span className="text-xs text-neutral-500">Showing 7 of 57 courses</span>
          <div className="flex items-center gap-1">
            {['‹', '1', '2', '3', '›'].map((l) => (
              <button key={l} className={`w-7 h-7 border rounded-sm text-xs flex items-center justify-center ${l === '1' ? 'border-neutral-800 bg-neutral-800 text-white' : 'border-neutral-300 text-neutral-600'}`}>{l}</button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

function TrainBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs border border-neutral-300 rounded-sm text-neutral-600">{label}</span>
  );
}

function CourseStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Mandatory: 'border-neutral-700 text-neutral-800',
    Active: 'border-neutral-500 text-neutral-600',
    Draft: 'border-neutral-300 text-neutral-400',
  };
  return (
    <span className={`inline-block px-2 py-0.5 text-xs border rounded-sm ${styles[status] ?? styles.Active}`}>
      {status}
    </span>
  );
}

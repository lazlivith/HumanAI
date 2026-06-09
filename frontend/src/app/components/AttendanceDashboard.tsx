// Attendance Dashboard — time tracking and attendance management

export function AttendanceDashboard() {
  const todayAttendance = [
    { name: 'James Harlow', dept: 'Engineering', checkIn: '08:45', checkOut: '—', status: 'Present', hours: '3.5' },
    { name: 'Sara Mitchell', dept: 'Marketing', checkIn: '09:02', checkOut: '—', status: 'Present', hours: '3.0' },
    { name: 'David Osei', dept: 'Design', checkIn: '—', checkOut: '—', status: 'On Leave', hours: '0.0' },
    { name: 'Priya Nair', dept: 'HR', checkIn: '08:30', checkOut: '—', status: 'Present', hours: '3.8' },
    { name: 'Carlos Rivera', dept: 'Sales', checkIn: '09:15', checkOut: '—', status: 'Present', hours: '2.8' },
    { name: 'Yuki Tanaka', dept: 'Engineering', checkIn: '08:58', checkOut: '—', status: 'Present', hours: '3.1' },
    { name: 'Tom Brennan', dept: 'Operations', checkIn: '10:45', checkOut: '—', status: 'Late', hours: '1.3' },
  ];

  return (
    <div className="flex-1 overflow-auto p-6 flex flex-col gap-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg text-neutral-800 mb-1">Attendance Tracking</h2>
          <p className="text-xs text-neutral-500">Monitor employee attendance, time logs, and leave requests</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-9 px-4 border-2 border-neutral-300 bg-white rounded-sm text-xs text-neutral-600">
            Export Timesheet
          </button>
          <button className="h-9 px-4 border-2 border-neutral-700 bg-neutral-700 rounded-sm text-xs text-white">
            Mark Attendance
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-6 gap-4">
        {[
          { label: 'Present Today', value: '218' },
          { label: 'Late Arrivals', value: '7' },
          { label: 'On Leave', value: '12' },
          { label: 'Absent', value: '11' },
          { label: 'Remote', value: '42' },
          { label: 'Avg. Hrs/Day', value: '7.8' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border-2 border-neutral-300 rounded-sm p-4">
            <div className="text-xs text-neutral-500 mb-1">{stat.label}</div>
            <div className="text-2xl text-neutral-800">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Today's attendance */}
      <div className="bg-white border-2 border-neutral-300 rounded-sm">
        <div className="border-b-2 border-neutral-300 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm text-neutral-800">Today's Attendance</span>
            <div className="h-6 px-2 bg-neutral-100 border border-neutral-300 rounded-sm flex items-center">
              <span className="text-xs text-neutral-600">Tuesday, June 2, 2026</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-neutral-300 bg-neutral-50 rounded-sm h-8 px-3 gap-2 w-48">
              <div className="w-3 h-3 border border-neutral-400 rounded-full" />
              <span className="text-xs text-neutral-400">Search...</span>
            </div>
            {['Department', 'Status'].map((f) => (
              <div
                key={f}
                className="h-8 px-3 border border-neutral-300 bg-neutral-50 rounded-sm flex items-center gap-2"
              >
                <span className="text-xs text-neutral-600">{f}</span>
                <div className="w-3 h-3 border-b border-r border-neutral-400" style={{ transform: 'rotate(45deg)' }} />
              </div>
            ))}
          </div>
        </div>

        <table className="w-full">
          <thead className="border-b-2 border-neutral-300 bg-neutral-50">
            <tr>
              {['Employee', 'Department', 'Check In', 'Check Out', 'Hours Worked', 'Status', 'Actions'].map((h) => (
                <th key={h} className="text-left p-4 text-xs text-neutral-600">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {todayAttendance.map((att, i) => (
              <tr
                key={att.name}
                className={`border-b border-neutral-200 hover:bg-neutral-50 ${i === todayAttendance.length - 1 ? 'border-0' : ''}`}
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 border-neutral-300 bg-neutral-200 flex-shrink-0" />
                    <span className="text-xs text-neutral-700">{att.name}</span>
                  </div>
                </td>
                <td className="p-4 text-xs text-neutral-500">{att.dept}</td>
                <td className="p-4 text-xs text-neutral-600">{att.checkIn}</td>
                <td className="p-4 text-xs text-neutral-500">{att.checkOut}</td>
                <td className="p-4 text-xs text-neutral-600">{att.hours} hrs</td>
                <td className="p-4">
                  <AttendanceStatusBadge status={att.status} />
                </td>
                <td className="p-4">
                  <button className="px-3 h-7 border border-neutral-300 rounded-sm text-xs text-neutral-600 hover:bg-neutral-100">
                    View Log
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-3 gap-5">
        {/* Weekly trend */}
        <div className="bg-white border-2 border-neutral-300 rounded-sm p-5">
          <h3 className="text-sm text-neutral-700 mb-4">Weekly Attendance Trend</h3>
          <div className="flex items-end justify-between gap-2 h-32">
            {[
              { day: 'Mon', pct: 92 },
              { day: 'Tue', pct: 88 },
              { day: 'Wed', pct: 95 },
              { day: 'Thu', pct: 91 },
              { day: 'Fri', pct: 85 },
              { day: 'Sat', pct: 12 },
              { day: 'Sun', pct: 8 },
            ].map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="text-xs text-neutral-500">{d.pct}%</div>
                <div
                  className="w-full bg-neutral-300 border border-neutral-400"
                  style={{ height: `${d.pct}%` }}
                />
                <div className="text-xs text-neutral-500">{d.day}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leave requests */}
        <div className="bg-white border-2 border-neutral-300 rounded-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm text-neutral-700">Pending Leave Requests</h3>
            <div className="h-5 w-5 rounded-full bg-neutral-700 flex items-center justify-center">
              <span className="text-xs text-white">4</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { name: 'Maria Lopez', type: 'Vacation', dates: 'Jun 10 - 14', days: 5 },
              { name: 'Robert Smith', type: 'Sick Leave', dates: 'Jun 3', days: 1 },
              { name: 'Jennifer Wu', type: 'Personal', dates: 'Jun 8 - 9', days: 2 },
              { name: 'Lisa Taylor', type: 'Vacation', dates: 'Jun 20 - 28', days: 7 },
            ].map((req) => (
              <div key={req.name} className="border border-neutral-300 rounded-sm p-3 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-700">{req.name}</span>
                  <span className="text-xs text-neutral-500">{req.days}d</span>
                </div>
                <div className="text-xs text-neutral-500">{req.type} • {req.dates}</div>
                <div className="flex gap-2">
                  <button className="flex-1 h-6 border border-neutral-700 bg-neutral-700 rounded-sm text-xs text-white">
                    Approve
                  </button>
                  <button className="flex-1 h-6 border border-neutral-300 rounded-sm text-xs text-neutral-600">
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time distribution */}
        <div className="bg-white border-2 border-neutral-300 rounded-sm p-5">
          <h3 className="text-sm text-neutral-700 mb-4">Time Distribution</h3>
          <div className="flex flex-col gap-3">
            {[
              { label: 'On Time', count: 218, pct: 88 },
              { label: 'Late (< 15 min)', count: 12, pct: 5 },
              { label: 'Late (> 15 min)', count: 7, pct: 3 },
              { label: 'Half Day', count: 6, pct: 2 },
              { label: 'Absent (Approved)', count: 3, pct: 1 },
              { label: 'Absent (Unapproved)', count: 2, pct: 1 },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-neutral-600">{item.label}</span>
                    <span className="text-xs text-neutral-500">{item.count} ({item.pct}%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-200 rounded-sm relative">
                    <div
                      className="absolute inset-y-0 left-0 bg-neutral-500 rounded-sm"
                      style={{ width: `${item.pct * 1.1}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

function AttendanceStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Present: 'border-neutral-700 text-neutral-800',
    Late: 'border-neutral-500 text-neutral-600',
    'On Leave': 'border-neutral-400 text-neutral-500',
    Absent: 'border-neutral-300 text-neutral-400',
  };
  return (
    <span className={`inline-block px-2 py-0.5 text-xs border rounded-sm ${styles[status] ?? styles.Present}`}>
      {status}
    </span>
  );
}

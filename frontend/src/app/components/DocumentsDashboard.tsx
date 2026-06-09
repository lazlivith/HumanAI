// Documents Dashboard — wireframe UX

export function DocumentsDashboard() {
  const documents = [
    { id: 'DOC-001', name: 'Employee Handbook 2026', category: 'Policy', size: '2.4 MB', type: 'PDF', modified: '2026-05-15', owner: 'HR Admin', access: 'All Staff' },
    { id: 'DOC-002', name: 'Q1 Performance Review Template', category: 'Templates', size: '540 KB', type: 'DOCX', modified: '2026-04-10', owner: 'HR Team', access: 'Managers' },
    { id: 'DOC-003', name: 'Benefits Summary 2026', category: 'Benefits', size: '1.1 MB', type: 'PDF', modified: '2026-01-08', owner: 'HR Admin', access: 'All Staff' },
    { id: 'DOC-004', name: 'NDA Template — Standard', category: 'Legal', size: '190 KB', type: 'DOCX', modified: '2026-03-22', owner: 'Legal', access: 'Restricted' },
    { id: 'DOC-005', name: 'Onboarding Checklist v3', category: 'Templates', size: '88 KB', type: 'XLSX', modified: '2026-05-01', owner: 'HR Team', access: 'Managers' },
    { id: 'DOC-006', name: 'Remote Work Policy', category: 'Policy', size: '320 KB', type: 'PDF', modified: '2026-02-14', owner: 'HR Admin', access: 'All Staff' },
    { id: 'DOC-007', name: 'Annual Salary Band Guide', category: 'Compensation', size: '760 KB', type: 'PDF', modified: '2026-05-30', owner: 'Finance', access: 'Restricted' },
    { id: 'DOC-008', name: 'Training Completion Certificates', category: 'Training', size: '14.2 MB', type: 'ZIP', modified: '2026-05-28', owner: 'L&D Team', access: 'Managers' },
  ];

  const categories = [
    { label: 'All Documents', count: 134 },
    { label: 'Policy', count: 28 },
    { label: 'Templates', count: 41 },
    { label: 'Legal', count: 19 },
    { label: 'Benefits', count: 14 },
    { label: 'Compensation', count: 11 },
    { label: 'Training', count: 21 },
  ];

  return (
    <div className="flex-1 overflow-auto p-6 flex flex-col gap-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base text-neutral-800 mb-1">Documents</h2>
          <p className="text-xs text-neutral-500">Manage HR documents, policies, templates, and compliance records</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-9 px-4 border-2 border-neutral-300 bg-white rounded-sm text-xs text-neutral-600">New Folder</button>
          <button className="h-9 px-4 border-2 border-neutral-700 bg-neutral-700 rounded-sm text-xs text-white">Upload Document</button>
        </div>
      </div>

      {/* Main layout: sidebar + content */}
      <div className="flex gap-5 flex-1">

        {/* Left: categories sidebar */}
        <div className="w-52 flex-shrink-0 flex flex-col gap-3">
          {/* Search */}
          <div className="bg-white border-2 border-neutral-300 rounded-sm">
            <div className="flex items-center border-b border-neutral-200 h-9 px-3 gap-2">
              <div className="w-3 h-3 border border-neutral-400 rounded-full flex-shrink-0" />
              <span className="text-xs text-neutral-400">Search documents...</span>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white border-2 border-neutral-300 rounded-sm flex-1">
            <div className="px-4 py-3 border-b border-neutral-200">
              <span className="text-xs text-neutral-600">Categories</span>
            </div>
            <div className="flex flex-col">
              {categories.map((cat, i) => (
                <div
                  key={cat.label}
                  className={`flex items-center justify-between px-4 py-2.5 border-b border-neutral-100 cursor-pointer ${
                    i === 0 ? 'bg-neutral-100' : 'hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-neutral-400 flex-shrink-0" />
                    <span className="text-xs text-neutral-700">{cat.label}</span>
                  </div>
                  <div className="h-4 px-1.5 bg-neutral-200 rounded-sm flex items-center">
                    <span className="text-xs text-neutral-500">{cat.count}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Upload zone */}
            <div className="p-4 border-t-2 border-neutral-200 mt-2">
              <div className="border-2 border-dashed border-neutral-300 rounded-sm p-4 flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-2 border-neutral-400 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-neutral-400 border-b-0 border-r-0" style={{ transform: 'rotate(45deg) translate(2px, 2px)' }} />
                </div>
                <span className="text-xs text-neutral-500 text-center">Drop files here or click to upload</span>
                <div className="h-6 px-3 border border-neutral-400 rounded-sm flex items-center">
                  <span className="text-xs text-neutral-600">Browse Files</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: main content area */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Document table controls */}
          <div className="bg-white border-2 border-neutral-300 rounded-sm">
            <div className="border-b-2 border-neutral-300 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm text-neutral-800">All Documents</span>
                <div className="h-6 px-2 bg-neutral-100 border border-neutral-300 rounded-sm flex items-center">
                  <span className="text-xs text-neutral-600">134 files</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {['Category', 'Type', 'Access'].map((f) => (
                  <div key={f} className="h-8 px-3 border border-neutral-300 bg-neutral-50 rounded-sm flex items-center gap-2">
                    <span className="text-xs text-neutral-600">{f}</span>
                    <div className="w-2 h-2 border-b border-r border-neutral-400" style={{ transform: 'rotate(45deg)' }} />
                  </div>
                ))}
                <div className="flex items-center border-2 border-neutral-300 bg-neutral-50 rounded-sm h-8">
                  <button className="px-3 h-full border-r border-neutral-300 text-xs text-neutral-600">List</button>
                  <button className="px-3 h-full text-xs text-neutral-400">Grid</button>
                </div>
              </div>
            </div>

            <table className="w-full">
              <thead className="border-b-2 border-neutral-300 bg-neutral-50">
                <tr>
                  <th className="p-4 w-8"><div className="w-4 h-4 border-2 border-neutral-400" /></th>
                  {['Name', 'Category', 'Type', 'Size', 'Modified', 'Owner', 'Access', ''].map((h) => (
                    <th key={h} className="text-left p-4 text-xs text-neutral-600">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, i) => (
                  <tr key={doc.id} className={`border-b border-neutral-200 hover:bg-neutral-50 ${i === documents.length - 1 ? 'border-0' : ''}`}>
                    <td className="p-4"><div className="w-4 h-4 border-2 border-neutral-400" /></td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-8 border-2 border-neutral-300 bg-neutral-100 rounded-sm flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-neutral-500" style={{ fontSize: '8px' }}>{doc.type}</span>
                        </div>
                        <span className="text-xs text-neutral-700">{doc.name}</span>
                      </div>
                    </td>
                    <td className="p-4"><DocBadge label={doc.category} /></td>
                    <td className="p-4 text-xs text-neutral-500">{doc.type}</td>
                    <td className="p-4 text-xs text-neutral-500">{doc.size}</td>
                    <td className="p-4 text-xs text-neutral-500">{doc.modified}</td>
                    <td className="p-4 text-xs text-neutral-500">{doc.owner}</td>
                    <td className="p-4"><AccessBadge label={doc.access} /></td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <button className="px-2 h-7 border border-neutral-300 rounded-sm text-xs text-neutral-600 hover:bg-neutral-100">View</button>
                        <button className="w-7 h-7 border border-neutral-300 rounded-sm flex items-center justify-center hover:bg-neutral-100">
                          <div className="flex flex-col gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-neutral-400" />
                            <div className="w-1 h-1 rounded-full bg-neutral-400" />
                            <div className="w-1 h-1 rounded-full bg-neutral-400" />
                          </div>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="border-t-2 border-neutral-300 px-5 py-3 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Showing 1 – 8 of 134 documents</span>
              <div className="flex items-center gap-1">
                {['‹', '1', '2', '3', '›'].map((l) => (
                  <button key={l} className={`w-7 h-7 border rounded-sm text-xs flex items-center justify-center ${l === '1' ? 'border-neutral-800 bg-neutral-800 text-white' : 'border-neutral-300 text-neutral-600'}`}>{l}</button>
                ))}
              </div>
            </div>
          </div>

          {/* Storage section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-white border-2 border-neutral-300 rounded-sm p-5">
              <span className="text-sm text-neutral-800 block mb-4">Storage Usage</span>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Policy Documents', gb: 4.2, total: 20, pct: 21 },
                  { label: 'Employee Records', gb: 8.7, total: 20, pct: 44 },
                  { label: 'Training Materials', gb: 3.1, total: 20, pct: 16 },
                  { label: 'Legal & Compliance', gb: 2.4, total: 20, pct: 12 },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-neutral-600">{s.label}</span>
                      <span className="text-xs text-neutral-500">{s.gb} GB</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-200 rounded-sm relative">
                      <div className="absolute inset-y-0 left-0 bg-neutral-500 rounded-sm" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border-2 border-neutral-300 rounded-sm p-5">
              <span className="text-sm text-neutral-800 block mb-4">Storage Summary</span>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full border-8 border-neutral-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs text-neutral-700">18.4 GB</span>
                    <span className="text-xs text-neutral-400">of 50 GB</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                {[
                  { label: 'Used', val: '18.4 GB' },
                  { label: 'Available', val: '31.6 GB' },
                  { label: 'Total Files', val: '134' },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between items-center py-1 border-b border-neutral-100 last:border-0">
                    <span className="text-xs text-neutral-500">{r.label}</span>
                    <span className="text-xs text-neutral-700">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs border border-neutral-300 rounded-sm text-neutral-600">{label}</span>
  );
}

function AccessBadge({ label }: { label: string }) {
  const cls = label === 'Restricted' ? 'border-neutral-700 text-neutral-800' : 'border-neutral-300 text-neutral-500';
  return (
    <span className={`inline-block px-2 py-0.5 text-xs border rounded-sm ${cls}`}>{label}</span>
  );
}

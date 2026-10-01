import { useEffect, useState } from 'react'

const storageKeys = {
  categories: 'teamtask-categories',
  departments: 'teamtask-departments',
  services: 'teamtask-services',
  issues: 'teamtask-issues',
}

const readRecords = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]')
  } catch {
    return []
  }
}

const Home = () => {
  const [categories, setCategories] = useState(() => readRecords(storageKeys.categories))
  const [departments, setDepartments] = useState(() => readRecords(storageKeys.departments))
  const [services, setServices] = useState(() => readRecords(storageKeys.services))
  const [issues, setIssues] = useState(() => readRecords(storageKeys.issues))
  const [dialog, setDialog] = useState(null)

  useEffect(() => localStorage.setItem(storageKeys.categories, JSON.stringify(categories)), [categories])
  useEffect(() => localStorage.setItem(storageKeys.departments, JSON.stringify(departments)), [departments])
  useEffect(() => localStorage.setItem(storageKeys.services, JSON.stringify(services)), [services])
  useEffect(() => localStorage.setItem(storageKeys.issues, JSON.stringify(issues)), [issues])

  const recordsByType = { categories, departments, services, issues }
  const settersByType = {
    categories: setCategories,
    departments: setDepartments,
    services: setServices,
    issues: setIssues,
  }

  const saveRecord = (type, values, existing) => {
    let recordValues = values
    if (type === 'issues') {
      recordValues = {
        ...values,
        category: categories.find((category) => category.id === values.categoryId)?.name || '',
        department: departments.find((department) => department.id === values.departmentId)?.name || '',
      }
    }
    const setter = settersByType[type]
    if (existing) {
      setter((records) => records.map((record) => record.id === existing.id ? { ...recordValues, id: existing.id } : record))
    } else {
      setter((records) => [{ ...recordValues, id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}` }, ...records])
    }
    setDialog(null)
  }

  const deleteRecord = (type, id) => {
    settersByType[type]((records) => records.filter((record) => record.id !== id))
    if (type === 'categories') {
      const childIds = departments.filter((department) => department.categoryId === id).map((department) => department.id)
      setDepartments((records) => records.filter((department) => department.categoryId !== id))
      setIssues((records) => records.filter((issue) => issue.categoryId !== id && !childIds.includes(issue.departmentId)))
    }
    if (type === 'departments') {
      setIssues((records) => records.filter((issue) => issue.departmentId !== id))
    }
  }

  const openDialog = (type, record = null, initialValues = {}) => setDialog({ type, record, initialValues })
  const activeIssues = issues.filter((issue) => issue.status === 'Active').length

  const renderDirectory = (type, title, description) => {
    const records = recordsByType[type]
    return (
      <section className="directory-section" id={type} key={type}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">WORKSPACE DIRECTORY</p>
            <h2>{title}</h2>
            <p className="section-description">{description}</p>
          </div>
          <span className="record-count">{String(records.length).padStart(2, '0')} records</span>
        </div>
        {records.length === 0 ? (
          <div className="empty-state">Nothing here yet. Add your first {typeLabels[type]} above.</div>
        ) : (
          <div className="record-list">
            {records.map((record) => (
              <article className="record-row" key={record.id}>
                <div className="record-mark">{record.name.slice(0, 1).toUpperCase()}</div>
                <div className="record-copy">
                  <h3>{record.name}</h3>
                  <p>{record.description || 'No description provided'}</p>
                </div>
                <span className={`status-pill ${record.status === 'Active' ? 'is-active' : 'is-inactive'}`}>{record.status}</span>
                <div className="row-actions">
                  <button className="text-action" onClick={() => openDialog(type, record)}>Edit</button>
                  <button className="text-action delete-action" onClick={() => deleteRecord(type, record.id)}>Delete</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    )
  }

  const renderCategoryDirectory = () => {
    const unlinkedDepartments = departments.filter((department) => !categories.some((category) => category.id === department.categoryId))
    return (
    <section className="directory-section department-directory" id="departments">
      <div className="section-heading">
        <div>
          <p className="eyebrow">WORKSPACE DIRECTORY</p>
          <h2>Categories & departments</h2>
          <p className="section-description">Each department belongs to a category.</p>
        </div>
        <span className="record-count">{String(categories.length).padStart(2, '0')} categories</span>
      </div>
      {categories.length === 0 ? (
        <div className="empty-state">Add a category first. Departments can then be created inside it.</div>
      ) : (
        <div className="category-groups">
          {categories.map((category) => {
            const childDepartments = departments.filter((department) => department.categoryId === category.id)
            return (
              <article className="category-group" key={category.id}>
                <div className="category-row">
                  <div className="record-mark">{category.name.slice(0, 1).toUpperCase()}</div>
                  <div className="record-copy">
                    <h3>{category.name}</h3>
                    <p>{category.description || 'Category'}</p>
                  </div>
                  <span className={`status-pill ${category.status === 'Active' ? 'is-active' : 'is-inactive'}`}>{category.status}</span>
                  <div className="row-actions">
                    <button className="text-action" onClick={() => openDialog('categories', category)}>Edit</button>
                    <button className="text-action delete-action" onClick={() => deleteRecord('categories', category.id)}>Delete</button>
                  </div>
                </div>
                <div className="category-departments">
                  <div className="child-heading"><span>DEPARTMENTS ({childDepartments.length})</span><button className="text-action" onClick={() => openDialog('departments', null, { categoryId: category.id })}>+ Add department</button></div>
                  {childDepartments.length === 0 ? <p className="no-departments">No departments yet.</p> : childDepartments.map((department) => (
                    <div className="department-row" key={department.id}>
                      <div className="department-marker" />
                      <div className="record-copy"><h3>{department.name}</h3><p>{department.description || category.name}</p></div>
                      <span className={`status-pill ${department.status === 'Active' ? 'is-active' : 'is-inactive'}`}>{department.status}</span>
                      <div className="row-actions">
                        <button className="text-action" onClick={() => openDialog('departments', department)}>Edit</button>
                        <button className="text-action delete-action" onClick={() => deleteRecord('departments', department.id)}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
          {unlinkedDepartments.length > 0 && (
            <article className="category-group unlinked-group">
              <div className="unlinked-heading"><strong>Needs category</strong><span>Assign a parent category to keep these linked.</span></div>
              {unlinkedDepartments.map((department) => (
                <div className="department-row" key={department.id}>
                  <div className="department-marker" />
                  <div className="record-copy"><h3>{department.name}</h3><p>{department.description || 'Department'}</p></div>
                  <span className={`status-pill ${department.status === 'Active' ? 'is-active' : 'is-inactive'}`}>{department.status}</span>
                  <div className="row-actions">
                    <button className="text-action" onClick={() => openDialog('departments', department)}>Edit</button>
                    <button className="text-action delete-action" onClick={() => deleteRecord('departments', department.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </article>
          )}
        </div>
      )}
    </section>
    )
  }

  return (
    <main className="workspace" id="home">
      <section className="welcome-row">
        <div>
          <p className="eyebrow">OPERATIONS OVERVIEW</p>
          <h1>Make work <span>work better.</span></h1>
          <p className="welcome-copy">Keep your teams, services, and incoming issues in one clear place.</p>
        </div>
        <div className="overview-stats">
          <div><strong>{issues.length}</strong><span>Total issues</span></div>
          <div><strong>{activeIssues}</strong><span>Active now</span></div>
        </div>
      </section>

      <section className="quick-actions" aria-label="Create records">
        <button className="create-button" onClick={() => openDialog('categories')}><span className="plus-icon">+</span><span><small>CREATE CATEGORY</small>Add category</span></button>
        <button className="create-button" onClick={() => openDialog('departments')} disabled={categories.length === 0} title={categories.length === 0 ? 'Add a category first' : undefined}><span className="plus-icon">+</span><span><small>BUILD YOUR TEAM</small>Add department</span></button>
        <button className="create-button" onClick={() => openDialog('services')}><span className="plus-icon">+</span><span><small>WHAT YOU PROVIDE</small>Add service</span></button>
      </section>

      <section className="directory-grid" id="directories">
        {renderCategoryDirectory()}
        {renderDirectory('services', 'Services', 'The services your teams support every day.')}
      </section>

      <section className="issues-section" id="issues">
        <div className="section-heading issues-heading">
          <div>
            <p className="eyebrow">INCOMING & IN PROGRESS</p>
            <h2>Issue log <span className="inline-count">{issues.length}</span></h2>
            <p className="section-description">A shared view of requests that need attention.</p>
          </div>
          <button className="primary-button" onClick={() => openDialog('issues')}><span>+</span> Report an issue</button>
        </div>
        {issues.length === 0 ? (
          <div className="empty-state">No issues reported. Your team is all caught up.</div>
        ) : (
          <div className="issue-table-wrap">
            <table className="issue-table">
              <thead><tr><th>ISSUE</th><th>CATEGORY</th><th>DEPARTMENT</th><th>SERVICE</th><th>STATUS</th><th></th></tr></thead>
              <tbody>
                {issues.map((issue) => (
                  <tr key={issue.id}>
                    <td><strong>{issue.title}</strong><small>{issue.description || 'No details added'}</small></td>
                    <td>{categories.find((category) => category.id === issue.categoryId)?.name || issue.category || '—'}</td>
                    <td>{departments.find((department) => department.id === issue.departmentId)?.name || issue.department || '—'}</td>
                    <td>{issue.service || '—'}</td>
                    <td><span className={`status-pill ${issue.status === 'Active' ? 'is-active' : 'is-inactive'}`}>{issue.status}</span></td>
                    <td><div className="row-actions"><button className="text-action" onClick={() => openDialog('issues', issue)}>Edit</button><button className="text-action delete-action" onClick={() => deleteRecord('issues', issue.id)}>Delete</button></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {dialog && <RecordDialog
        type={dialog.type}
        record={dialog.record}
        categories={categories}
        departments={departments}
        services={services}
        initialValues={dialog.initialValues}
        onClose={() => setDialog(null)}
        onSave={(values) => saveRecord(dialog.type, values, dialog.record)}
      />}
    </main>
  )
}

const typeLabels = { categories: 'category', departments: 'department', services: 'service', issues: 'issue' }

const RecordDialog = ({ type, record, categories, departments, services, initialValues, onClose, onSave }) => {
  const isIssue = type === 'issues'
  const [values, setValues] = useState(() => {
    if (record && isIssue) {
      return {
        ...record,
        categoryId: record.categoryId || categories.find((category) => category.name === record.category)?.id || '',
        departmentId: record.departmentId || departments.find((department) => department.name === record.department)?.id || '',
      }
    }
    if (record) return record
    return isIssue
      ? { title: '', description: '', categoryId: '', departmentId: '', service: '', status: 'Active', ...initialValues }
      : { name: '', description: '', categoryId: '', status: 'Active', ...initialValues }
  })
  const update = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
  const updateIssueCategory = (event) => setValues((current) => ({ ...current, categoryId: event.target.value, departmentId: '' }))
  const matchingDepartments = departments.filter((department) => department.categoryId === values.categoryId)

  const submit = (event) => {
    event.preventDefault()
    onSave(values)
  }

  return (
    <div className="dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <div className="dialog-heading">
          <div><p className="eyebrow">{record ? 'UPDATE RECORD' : 'NEW RECORD'}</p><h2 id="dialog-title">{record ? 'Edit' : 'Add'} {typeLabels[type]}</h2></div>
          <button className="close-button" aria-label="Close dialog" onClick={onClose}>×</button>
        </div>
        <form onSubmit={submit}>
          {isIssue ? <>
            <label>Issue title<input name="title" value={values.title} onChange={update} placeholder="What needs attention?" required autoFocus /></label>
            <label>Details<textarea name="description" value={values.description} onChange={update} placeholder="Add context for the team" rows="3" /></label>
            <div className="form-grid">
              <label>Category<select name="categoryId" value={values.categoryId} onChange={updateIssueCategory} required><option value="">Select category</option>{categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
              <label>Department<select name="departmentId" value={values.departmentId} onChange={update} disabled={!values.categoryId} required><option value="">{values.categoryId ? 'Select department' : 'Choose category first'}</option>{matchingDepartments.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
              <label>Service<select name="service" value={values.service} onChange={update}><option value="">Select service</option>{services.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}</select></label>
              <StatusField value={values.status} onChange={update} />
            </div>
          </> : <>
            <label>{typeLabels[type]} name<input name="name" value={values.name} onChange={update} placeholder={`Enter ${typeLabels[type]} name`} required autoFocus /></label>
            {type === 'departments' && <label>Category<select name="categoryId" value={values.categoryId} onChange={update} required><option value="">Select category</option>{categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>}
            <label>Description<textarea name="description" value={values.description} onChange={update} placeholder="A short description (optional)" rows="3" /></label>
            <StatusField value={values.status} onChange={update} />
          </>}
          <div className="dialog-actions"><button type="button" className="secondary-button" onClick={onClose}>Cancel</button><button type="submit" className="primary-button">{record ? 'Save changes' : `Add ${typeLabels[type]}`}</button></div>
        </form>
      </section>
    </div>
  )
}

const StatusField = ({ value, onChange }) => (
  <label>Status<select name="status" value={value} onChange={onChange}><option>Active</option><option>Inactive</option></select></label>
)

export default Home

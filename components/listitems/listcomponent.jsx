import React from 'react'
import { ListItem } from '../'

function DocumentList(data) {
  return data.map((item, i) => <ListItem type='document' data={item} />)
}
function ProjectList(data) {
  return data.map((item, i) => <ListItem type='project' data={item} />)
}
function InvoiceList(data) {
  return data.map((item, i) => <ListItem type='invoice' data={item} />)
}
function ClientList(data) {
  return data.map((item, i) => <ListItem type='client' data={item} />)
}
function TaskList(data) {
  return data.map((item, i) => <ListItem type='task' data={item} />)
}

function renderList(data, type) {
  switch (type) {
    case 'client':
      return ClientList(data)
      break
    case 'invoice':
      return InvoiceList(data)
      break
    case 'project':
      return ProjectList(data)
      break
    case 'document':
      return DocumentList(data)
      break
    case 'task':
      return TaskList(data)
      break
  }
}

export default function ListComponent({ data, listType }) {
  return <div>{renderList(data, listType)}</div>
}

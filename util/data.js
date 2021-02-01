import { format } from 'date-fns'

let date = new Date()

export const Items = [
  {
    name: 'Web Design',
    cost: 500,
  },
  {
    name: 'Web Development',
    cost: 1000,
  },
  {
    name: 'Redesign',
    cost: 500,
  },
  {
    name: 'Landing Page',
    cost: 500,
  },
]

export const Client = [
  {
    firstname: 'Klaven',
    lastname: 'Jones',
    email: 'klay@email.com',
    phone: '555-555-5555',
    website: 'klavenjones.com',
    linkedin: 'linkedin/in/KlavenJ',
    twitter: 'twitter.com/KlavenJ',
    title: 'Software Engineer',
    company: 'PixaQode',
    projects: [],
    activity: [],
    avatar:
      'https://images.unsplash.com/photo-1611817757571-75fe5c08ffd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    firstname: 'Johnny',
    lastname: 'Jackson',
    email: 'klay@email.com',
    phone: '555-555-5555',
    website: 'klavenjones.com',
    linkedin: 'linkedin/in/KlavenJ',
    twitter: 'twitter.com/KlavenJ',
    title: 'Software Engineer',
    company: 'PixaQode',
    projects: [],
    activity: [],
    avatar:
      'https://images.unsplash.com/photo-1611817757571-75fe5c08ffd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    firstname: 'Billy',
    lastname: 'Johnson',
    email: 'klay@email.com',
    phone: '555-555-5555',
    website: 'klavenjones.com',
    linkedin: 'linkedin/in/KlavenJ',
    twitter: 'twitter.com/KlavenJ',
    title: 'Software Engineer',
    company: 'PixaQode',
    projects: [],
    activity: [],
    avatar:
      'https://images.unsplash.com/photo-1611817757571-75fe5c08ffd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  },
  {
    firstname: 'Bri',
    lastname: 'Smith',
    email: 'klay@email.com',
    phone: '555-555-5555',
    website: 'klavenjones.com',
    linkedin: 'linkedin/in/KlavenJ',
    twitter: 'twitter.com/KlavenJ',
    title: 'Software Engineer',
    company: 'PixaQode',
    projects: [],
    activity: [],
    avatar:
      'https://images.unsplash.com/photo-1505499663565-1ec2a8397f5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80',
  },
  {
    firstname: 'Stephanie',
    lastname: 'Jones',
    email: 'klay@email.com',
    phone: '555-555-5555',
    website: 'klavenjones.com',
    linkedin: 'linkedin/in/KlavenJ',
    twitter: 'twitter.com/KlavenJ',
    title: 'Software Engineer',
    company: 'PixaQode',
    projects: [],
    activity: [],
    avatar:
      'https://images.unsplash.com/photo-1505499663565-1ec2a8397f5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80',
  },
]

export const Projects = [
  {
    title: 'Website',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: format(new Date(2020, 0, 27), 'MMM, yyyy'),
    invoices: [],
    documents: [],
    tasks: [],
  },
  {
    title: 'Mobile Application',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: `${format(new Date(2020, 0, 27), 'MMM, yyyy')}`,
    invoices: [],
    documents: [],
    tasks: [],
  },
  {
    title: 'Web Application',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: `${format(new Date(2020, 0, 27), 'MMM, yyyy')}`,
    invoices: [],
    documents: [],
    tasks: [],
  },
  {
    title: 'Web Application and Mobile Application',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: `${format(new Date(2020, 0, 27), 'MMM, yyyy')}`,
    invoices: [],
    documents: [],
    tasks: [],
  },
]

export const Invoices = [
  {
    invoiceNum: 'INV0001',
    title: 'Website',
    issued: `${format(new Date(2020, 0, 27), 'MMM dd, yyyy')}`,
    due: `${format(new Date(2020, 1, 27), 'MMM dd, yyyy')}`,
    client: 'Klaven',
    items: [],
  },
  {
    invoiceNum: 'INV0002',
    title: 'Website',
    issued: `${format(new Date(2020, 0, 27), 'MMM dd, yyyy')}`,
    due: `${format(new Date(2020, 1, 27), 'MMM dd, yyyy')}`,
    client: 'Stephanie',
    items: [Items.slice(0, 1)],
  },
  {
    invoiceNum: 'INV0003',
    title: 'Website',
    issued: `${format(new Date(2020, 0, 27), 'MMM dd, yyyy')}`,
    due: `${format(new Date(2020, 1, 27), 'MMM dd, yyyy')}`,
    client: 'Johnny',
    items: [Items.slice[(0, 1)]],
  },
  {
    invoiceNum: 'INV0004',
    title: 'Website',
    issued: `${format(new Date(2020, 0, 27), 'MMM dd, yyyy')}`,
    due: `${format(new Date(2020, 1, 27), 'MMM dd, yyyy')}`,
    client: 'Johnny',
    items: [...Items],
  },
]

export const Activities = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    date: `${format(new Date(2020, 0, 27), 'MMM dd')}`,
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun',
    date: `${format(new Date(2020, 0, 27), 'MMM dd')}`,
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    date: `${format(new Date(2020, 0, 27), 'MMM dd')}`,
  },
]

export const Documents = [
  {
    title: 'Proposal',
    project: 'Project Name',
    client: 'Client Name',
    type: 'PDF',
  },
  {
    title: 'Contract',
    project: 'Project Name',
    client: 'Client Name',
    type: 'PDF',
  },
  {
    title: 'Proposal',
    project: 'Project Name',
    client: 'Client Name',
    type: 'Doc',
  },
  {
    title: 'Contract',
    project: 'Project Name',
    client: 'Client Name',
    type: 'Doc',
  },
]

export const Tasks = [
  {
    title: 'Task Title 1',
    project: 'Project Title',
    client: 'Client Name',
    completed: false,
    date: `${format(new Date(2020, 0, 27), 'MMM, yyyy')}`,
  },
  {
    title: 'Task Title 2',
    project: 'Project Title',
    client: 'Client Name',
    completed: false,
    date: `${format(new Date(2020, 0, 27), 'MMM, yyyy')}`,
  },
  {
    title: 'Task Title 3',
    project: 'Project Title',
    client: 'Client Name',
    completed: false,
    date: `${format(new Date(2020, 0, 27), 'MMM, yyyy')}`,
  },
  {
    title: 'Task Title 4',
    project: 'Project Title',
    client: 'Client Name',
    completed: false,
    date: `${format(new Date(2020, 0, 27), 'MMM, yyyy')}`,
  },
]

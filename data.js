let date = new Date()

export const Clients = [
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
    firstname: 'Bri',
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
    date: `${date.getMonth()}, ${date.getFullYear()}`,
    invoices: [],
    documents: [],
    tasks: [],
  },
  {
    title: 'Mobile Application',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: `${date.getMonth()}, ${date.getFullYear()}`,
    invoices: [],
    documents: [],
    tasks: [],
  },
  {
    title: 'Web Application',
    note:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: `${date.getMonth()}, ${date.getFullYear()}`,
    invoices: [],
    documents: [],
    tasks: [],
  },
]

export const Invoices = [
  {
    invoiceNum: 'INV0001',
    title: 'Website',
    issued: new Date(),
    due: new Date(),
    client: 'Klaven',
    items: [],
  },
  {
    invoiceNum: 'INV0002',
    title: 'Website',
    issued: new Date(),
    due: new Date(),
    client: 'Stephanie',
    items: [Items.slice(0, 1)],
  },
  {
    invoiceNum: 'INV0003',
    title: 'Website',
    issued: new Date(),
    due: new Date(),
    client: 'Johnny',
    items: [Items.slice[(0, 1)]],
  },
  {
    invoiceNum: 'INV0004',
    title: 'Website',
    issued: new Date(),
    due: new Date(),
    client: 'Johnny',
    items: [...Items],
  },
]

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

export const Activities = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
    date: new Date(),
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
    date: new Date(),
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
    date: new Date(),
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
    title: 'Proposal',
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
    title: 'Proposal',
    project: 'Project Name',
    client: 'Client Name',
    type: 'Doc',
  },
]

export const Tasks = [
  {
    title: 'Task Title',
    project: 'Project Title',
    client: 'Client Name',
    date: new Date(),
  },
  {
    title: 'Task Title',
    project: 'Project Title',
    client: 'Client Name',
    date: new Date(),
  },
  {
    title: 'Task Title',
    project: 'Project Title',
    client: 'Client Name',
    date: new Date(),
  },
  {
    title: 'Task Title',
    project: 'Project Title',
    client: 'Client Name',
    date: new Date(),
  },
]

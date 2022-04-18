const commonOptions = {
  import: ['features/**/*.ts']
};

export default {
  ...commonOptions,
  worldParameters: {
    tasks: 'features/support/tasks/session',
    sessions: 'Domain'
  }
};

export const http = {
  ...commonOptions,
  worldParameters: {
    tasks: 'features/support/tasks/session',
    sessions: 'Http'
  }
};

export const dom = {
  ...commonOptions,
  worldParameters: {
    tasks: 'features/support/tasks/dom',
    sessions: 'Domain'
  }
};
export const domHttp = {
  ...commonOptions,
  worldParameters: {
    tasks: 'features/support/tasks/dom',
    sessions: 'Http'
  }
};

// dom: `${defaultOptions} --world-parameters ${JSON.stringify({
//   tasks: path.join(tasks, 'dom'),
//   session: 'DomainSession'
// })}`,
// domHttp: `${defaultOptions} --world-parameters ${JSON.stringify({
//   tasks: path.join(tasks, 'dom'),
//   sessions: 'HttpSession'
// })}`,
// http: `${defaultOptions} --world-parameters ${JSON.stringify({
//   tasks: path.join(tasks, 'session'),
//   sessions: 'HttpSession'
// })}`,
